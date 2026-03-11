import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReceitaDto, UpdateReceitaDto } from './dto/receita.dto';

@Injectable()
export class ReceitaService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateReceitaDto) {
    return this.prisma.receita.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.receita.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByMes(userId: string, mes: string) {
    return this.prisma.receita.findMany({
      where: { userId, mes },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(userId: string, id: string) {
    const receita = await this.prisma.receita.findFirst({
      where: { id, userId },
    });

    if (!receita) {
      throw new NotFoundException('Receita não encontrada');
    }

    return receita;
  }

  async update(userId: string, id: string, dto: UpdateReceitaDto) {
    await this.findOne(userId, id);

    return this.prisma.receita.update({
      where: { id },
      data: dto,
    });
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id);

    return this.prisma.receita.delete({
      where: { id },
    });
  }

  async getTotalByMes(userId: string, mes: string) {
    const result = await this.prisma.receita.aggregate({
      where: { userId, mes },
      _sum: { valor: true },
    });

    return { total: result._sum.valor || 0 };
  }
}
