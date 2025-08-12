import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FallosService } from './fallos.service';
import { CreateFalloDto } from './dto/create-fallo.dto';
import { UpdateFalloDto } from './dto/update-fallo.dto';

@Controller('fallos')
export class FallosController {
  constructor(private readonly fallosService: FallosService) {}

  @Post()
  create(@Body() createFalloDto: CreateFalloDto) {
    return this.fallosService.create(createFalloDto);
  }

  @Get()
  findAll() {
    return this.fallosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fallosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFalloDto: UpdateFalloDto) {
    return this.fallosService.update(+id, updateFalloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fallosService.remove(+id);
  }
}
