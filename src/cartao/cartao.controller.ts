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
import { CartaoService } from './cartao.service';
import { CreateCartaoDto, UpdateCartaoDto } from './dto/cartao.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cartoes')
@UseGuards(JwtAuthGuard)
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Post()
  create(@Request() req, @Body() dto: CreateCartaoDto) {
    return this.cartaoService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.cartaoService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.cartaoService.findOne(req.user.userId, id);
  }

  @Patch(':id')
  update(@Request() req, @Param('id') id: string, @Body() dto: UpdateCartaoDto) {
    return this.cartaoService.update(req.user.userId, id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.cartaoService.remove(req.user.userId, id);
  }
}
