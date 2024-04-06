import { Injectable } from '@nestjs/common';
import ContentBasedRecommender from 'content-based-recommender';
import { EventDto, Interest } from './dto/eventDto';

@Injectable()
export class SuggestionService {
  private readonly recommender = new ContentBasedRecommender();

  constructor() {
    this.recommender.setOptions({
      minScore: 0.1,
      maxSimilarDocuments: 100,
    });
  }

  getAllEventSuggestions = async (suggestible: EventDto) => {
    const interestsMap = suggestible.interests.reduce(
      (acc, interest) => {
        acc[interest.id] = interest;
        return acc;
      },
      {} as Record<string, Interest>,
    );

    this.recommender.trainBidirectional(
      suggestible.events,
      suggestible.interests,
    );

    return suggestible.events.map((event) => {
      const relatedInterests = this.recommender.getSimilarDocuments(event.id);
      const interests = relatedInterests.map(
        (interest: Interest) => interestsMap[interest.id]?.content,
      );
      return {
        event,
        interests,
      };
    });
  };
}
