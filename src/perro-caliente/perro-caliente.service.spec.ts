import { Test, TestingModule } from '@nestjs/testing';
import { PerroCalienteService } from './perro-caliente.service';

describe('PerroCalienteService', () => {
  let service: PerroCalienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerroCalienteService],
    }).compile();

    service = module.get<PerroCalienteService>(PerroCalienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
