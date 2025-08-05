import { PartialType } from '@nestjs/mapped-types';
import { CreatePromesaDto } from './create-promesa.dto';

export class UpdatePromesaDto extends PartialType(CreatePromesaDto) {}
