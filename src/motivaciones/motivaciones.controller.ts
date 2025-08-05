import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotivacionesService } from './motivaciones.service';
import { CreateMotivacioneDto } from './dto/create-motivacione.dto';
import { UpdateMotivacioneDto } from './dto/update-motivacione.dto';

@Controller('motivaciones')
export class MotivacionesController {
  constructor(private readonly motivacionesService: MotivacionesService) {}

  @Post()
  create(@Body() createMotivacioneDto: CreateMotivacioneDto) {
    return this.motivacionesService.create(createMotivacioneDto);
  }

  @Get()
  findAll() {
    return this.motivacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motivacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotivacioneDto: UpdateMotivacioneDto) {
    return this.motivacionesService.update(+id, updateMotivacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motivacionesService.remove(+id);
  }
}
