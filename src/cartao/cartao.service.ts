import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartaoDto, UpdateCartaoDto } from './dto/cartao.dto';

@Injectable()
export class CartaoService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateCartaoDto) {
    return this.prisma.cartao.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.cartao.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(userId: string, id: string) {
    const cartao = await this.prisma.cartao.findFirst({
      where: { id, userId },
    });

    if (!cartao) {
      throw new NotFoundException('Cartão não encontrado');
    }

    return cartao;
  }

  async update(userId: string, id: string, dto: UpdateCartaoDto) {
    await this.findOne(userId, id);

    return this.prisma.cartao.update({
      where: { id },
      data: dto,
    });
  }

  async remove(userId: string, id: string) {
    await this.findOne(userId, id);

    return this.prisma.cartao.delete({
      where: { id },
    });
  }
}
