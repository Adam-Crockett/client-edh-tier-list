import { useState, useEffect } from 'react';
import { CardProps } from '../../interfaces';
// For Card flip Icon
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './Card.module.css';

export const Card = ({
  data,
  cardIndex,
  tierIndex,
  handleDragStart,
  handleDragEnter,
  dragging,
  handleMouseOverCardDetails
}: CardProps) => {
  const [currentFace, setCurrentFace] = useState(0);
  useEffect(() => {
    setCurrentFace(0);
  }, [data]);

  useEffect(() => {
    handleMouseOverCardDetails(data, currentFace);
  }, [data, currentFace]);

  const handleClickOnMDFC = () => {
    setCurrentFace(currentFace === 0 ? 1 : 0);
  };

  const cardVariableStyling = {
    height: tierIndex > 0 ? '100px' : '240px',
    marginTop: tierIndex > 0 ? '3px' : '-140px',
    marginRight: tierIndex > 0 ? '3px' : '0px'
  };
  // For Card flip Icon, current issue with absolute positioning and flexbox
  const mdfcFlipStyling = {
    marginTop: tierIndex > 0 ? '3px' : '-140px',
    top: tierIndex > 0 ? '0.2rem' : '1.6rem'
  };

  if (data.image_uris) {
    return (
      <img
        className={styles.card}
        style={cardVariableStyling}
        draggable
        onDragStart={(event) => handleDragStart(event, tierIndex, cardIndex)}
        onDragEnter={
          dragging
            ? (event) => {
                handleDragEnter(event, tierIndex, cardIndex);
              }
            : undefined
        }
        key={data.id}
        src={
          tierIndex > 0 ? data.image_uris.art_crop : data.image_uris.border_crop
        }
        onMouseOver={
          !dragging ? () => handleMouseOverCardDetails(data) : undefined
        }
      />
    );
  } else if (data.card_faces) {
    return (
      <img
        className={styles.card}
        style={cardVariableStyling}
        draggable
        onDragStart={(event) => handleDragStart(event, tierIndex, cardIndex)}
        onDragEnter={
          dragging
            ? (event) => {
                handleDragEnter(event, tierIndex, cardIndex);
              }
            : undefined
        }
        onClick={handleClickOnMDFC}
        src={
          tierIndex > 0
            ? data.card_faces[currentFace].image_uris.art_crop
            : data.card_faces[currentFace].image_uris.border_crop
        }
        onMouseOver={
          !dragging
            ? () => handleMouseOverCardDetails(data, currentFace)
            : undefined
        }
      />
    );
  } else {
    return <></>;
  }
};
