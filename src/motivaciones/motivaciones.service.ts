import { Injectable } from '@nestjs/common';
import { CreateMotivacioneDto } from './dto/create-motivacione.dto';
import { UpdateMotivacioneDto } from './dto/update-motivacione.dto';

@Injectable()
export class MotivacionesService {
  create(createMotivacioneDto: CreateMotivacioneDto) {
    return 'This action adds a new motivacione';
  }

  findAll() {
    return `This action returns all motivaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} motivacione`;
  }

  update(id: number, updateMotivacioneDto: UpdateMotivacioneDto) {
    return `This action updates a #${id} motivacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} motivacione`;
  }
}
