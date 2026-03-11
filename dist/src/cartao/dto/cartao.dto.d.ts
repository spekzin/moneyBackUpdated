export declare class CreateCartaoDto {
    nome: string;
    bandeira: string;
    ultimos4: string;
    limite?: number;
    vencimento?: number;
}
export declare class UpdateCartaoDto {
    nome?: string;
    bandeira?: string;
    ultimos4?: string;
    limite?: number;
    vencimento?: number;
}
