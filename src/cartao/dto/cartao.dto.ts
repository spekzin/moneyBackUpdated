import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class CreateCartaoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  bandeira: string;

  @IsString()
  @Length(4, 4)
  ultimos4: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  limite?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(31)
  vencimento?: number;
}

export class UpdateCartaoDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  bandeira?: string;

  @IsString()
  @IsOptional()
  @Length(4, 4)
  ultimos4?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  limite?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(31)
  vencimento?: number;
}
