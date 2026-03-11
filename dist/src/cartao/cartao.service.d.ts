import { PrismaService } from '../prisma/prisma.service';
import { CreateCartaoDto, UpdateCartaoDto } from './dto/cartao.dto';
export declare class CartaoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateCartaoDto): Promise<any>;
    findAll(userId: string): Promise<any>;
    findOne(userId: string, id: string): Promise<any>;
    update(userId: string, id: string, dto: UpdateCartaoDto): Promise<any>;
    remove(userId: string, id: string): Promise<any>;
}
