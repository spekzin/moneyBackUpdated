import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  icone?: string;

  @IsString()
  @IsOptional()
  cor?: string;
}

export class UpdateCategoriaDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  icone?: string;

  @IsString()
  @IsOptional()
  cor?: string;
}
