import { useState, useEffect } from 'react';
import TierLevel from './TierLevel';

const TierLevelManager = () => {
  const [tierLevels, setTierLevels] = useState<object[]>([]);

  const handleAddTierLevel = () => {
    setTierLevels([
      ...tierLevels,
      { id: tierLevels.length, name: tierLevels.length }
    ]);
  };

  const handleRemoveTierLevel = () => {
    setTierLevels(tierLevels.slice(0, tierLevels.length - 1));
  };
  return (
    <div>
      <div>
        <button onClick={handleAddTierLevel}>Add Tier</button>
        <button onClick={handleRemoveTierLevel}>Remove Tier</button>
      </div>
      <ul>
        {tierLevels.map((tierLevel, index) => {
          return <TierLevel key={index} levelData={tierLevel} />;
        })}
      </ul>
    </div>
  );
};

export default TierLevelManager;
