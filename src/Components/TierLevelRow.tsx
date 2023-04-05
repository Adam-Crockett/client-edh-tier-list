import { useState } from 'react';
import Card from './Card';
import { TierLevelRowProps } from '../interfaces';
const TierLevelRow = ({
  tierIndex,
  levelData,
  handleRemoveTierLevel,
  handleEditTierLevelName,
  handleEditTierLevelColor,
  handleDragStart,
  handleDragEnter,
  dragging,
  handleMouseOverCardDetails
}: TierLevelRowProps) => {
  const [inEditMode, setInEditMode] = useState(false);
  const handleRemoveClick = () => {
    handleRemoveTierLevel(tierIndex);
    setInEditMode(false);
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleEditTierLevelName(tierIndex, event.target.value);
  };

  const handleColorInputChange = (color) => {
    handleEditTierLevelColor(tierIndex, color.hex);
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
        onDragEnter={(event) => {
          if (event.target === event.currentTarget) {
            handleDragEnter(
              event,
              tierIndex,
              levelData.cards.length === 0 ? 0 : levelData.cards.length - 1
            );
          } else {
            undefined;
          }
        }}
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
              handleMouseOverCardDetails={handleMouseOverCardDetails}
            />
          );
        })}
      </ul>
    </li>
  );
};

export default TierLevelRow;
