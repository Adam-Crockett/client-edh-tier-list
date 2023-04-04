import React, { useState, useEffect } from 'react';
import { CardProps } from '../interfaces';

const Card = ({
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
  }, [currentFace]);

  const handleClickOnMDFC = () => {
    setCurrentFace(currentFace === 0 ? 1 : 0);
  };

  if (data.image_uris) {
    return (
      <img
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
        src={data.image_uris.small}
        onMouseOver={
          !dragging ? () => handleMouseOverCardDetails(data) : undefined
        }
      />
    );
  } else {
    return (
      <img
        draggable
        onDragStart={(event) => handleDragStart(event, tierIndex, cardIndex)}
        onDragEnter={
          dragging
            ? (event) => {
                handleDragEnter(event, tierIndex, cardIndex);
              }
            : undefined
        }
        src={data.card_faces[currentFace].image_uris.small}
        onClick={handleClickOnMDFC}
        onMouseOver={
          !dragging
            ? () => handleMouseOverCardDetails(data, currentFace)
            : undefined
        }
      />
    );
  }
};

export default Card;
