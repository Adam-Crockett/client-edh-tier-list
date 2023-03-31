import { useState } from 'react';
import Card from './Card';
const TierLevel = ({
  index,
  levelData,
  handleRemoveTierLevel,
  handleEditTierLevel
}: any) => {
  const [inEditMode, setInEditMode] = useState(false);
  const handleRemoveClick = () => {
    // When the tier level is removed, any Cards in the tier level should be returned to the CardList
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
    <li
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'grey',
        minHeight: '100px',
        margin: '20px'
      }}
    >
      <div style={{ alignSelf: 'flex-start' }}>
        {inEditMode ? (
          <div>
            <input
              value={levelData.tierName}
              onChange={handleNameInputChange}
            />
            <button onClick={handleSaveClick}>Done</button>
            <button onClick={handleRemoveClick}>Remove tier level</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setInEditMode(true)}>Edit</button>
            <p>{levelData.tierName}</p>
          </div>
        )}
      </div>
      <ul style={{ width: '100%' }}>
        {levelData.cards.map((card: any, index: number) => {
          return <Card key={index} data={card} />;
        })}
      </ul>
    </li>
  );
};

export default TierLevel;
