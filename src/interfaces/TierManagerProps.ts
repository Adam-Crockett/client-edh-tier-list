import { CardData } from './CardData';
import { TierLevel } from './TierLevel';
export interface TierManagerProps {
  currentCards: CardData[];
  selectedCodes: string[];
  loadingCards: boolean;
  tierLevels: TierLevel[];
  hoveredCard: [CardData | undefined, number];
  setTierLevels: React.Dispatch<React.SetStateAction<TierLevel[]>>;
  cardList: CardData[];
  setCardList: React.Dispatch<React.SetStateAction<CardData[]>>;
  handleMouseOverCardDetails: (
    card: CardData,
    cardFace?: number | undefined
  ) => void;
}
