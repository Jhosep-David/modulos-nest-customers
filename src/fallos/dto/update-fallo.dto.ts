import { PartialType } from '@nestjs/mapped-types';
import { CreateFalloDto } from './create-fallo.dto';

export class UpdateFalloDto extends PartialType(CreateFalloDto) {}
