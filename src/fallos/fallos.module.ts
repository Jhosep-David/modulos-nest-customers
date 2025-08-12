import { Module } from '@nestjs/common';
import { FallosService } from './fallos.service';
import { FallosController } from './fallos.controller';

@Module({
  controllers: [FallosController],
  providers: [FallosService],
})
export class FallosModule {}
