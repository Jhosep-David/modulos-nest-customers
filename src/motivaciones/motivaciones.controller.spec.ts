import { Test, TestingModule } from '@nestjs/testing';
import { MotivacionesController } from './motivaciones.controller';
import { MotivacionesService } from './motivaciones.service';

describe('MotivacionesController', () => {
  let controller: MotivacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotivacionesController],
      providers: [MotivacionesService],
    }).compile();

    controller = module.get<MotivacionesController>(MotivacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
