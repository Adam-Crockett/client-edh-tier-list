import { useState } from 'react';
import { CardData } from '../interfaces';
const CardList = ({ currentCards, loadingCards }: any) => {
  const [isPopOutVisable, setIsPopOutVisable] = useState(false);

  const handleMouseOver = () => {
    setIsPopOutVisable(true);
  };
  const handleMouseOut = () => {
    setIsPopOutVisable(false);
  };

  const handleClickOnMDFC = (
    event: React.MouseEvent<HTMLImageElement>,
    card: any
  ) => {
    const element = event.target as HTMLImageElement;

    const swapFace: any =
      element.src == card.card_faces[0].image_uris.small
        ? card.card_faces[1].image_uris.small
        : card.card_faces[0].image_uris.small;
    element.src = swapFace;
  };

  return (
    <ul>
      {loadingCards ? (
        <></>
      ) : (
        currentCards.map((card: any) => {
          if (card.image_uris) {
            return (
              <>
                <img
                  key={card.id}
                  src={card.image_uris.small}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
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
                )}
              </>
            );
          } else {
            return (
              <img
                key={card.id}
                src={card.card_faces[0].image_uris.small}
                onClick={(event) => handleClickOnMDFC(event, card)}
              />
            );
          }
        })
      )}
    </ul>
  );
};

export default CardList;
