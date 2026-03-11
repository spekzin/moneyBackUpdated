import { ReceitaService } from './receita.service';
import { CreateReceitaDto, UpdateReceitaDto } from './dto/receita.dto';
export declare class ReceitaController {
    private readonly receitaService;
    constructor(receitaService: ReceitaService);
    create(req: any, dto: CreateReceitaDto): Promise<any>;
    findAll(req: any, mes?: string): Promise<any>;
    getTotal(req: any, mes: string): Promise<{
        total: any;
    }>;
    findOne(req: any, id: string): Promise<any>;
    update(req: any, id: string, dto: UpdateReceitaDto): Promise<any>;
    remove(req: any, id: string): Promise<any>;
}
