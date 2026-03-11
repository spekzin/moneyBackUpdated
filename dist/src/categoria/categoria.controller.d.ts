import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    create(req: any, dto: CreateCategoriaDto): Promise<any>;
    findAll(req: any): Promise<any>;
    findOne(req: any, id: string): Promise<any>;
    update(req: any, id: string, dto: UpdateCategoriaDto): Promise<any>;
    remove(req: any, id: string): Promise<any>;
}
