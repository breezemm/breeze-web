import { Module } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { SuggestionController } from './suggestion.controller';

@Module({
  controllers: [SuggestionController],
  providers: [SuggestionService],
})
export class SuggestionModule {}
