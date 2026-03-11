import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Min,
} from 'class-validator';

export class CreateDespesaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsNotEmpty()
  formaPagamento: string;

  @IsString()
  @IsOptional()
  cartaoId?: string;

  @IsNumber()
  @Min(0.01)
  valor: number;

  @IsNumber()
  @IsOptional()
  valorParcela?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  parcelas?: number;

  @IsNumber()
  @IsOptional()
  parcelaAtual?: number;

  @IsString()
  @IsNotEmpty()
  dataCompra: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}$/, { message: 'Formato do mês deve ser YYYY-MM' })
  mes: string;

  @IsBoolean()
  @IsOptional()
  recorrente?: boolean;

  @IsString()
  @IsOptional()
  categoriaId?: string;
}

export class UpdateDespesaDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsOptional()
  formaPagamento?: string;

  @IsString()
  @IsOptional()
  cartaoId?: string;

  @IsNumber()
  @IsOptional()
  @Min(0.01)
  valor?: number;

  @IsNumber()
  @IsOptional()
  valorParcela?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  parcelas?: number;

  @IsNumber()
  @IsOptional()
  parcelaAtual?: number;

  @IsString()
  @IsOptional()
  dataCompra?: string;

  @IsString()
  @IsOptional()
  @Matches(/^\d{4}-\d{2}$/, { message: 'Formato do mês deve ser YYYY-MM' })
  mes?: string;

  @IsBoolean()
  @IsOptional()
  recorrente?: boolean;

  @IsString()
  @IsOptional()
  categoriaId?: string;
}
