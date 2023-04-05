import { CardData } from './CardData';
export interface TierManagerProps {
  currentCards: CardData[];
  selectedCodes: string[];
  loadingCards: boolean;
  tierLevels: any;
  setTierLevels: any;
  cardList: any;
  setCardList: any;
  handleMouseOverCardDetails: (
    card: any,
    cardFace?: number | undefined
  ) => void;
}
