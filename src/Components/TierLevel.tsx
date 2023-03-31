import { useState } from 'react';
import Card from './Card';
const TierLevel = ({
  tierIndex,
  levelData,
  handleRemoveTierLevel,
  handleEditTierLevel,
  handleDragStart,
  handleDragEnter,
  dragging
}: any) => {
  const [inEditMode, setInEditMode] = useState(false);
  const handleRemoveClick = () => {
    // When the tier level is removed, any Cards in the tier level should be returned to the CardList
    handleRemoveTierLevel(tierIndex);
    setInEditMode(false);
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleEditTierLevel(tierIndex, event.target.value);
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
        minHeight: '150px',
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
      <ul
        style={{ width: '100%' }}
        onDragEnter={
          dragging
            ? (event) => {
                console.log('dragEnter a Tier Level');
                handleDragEnter(event, tierIndex, 0);
              }
            : undefined
        }
      >
        {levelData.cards.map((card: any, cardIndex: number) => {
          return (
            <Card
              key={cardIndex}
              data={card}
              cardIndex={cardIndex}
              tierIndex={tierIndex}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              dragging={dragging}
            />
          );
        })}
      </ul>
    </li>
  );
};

export default TierLevel;
