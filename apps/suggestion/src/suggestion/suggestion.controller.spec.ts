import { Test, TestingModule } from '@nestjs/testing';
import { SuggestionController } from './suggestion.controller';
import { SuggestionService } from './suggestion.service';

describe('SuggestionController', () => {
  let controller: SuggestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuggestionController],
      providers: [SuggestionService],
    }).compile();

    controller = module.get<SuggestionController>(SuggestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
