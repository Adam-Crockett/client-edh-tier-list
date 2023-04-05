import { TierLevel } from './TierLevel';
import { CardData } from './CardData';
export interface CardListProps {
  tierLevels: TierLevel[];
  loadingCards: boolean;
  handleDragStart: (
    event: React.DragEvent<HTMLImageElement>,
    tierIndex: number,
    cardIndex: number
  ) => void;
  handleDragEnter: (
    event:
      | React.DragEvent<HTMLImageElement>
      | React.DragEvent<HTMLUListElement>,
    tierIndex: number,
    cardIndex: number
  ) => void;
  dragging: boolean;
  handleMouseOverCardDetails: (
    card: CardData,
    cardFace?: number | undefined
  ) => void;
}
