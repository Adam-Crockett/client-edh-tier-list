import { CardData } from './CardData';
import { TierLevel } from './TierLevel';
export interface CachedData {
  cardList: CardData[];
  currentCodes: string[];
  tierLevels: TierLevel[];
}
