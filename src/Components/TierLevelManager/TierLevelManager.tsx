import { TierLevel, TierLevelManagerProps } from '../../interfaces';
import { TierLevelRow } from '../../components';

export const TierLevelManager = ({
  tierLevels,
  handleAddTierLevel,
  handleRemoveTierLevel,
  handleEditTierLevelName,
  handleEditTierLevelColor,
  handleDragStart,
  handleDragEnter,
  dragging,
  handleMouseOverCardDetails
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
              handleEditTierLevelName={handleEditTierLevelName}
              handleEditTierLevelColor={handleEditTierLevelColor}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              dragging={dragging}
              handleMouseOverCardDetails={handleMouseOverCardDetails}
            />
          );
        })}
      </ul>
    </div>
  );
};