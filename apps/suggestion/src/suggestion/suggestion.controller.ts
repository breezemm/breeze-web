import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { EventDto } from './dto/eventDto';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Post()
  getAllSuggestions(@Body() data: EventDto) {
    return this.suggestionService.getAllEventSuggestions(data);
  }
}
