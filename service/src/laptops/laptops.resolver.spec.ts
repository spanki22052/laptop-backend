import { Test, TestingModule } from '@nestjs/testing';
import { LaptopsResolver } from './laptops.resolver';

describe('LaptopsResolver', () => {
  let resolver: LaptopsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaptopsResolver],
    }).compile();

    resolver = module.get<LaptopsResolver>(LaptopsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
