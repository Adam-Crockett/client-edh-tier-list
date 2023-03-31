import { useEffect, useState } from 'react';
import TierLevel from './TierLevel';

const TierLevelManager = ({
  tierCards,
  tierLevels,
  handleAddTierLevel,
  handleRemoveTierLevel,
  handleEditTierLevel
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TierLevelManager;
