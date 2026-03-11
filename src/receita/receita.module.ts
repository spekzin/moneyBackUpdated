import { Module } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';

@Module({
  controllers: [ReceitaController],
  providers: [ReceitaService],
  exports: [ReceitaService],
})
export class ReceitaModule {}
