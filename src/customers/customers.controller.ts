import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  //el constructor esta inyectando un atributo de customerService
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  //create(@Body() createCustomerDto: CreateCustomerDto) {
    //return this.customersService.create(createCustomerDto);
    //en este caso lo que llegue que se
    //haya colocado en el 
    //Body de JSON en BRUNO
    //se recibirá y traerá lo que se haya ingresado 
    create(@Body() body:any){
    return this.
                customersService.
                create(body);
  }

  @Get()
  findAll() {
    //va a retornar todo el arreglo 
    // de clientes
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id); //+id (convertir de dato string a number)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }
  //param es lo que recibe desde la URL como parametro
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
