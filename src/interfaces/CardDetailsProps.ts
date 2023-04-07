import { CardData } from './CardData';
export interface CardDetailsProps {
  hoveredCard: [CardData | undefined, number];
  selectedCodes: string[];
}
