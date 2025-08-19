import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {

  constructor(private prisma: PrismaService){}//importar directamente el instructor

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.roles.create({data: createRoleDto});
  }

  findAll() {
    return this.prisma.roles.findMany({
      orderBy: [{nombre: 'desc'}]
    })
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

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
