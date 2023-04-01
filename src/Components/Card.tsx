import React from 'react';
import { CardProps } from '../interfaces';

const Card = ({
  data,
  cardIndex,
  tierIndex,
  handleDragStart,
  handleDragEnter,
  dragging
}: CardProps) => {
  const handleClickOnMDFC = (
    event: React.MouseEvent<HTMLImageElement>,
    data: any
  ) => {
    const element = event.target as HTMLImageElement;

    const swapFace =
      element.src == data.card_faces[0].image_uris.small
        ? data.card_faces[1].image_uris.small
        : data.card_faces[0].image_uris.small;
    element.src = swapFace;
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
        src={data.card_faces[0].image_uris.small}
        onClick={(event) => handleClickOnMDFC(event, data)}
      />
    );
  }
};

export default Card;
{
  /* 
  const [isPopOutVisable, setIsPopOutVisable] = useState(false);
    const handleMouseOver = () => {
    setIsPopOutVisable(true);
  };
  const handleMouseOut = () => {
    setIsPopOutVisable(false);
  };
  
  {isPopOutVisable && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      // transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                      backgroundColor: 'white',
                      boxShadow: '0 0 5px grey',
                      padding: '10px'
                    }}
                  >
                    <img src={card.image_uris.normal} alt="Pop Out Image" />
                  </div>
                )} */
}
