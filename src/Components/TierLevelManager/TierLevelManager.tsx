import { TierLevel, TierLevelManagerProps } from '../../interfaces';
import { TierLevelRow } from '../../Components';
import styles from './TierLevelManager.module.css';

export const TierLevelManager = ({
  tierLevels,
  handleRemoveTierLevel,
  handleEditTierLevelName,
  handleEditTierLevelColor,
  handleDragStart,
  handleDragEnter,
  dragging,
  handleMouseOverCardDetails
}: TierLevelManagerProps) => {
  return (
    <ul className={styles.container}>
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
  );
};
