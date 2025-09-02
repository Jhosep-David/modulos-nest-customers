import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {

  constructor(private prisma: PrismaService){}//importar directamente el instructor

  async create(createRoleDto: CreateRoleDto) {
    //validacion logica de negocio
    //antes de insertar en base de datos
    //ejemplo: si uno rol ya existe 


    const rol = await this.
    prisma.
    roles.
    findFirst({
      where: { 
        nombre: createRoleDto.nombre 
      }
    });

      if (rol) {
        //si rol existe, no hace falta guardarlo
        throw new HttpException(
          {
            "success": false,
            error: "Rol already exists"
          },
          404
        );
      } else {
        //guardar en una variable la creación del rol
        const rolCreate = await this.
                     prisma.
                     roles.
                     create({data: createRoleDto});
                     return {
        "success": true, 
        "data": rolCreate
      };
    }

    if (rol) {
      throw new HttpException(
        {
          status: 400,
          error: "Role already exists"
        },
        400
      );
    }
    return await this.prisma.roles.create({data: createRoleDto});
  }

  async findAll() {
    const resultadosRoles = await
                            this.
                            prisma.
                            roles.findMany({
      orderBy: [{nombre: 'desc'}]
    })
    //si no hay marcas en bd 
    if(resultadosRoles.length === 0){
      throw new HttpException(
        {
          success: false,
          error: "No roles found"
        },
        404
      );
    } else {
      return {
        "success": true,
        "roles": resultadosRoles
      }
    }
  } 

  async findOne(id: number) {
    let rol = await this.prisma.roles.findFirst({
      where : {id : id }, 
      orderBy : [{ nombre : 'asc'},
                  { id : 'desc'}
      ]
    });
    if( !rol ){
        throw new HttpException(
          {
             status: 404,
            error: "rol not found"
          },404
        );
    } else {
      return rol
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    //1 verificar o buscar la marca a actualizar por id 

    //2. de no existir mostrar http exception
    const rol = await this.findOne(id);
    if (!rol) {
      throw new HttpException(
        {
          status: 404,
          error: "Role not found"
        },
        404
      );
    } else {
      await this.prisma.roles.update({
        where: { id: id },
        data: updateRoleDto
      });
    }
    return {
      success: true,
      data: await this.findOne(id)    
    }
  }

  async remove(id: number) {
    //validacion logica de negocio
    //si el rol a borrar no existe en bd 
    const brand = await this.findOne(id);
    if (!brand){
      throw new HttpException(
        {
          success: false,
          error: "Role not found"
        },
        404
      );
    } else {
      //si el rol existe, borrarlo
      await this.prisma.roles.delete({
        where: { id:id }
      })
      return {
        "success": true,
        "deleted_id": id
      }
    }

  }
}
