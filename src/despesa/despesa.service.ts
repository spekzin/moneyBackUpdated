import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDespesaDto, UpdateDespesaDto } from './dto/despesa.dto';

@Injectable()
export class DespesaService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateDespesaDto) {
    return this.prisma.despesa.create({
      data: {
        ...dto,
        userId,
      },
      include: {
        cartao: true,
        categoria: true,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.despesa.findMany({
      where: { userId },
      include: {
        cartao: true,
        categoria: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByMes(userId: string, mes: string) {
    return this.prisma.despesa.findMany({
      where: {
        userId,
        OR: [{ mes }, { recorrente: true }],
      },
      include: {
        cartao: true,
        categoria: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(userId: string, id: string) {
    const despesa = await this.prisma.despesa.findFirst({
      where: { id, userId },
      include: {
        cartao: true,
        categoria: true,
      },
    });

    if (!despesa) {
      throw new NotFoundException('Despesa não encontrada');
    }

    return despesa;
  }

  async update(userId: string, id: string, dto: UpdateDespesaDto) {
    await this.findOne(userId, id);

    return this.prisma.despesa.update({
      where: { id },
      data: dto,
      include: {
        cartao: true,
        categoria: true,
      },
    });
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id);

    return this.prisma.despesa.delete({
      where: { id },
    });
  }

  async getTotalByMes(userId: string, mes: string) {
    const [avulsas, recorrentes] = await Promise.all([
      this.prisma.despesa.aggregate({
        where: { userId, mes, recorrente: false },
        _sum: { valor: true },
      }),
      this.prisma.despesa.aggregate({
        where: { userId, recorrente: true },
        _sum: { valor: true },
      }),
    ]);

    return {
      avulsas: avulsas._sum.valor || 0,
      recorrentes: recorrentes._sum.valor || 0,
      total: (avulsas._sum.valor || 0) + (recorrentes._sum.valor || 0),
    };
  }
}
