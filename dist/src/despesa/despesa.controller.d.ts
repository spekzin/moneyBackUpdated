import { DespesaService } from './despesa.service';
import { CreateDespesaDto, UpdateDespesaDto } from './dto/despesa.dto';
export declare class DespesaController {
    private readonly despesaService;
    constructor(despesaService: DespesaService);
    create(req: any, dto: CreateDespesaDto): Promise<any>;
    findAll(req: any, mes?: string): Promise<any>;
    getTotal(req: any, mes: string): Promise<{
        avulsas: any;
        recorrentes: any;
        total: any;
    }>;
    findOne(req: any, id: string): Promise<any>;
    update(req: any, id: string, dto: UpdateDespesaDto): Promise<any>;
    remove(req: any, id: string): Promise<any>;
}
