import { Module } from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { DespesaController } from './despesa.controller';

@Module({
  controllers: [DespesaController],
  providers: [DespesaService],
  exports: [DespesaService],
})
export class DespesaModule {}
