import { PrismaService } from '../prisma/prisma.service';
import { CreateDespesaDto, UpdateDespesaDto } from './dto/despesa.dto';
export declare class DespesaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateDespesaDto): Promise<any>;
    findAll(userId: string): Promise<any>;
    findByMes(userId: string, mes: string): Promise<any>;
    findOne(userId: string, id: string): Promise<any>;
    update(userId: string, id: string, dto: UpdateDespesaDto): Promise<any>;
    remove(userId: string, id: string): Promise<any>;
    getTotalByMes(userId: string, mes: string): Promise<{
        avulsas: any;
        recorrentes: any;
        total: any;
    }>;
}
