import { PartialType } from '@nestjs/mapped-types';
import { CreateMotivacioneDto } from './create-motivacione.dto';

export class UpdateMotivacioneDto extends PartialType(CreateMotivacioneDto) {}
