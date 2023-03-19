import { useState, useEffect } from 'react';
import TierLevel from './TierLevel';

const TierLevelManager = () => {
  const [tierLevels, setTierLevels] = useState<any[]>([]);

  const handleAddTierLevel = () => {
    setTierLevels([...tierLevels, { name: tierLevels.length }]);
  };

  const handleRemoveTierLevel = (index: number) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels.splice(index, 1);
    setTierLevels(updatedTierLevels);
  };

  const handleEditTierLevel = (index: number, newName: string) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels[index].name = newName;
    setTierLevels(updatedTierLevels);
  };
  return (
    <div>
      <div>
        <button onClick={handleAddTierLevel}>Add Tier</button>
      </div>
      <ul>
        {tierLevels.map((tierLevel, index) => {
          return (
            <TierLevel
              key={index}
              index={index}
              levelData={tierLevel}
              handleRemoveTierLevel={handleRemoveTierLevel}
              handleEditTierLevel={handleEditTierLevel}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TierLevelManager;
