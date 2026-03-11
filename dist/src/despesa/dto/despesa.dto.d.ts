export declare class CreateDespesaDto {
    nome: string;
    descricao?: string;
    formaPagamento: string;
    cartaoId?: string;
    valor: number;
    valorParcela?: number;
    parcelas?: number;
    parcelaAtual?: number;
    dataCompra: string;
    mes: string;
    recorrente?: boolean;
    categoriaId?: string;
}
export declare class UpdateDespesaDto {
    nome?: string;
    descricao?: string;
    formaPagamento?: string;
    cartaoId?: string;
    valor?: number;
    valorParcela?: number;
    parcelas?: number;
    parcelaAtual?: number;
    dataCompra?: string;
    mes?: string;
    recorrente?: boolean;
    categoriaId?: string;
}
