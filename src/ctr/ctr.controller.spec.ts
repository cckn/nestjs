import { Test, TestingModule } from '@nestjs/testing';
import { CtrController } from './ctr.controller';

describe('CtrController', () => {
  let controller: CtrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtrController],
    }).compile();

    controller = module.get<CtrController>(CtrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
