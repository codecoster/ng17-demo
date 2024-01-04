import { StarRating } from '../stars-input/stars-input.component';

export interface Bewertung {
  id: string;
  stars: StarRating;
  comment?: string;
  trainingId: string;
  bewerter: string;
}
