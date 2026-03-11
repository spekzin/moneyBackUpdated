import { PrismaService } from '../prisma/prisma.service';
import { CreateReceitaDto, UpdateReceitaDto } from './dto/receita.dto';
export declare class ReceitaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateReceitaDto): Promise<any>;
    findAll(userId: string): Promise<any>;
    findByMes(userId: string, mes: string): Promise<any>;
    findOne(userId: string, id: string): Promise<any>;
    update(userId: string, id: string, dto: UpdateReceitaDto): Promise<any>;
    remove(userId: string, id: string): Promise<any>;
    getTotalByMes(userId: string, mes: string): Promise<{
        total: any;
    }>;
}
