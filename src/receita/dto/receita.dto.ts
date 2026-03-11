import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from 'class-validator';

export class CreateReceitaDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}$/, { message: 'Formato do mês deve ser YYYY-MM' })
  mes: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  @IsOptional()
  descricao?: string;
}

export class UpdateReceitaDto {
  @IsString()
  @IsOptional()
  @Matches(/^\d{4}-\d{2}$/, { message: 'Formato do mês deve ser YYYY-MM' })
  mes?: string;

  @IsNumber()
  @IsOptional()
  valor?: number;

  @IsString()
  @IsOptional()
  descricao?: string;
}
