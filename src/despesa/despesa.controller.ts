import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { CreateDespesaDto, UpdateDespesaDto } from './dto/despesa.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('despesas')
@UseGuards(JwtAuthGuard)
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateDespesaDto) {
    return this.despesaService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Request() req, @Query('mes') mes?: string) {
    if (mes) {
      return this.despesaService.findByMes(req.user.userId, mes);
    }
    return this.despesaService.findAll(req.user.userId);
  }

  @Get('total')
  getTotal(@Request() req, @Query('mes') mes: string) {
    return this.despesaService.getTotalByMes(req.user.userId, mes);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.despesaService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() dto: UpdateDespesaDto) {
    return this.despesaService.update(req.user.userId, id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.despesaService.remove(req.user.userId, id);
  }
}
