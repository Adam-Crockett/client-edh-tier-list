import { useState, useEffect } from 'react';
import TierLevel from './TierLevel';

const TierLevelManager = () => {
  const [tierLevels, setTierLevels] = useState<object[]>([]);

  const handleAddTierLevel = () => {
    setTierLevels([...tierLevels, { name: tierLevels.length }]);
  };

  const handleRemoveTierLevel = (index: number) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels.splice(index, 1);
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TierLevelManager;
