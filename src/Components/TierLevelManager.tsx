import TierLevel from './TierLevel';

const TierLevelManager = ({
  tierLevels,
  handleAddTierLevel,
  handleRemoveTierLevel,
  handleEditTierLevel,
  handleDragStart,
  handleDragOver,
  handleDrop
}: any) => {
  return (
    <div>
      <div>
        <button onClick={handleAddTierLevel}>Add Tier</button>
      </div>
      <ul>
        {tierLevels.map((tierLevel: any, index: number) => {
          return (
            <TierLevel
              key={index}
              index={index}
              levelData={tierLevel}
              handleRemoveTierLevel={handleRemoveTierLevel}
              handleEditTierLevel={handleEditTierLevel}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
              handleDragOver={handleDragOver}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TierLevelManager;
