import { Test, TestingModule } from '@nestjs/testing';
import { MotivacionesService } from './motivaciones.service';

describe('MotivacionesService', () => {
  let service: MotivacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotivacionesService],
    }).compile();

    service = module.get<MotivacionesService>(MotivacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
