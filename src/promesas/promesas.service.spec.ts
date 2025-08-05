import { Test, TestingModule } from '@nestjs/testing';
import { PromesasService } from './promesas.service';

describe('PromesasService', () => {
  let service: PromesasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromesasService],
    }).compile();

    service = module.get<PromesasService>(PromesasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
