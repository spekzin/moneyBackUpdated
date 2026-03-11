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
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('categorias')
@UseGuards(JwtAuthGuard)
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateCategoriaDto) {
    return this.categoriaService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.categoriaService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.categoriaService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() dto: UpdateCategoriaDto,
  ) {
    return this.categoriaService.update(req.user.userId, id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.categoriaService.remove(req.user.userId, id);
  }
}
