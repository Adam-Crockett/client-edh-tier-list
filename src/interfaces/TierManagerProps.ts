import { CardData } from './CardData';
export interface TierManagerProps {
  currentCards: CardData[];
  selectedCodes: string[];
  loadingCards: boolean;
  handleMouseOverCardDetails: (
    card: any,
    cardFace?: number | undefined
  ) => void;
  resetState: boolean;
}
