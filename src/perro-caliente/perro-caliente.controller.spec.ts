import { Test, TestingModule } from '@nestjs/testing';
import { PerroCalienteController } from './perro-caliente.controller';

describe('PerroCaliente Controller', () => {
  let controller: PerroCalienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerroCalienteController],
    }).compile();

    controller = module.get<PerroCalienteController>(PerroCalienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
