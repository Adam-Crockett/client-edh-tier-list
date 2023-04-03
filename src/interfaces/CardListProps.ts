import { TierLevel } from './TierLevel';
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
    card: any,
    cardFace?: number | undefined
  ) => void;
}
