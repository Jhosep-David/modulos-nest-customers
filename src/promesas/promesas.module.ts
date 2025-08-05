import { Module } from '@nestjs/common';
import { PromesasService } from './promesas.service';
import { PromesasController } from './promesas.controller';

@Module({
  controllers: [PromesasController],
  providers: [PromesasService],
})
export class PromesasModule {}
