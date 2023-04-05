import { CardData } from './CardData';
export interface TierLevel {
  tierName: string | number;
  color: string;
  cards: CardData[];
}
