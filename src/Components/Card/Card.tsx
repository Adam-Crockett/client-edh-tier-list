import { useState, useEffect } from 'react';
import { CardProps } from '../../interfaces';

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
  }, [currentFace]);

  const handleClickOnMDFC = () => {
    setCurrentFace(currentFace === 0 ? 1 : 0);
  };

  if (data.image_uris) {
    return (
      <img
        style={{
          height: tierIndex > 0 ? '125px' : '240px',
          borderRadius: '3px',
          marginTop: tierIndex > 0 ? '0px' : '-140px'
        }}
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
      <div style={{ height: '240px' }}>
        <img
          style={{ height: '240px' }}
          draggable
          onDragStart={(event) => handleDragStart(event, tierIndex, cardIndex)}
          onDragEnter={
            dragging
              ? (event) => {
                  handleDragEnter(event, tierIndex, cardIndex);
                }
              : undefined
          }
          src={data.card_faces[currentFace].image_uris.border_crop}
          onClick={handleClickOnMDFC}
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
