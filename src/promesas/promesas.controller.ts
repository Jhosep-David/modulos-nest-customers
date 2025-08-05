import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromesasService } from './promesas.service';
import { CreatePromesaDto } from './dto/create-promesa.dto';
import { UpdatePromesaDto } from './dto/update-promesa.dto';

@Controller('promesas')
export class PromesasController {
  constructor(private readonly promesasService: PromesasService) {}

  @Post()
  create(@Body() createPromesaDto: CreatePromesaDto) {
    return this.promesasService.create(createPromesaDto);
  }

  @Get()
  findAll() {
    return this.promesasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promesasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromesaDto: UpdatePromesaDto) {
    return this.promesasService.update(+id, updatePromesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promesasService.remove(+id);
  }
}
