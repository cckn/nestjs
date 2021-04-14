import { Test, TestingModule } from '@nestjs/testing';
import { ElecController } from './elec.controller';

describe('ElecController', () => {
  let controller: ElecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElecController],
    }).compile();

    controller = module.get<ElecController>(ElecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
