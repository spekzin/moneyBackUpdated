import { CartaoService } from './cartao.service';
import { CreateCartaoDto, UpdateCartaoDto } from './dto/cartao.dto';
export declare class CartaoController {
    private readonly cartaoService;
    constructor(cartaoService: CartaoService);
    create(req: any, dto: CreateCartaoDto): Promise<any>;
    findAll(req: any): Promise<any>;
    findOne(req: any, id: string): Promise<any>;
    update(req: any, id: string, dto: UpdateCartaoDto): Promise<any>;
    remove(req: any, id: string): Promise<any>;
}
