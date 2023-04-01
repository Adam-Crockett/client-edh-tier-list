import { TierLevel } from './TierLevel';

export interface TierLevelRowProps {
  tierIndex: number;
  levelData: TierLevel;
  handleRemoveTierLevel: (index: number) => void;
  handleEditTierLevel: (index: number, newName: string) => void;
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
}
