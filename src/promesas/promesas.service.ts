import { Injectable } from '@nestjs/common';
import { CreatePromesaDto } from './dto/create-promesa.dto';
import { UpdatePromesaDto } from './dto/update-promesa.dto';

@Injectable()
export class PromesasService {
  create(createPromesaDto: CreatePromesaDto) {
    return 'This action adds a new promesa';
  }

  findAll() {
    return `This action returns all promesas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promesa`;
  }

  update(id: number, updatePromesaDto: UpdatePromesaDto) {
    return `This action updates a #${id} promesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} promesa`;
  }
}
