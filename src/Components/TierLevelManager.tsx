import { TierLevel, TierLevelManagerProps } from '../interfaces';
import TierLevelRow from './TierLevelRow';

const TierLevelManager = ({
  tierLevels,
  handleAddTierLevel,
  handleRemoveTierLevel,
  handleEditTierLevel,
  handleDragStart,
  handleDragEnter,
  dragging
}: TierLevelManagerProps) => {
  return (
    <div>
      <div>
        <button onClick={handleAddTierLevel}>Add Tier</button>
      </div>
      <ul>
        {tierLevels.map((levelData: TierLevel, tierIndex: number) => {
          if (tierIndex == 0) {
            return null;
          }
          return (
            <TierLevelRow
              key={tierIndex}
              tierIndex={tierIndex}
              levelData={levelData}
              handleRemoveTierLevel={handleRemoveTierLevel}
              handleEditTierLevel={handleEditTierLevel}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              dragging={dragging}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TierLevelManager;
