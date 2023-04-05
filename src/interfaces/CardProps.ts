import { CardData } from './CardData';
export interface CardProps {
  // Correectly defined data type for the data prop:
  data: CardData;
  cardIndex: number;
  tierIndex: number;
  handleDragStart: (
    event: React.DragEvent<HTMLImageElement>,
    tierIndex: number,
    cardIndex: number
  ) => void;
  handleDragEnter: (
    event: React.DragEvent<HTMLImageElement>,
    tierIndex: number,
    cardIndex: number
  ) => void;
  dragging: boolean;
  handleMouseOverCardDetails: (
    card: CardData,
    cardFace?: number | undefined
  ) => void;
}
