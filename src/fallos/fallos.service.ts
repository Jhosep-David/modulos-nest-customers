import { Injectable } from '@nestjs/common';
import { CreateFalloDto } from './dto/create-fallo.dto';
import { UpdateFalloDto } from './dto/update-fallo.dto';

@Injectable()
export class FallosService {
  create(createFalloDto: CreateFalloDto) {
    return 'This action adds a new fallo';
  }

  findAll() {
    return `This action returns all fallos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fallo`;
  }

  update(id: number, updateFalloDto: UpdateFalloDto) {
    return `This action updates a #${id} fallo`;
  }

  remove(id: number) {
    return `This action removes a #${id} fallo`;
  }
}
