import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto';
export declare class CategoriaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateCategoriaDto): Promise<any>;
    findAll(userId: string): Promise<any>;
    findOne(userId: string, id: string): Promise<any>;
    update(userId: string, id: string, dto: UpdateCategoriaDto): Promise<any>;
    remove(userId: string, id: string): Promise<any>;
}
