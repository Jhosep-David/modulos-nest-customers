import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity'


@Injectable()
export class CategoriasService {
  
  //Datos de customers 
  //Private: solo se puede usar 
  //al interior de la clase 
  private categorias : Categoria[] = [
    //se usan los campos que tiene el constructor
    new Categoria(1, 1, "familia", true, "familia" ),
    new Categoria(2, 1, "familia", true, "familia" ),
    new Categoria(3, 1, "familia", true, "familia" ),

  ]

  create(nuevoCliente){
    this.categorias.push(nuevoCliente);
    return nuevoCliente;
  } 

//NO tiene URL PARAMETERS
//tiene BODY PARAMETERS (PAYLOAD) = se envia algo en el body,
  //por lo general se envía en formato JSON
  //create(createCustomerDto: CreateCustomerDto) {
    //return 'This action adds a new customer';
  //}

  //select  * from customers
  //para este caso se trata de
  //retornar todo el arreglo (listas)
  //customers

  findAll() {
    // return `This action returns all customers`;
    return this.categorias;
  }

  //tiene URL PARAMETERS
  findOne(id: number) {
    //return `This action returns a #${id} customer`;
    //el c es cada elmento de lo que va a guardar del arreglo 
    //lo tipamos como Customer para que nos pase todos los atributos de Customer
    let customerABuscar = this.categorias.find(function(c: Categoria){
      return c.id === id 
    })
    //retornar el customer que buscamos 
    return customerABuscar;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    // para retornar un nuevo arreglo (lista)
    //cuyos elementos cumplan con la condicion 
    this.categorias = this.categorias.filter(function(Categoria){
      return Categoria.id !== id 
    });
    return `categoria con id: ${id} eliminado`
   }
  
  
}
