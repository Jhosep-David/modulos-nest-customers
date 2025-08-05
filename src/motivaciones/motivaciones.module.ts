import { Module } from '@nestjs/common';
import { MotivacionesService } from './motivaciones.service';
import { MotivacionesController } from './motivaciones.controller';

@Module({
  controllers: [MotivacionesController],
  providers: [MotivacionesService],
})
export class MotivacionesModule {}
