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
    margin: tierIndex > 0 ? '3px 0px 3px 0px' : '-140px 0px 0px 0px'
  };

  const mdfcFlipStyling = {
    right: tierIndex > 0 ? '6px' : '13px',
    top: tierIndex > 0 ? '6px' : '-112px'
  };

  if (data.image_uris) {
    return (
      <div className={styles.cardContainer}>
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
            tierIndex > 0
              ? data.image_uris.art_crop
              : data.image_uris.border_crop
          }
          onMouseOver={
            !dragging ? () => handleMouseOverCardDetails(data) : undefined
          }
        />
      </div>
    );
  } else if (data.card_faces) {
    //MDFC Cards
    return (
      <div className={styles.cardContainer}>
        <AutorenewIcon
          className={styles.flipCard}
          style={mdfcFlipStyling}
          onClick={handleClickOnMDFC}
        />
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
      </div>
    );
  } else {
    return <></>;
  }
};
