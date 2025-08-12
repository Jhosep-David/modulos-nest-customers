import { Test, TestingModule } from '@nestjs/testing';
import { FallosService } from './fallos.service';

describe('FallosService', () => {
  let service: FallosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FallosService],
    }).compile();

    service = module.get<FallosService>(FallosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
