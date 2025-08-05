import { Test, TestingModule } from '@nestjs/testing';
import { PromesasController } from './promesas.controller';
import { PromesasService } from './promesas.service';

describe('PromesasController', () => {
  let controller: PromesasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromesasController],
      providers: [PromesasService],
    }).compile();

    controller = module.get<PromesasController>(PromesasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
