import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';


@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  // create(@Body() createCategoriaDto: CreateCategoriaDto) {
  //   return this.categoriasService.create(createCategoriaDto);
  //create(@Body() createCustomerDto: CreateCustomerDto) {
    //return this.customersService.create(createCustomerDto);
    //en este caso lo que llegue que se
    //haya colocado en el 
    //Body de JSON en BRUNO
    //se recibirá y traerá lo que se haya ingresado 
    create(@Body() body:any){
    return this.
              categoriasService.
              create(body);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}

