import { useState } from 'react';
const TierLevel = ({
  index,
  levelData,
  handleRemoveTierLevel,
  handleEditTierLevel
}: any) => {
  const [inEditMode, setInEditMode] = useState(false);
  const handleRemoveClick = () => {
    handleRemoveTierLevel(index);
    setInEditMode(false);
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleEditTierLevel(index, event.target.value);
  };
  const handleSaveClick = () => {
    setInEditMode(false);
  };
  return (
    <li style={{ background: 'grey' }}>
      <div>
        {inEditMode ? (
          <div>
            <input value={levelData.name} onChange={handleNameInputChange} />
            <button onClick={handleSaveClick}>Done</button>
            <button onClick={handleRemoveClick}>Remove tier level</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setInEditMode(true)}>Edit</button>
            <p>{levelData.name}</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default TierLevel;
