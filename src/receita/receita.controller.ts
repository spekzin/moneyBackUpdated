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
import { ReceitaService } from './receita.service';
import { CreateReceitaDto, UpdateReceitaDto } from './dto/receita.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('receitas')
@UseGuards(JwtAuthGuard)
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateReceitaDto) {
    return this.receitaService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Request() req, @Query('mes') mes?: string) {
    if (mes) {
      return this.receitaService.findByMes(req.user.userId, mes);
    }
    return this.receitaService.findAll(req.user.userId);
  }

  @Get('total')
  getTotal(@Request() req, @Query('mes') mes: string) {
    return this.receitaService.getTotalByMes(req.user.userId, mes);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.receitaService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() dto: UpdateReceitaDto) {
    return this.receitaService.update(req.user.userId, id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.receitaService.remove(req.user.userId, id);
  }
}
