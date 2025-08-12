import { Test, TestingModule } from '@nestjs/testing';
import { FallosController } from './fallos.controller';
import { FallosService } from './fallos.service';

describe('FallosController', () => {
  let controller: FallosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FallosController],
      providers: [FallosService],
    }).compile();

    controller = module.get<FallosController>(FallosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
