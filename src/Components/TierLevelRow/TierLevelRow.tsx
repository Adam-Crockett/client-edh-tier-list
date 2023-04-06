import { useState } from 'react';
import { Card } from '../../components';
import { CardData, TierLevelRowProps } from '../../interfaces';
import { CirclePicker, ColorResult } from 'react-color';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './TierLevelRow.module.css';
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const colorPickerOptions = [
  '#B80000',
  '#DB3E00',
  '#FCCB00',
  '#008B02',
  '#006B76',
  '#1273DE',
  '#004DCF',
  '#6e34d8',
  '#EB9694',
  '#FAD0C3',
  '#FEF3BD',
  '#C1E1C5',
  '#BEDADC',
  '#C4DEF6',
  '#BED3F3',
  '#D4C4FB'
];

export const TierLevelRow = ({
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
  const [bgColor, setBgColor] = useState(levelData.color);
  const handleRemoveClick = () => {
    handleRemoveTierLevel(tierIndex);
    setInEditMode(false);
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleEditTierLevelName(tierIndex, event.target.value);
  };

  const handleColorInputChange = (color: ColorResult) => {
    handleEditTierLevelColor(tierIndex, color.hex);
    setBgColor(color.hex);
  };
  const handleSaveClick = () => {
    setInEditMode(false);
  };
  return (
    <li className={styles.container}>
      <div
        className={styles.tierLevelInfo}
        style={{
          background: bgColor
        }}
      >
        {inEditMode ? (
          <div className={styles.editTierInfo}>
            <input
              className={styles.editName}
              value={levelData.tierName}
              onChange={handleNameInputChange}
              maxLength={3}
            />
            <CirclePicker
              className={styles.editColor}
              color={bgColor}
              width="12rem"
              circleSize={20}
              circleSpacing={7}
              colors={colorPickerOptions}
              onChange={(color) => handleColorInputChange(color)}
            />
            <button className={styles.acceptChanges} onClick={handleSaveClick}>
              <DoneIcon />
            </button>
            <button className={styles.deleteTier} onClick={handleRemoveClick}>
              <DeleteOutlineIcon />
            </button>
          </div>
        ) : (
          <div className={styles.currentTierInfo}>
            <h3 className={styles.tierName}>{levelData.tierName}</h3>
            <button
              className={styles.editTierButton}
              onClick={() => setInEditMode(true)}
              title="Edit Tier"
            >
              <MenuIcon />
            </button>
          </div>
        )}
      </div>
      <ul
        className={styles.tierContent}
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
        {levelData.cards.map((card: CardData, cardIndex: number) => {
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
