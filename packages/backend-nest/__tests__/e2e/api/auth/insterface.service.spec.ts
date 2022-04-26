import { Test, TestingModule } from '@nestjs/testing';
import { InsterfaceService } from './insterface.service';

describe('InsterfaceService', () => {
  let service: InsterfaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsterfaceService],
    }).compile();

    service = module.get<InsterfaceService>(InsterfaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
