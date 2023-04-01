import { CardData } from './CardData';
export interface TierManagerProps {
  currentCards: CardData[];
  selectedCodes: string[];
  loadingCards: boolean;
}
