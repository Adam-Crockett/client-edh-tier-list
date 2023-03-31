import TierLevel from './TierLevel';

const TierLevelManager = ({
  tierLevels,
  handleAddTierLevel,
  handleRemoveTierLevel,
  handleEditTierLevel,
  handleDragStart,
  handleDragEnter,
  dragging
}: any) => {
  return (
    <div>
      <div>
        <button onClick={handleAddTierLevel}>Add Tier</button>
      </div>
      <ul>
        {tierLevels.map((levelData: any, tierIndex: number) => {
          if (tierIndex == 0) {
            return null;
          }
          return (
            <TierLevel
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
