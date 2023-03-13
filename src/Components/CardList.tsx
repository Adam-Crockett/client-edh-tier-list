import { useState } from 'react';
import { CardData } from '../interfaces';

const CardList = ({ currentCards, loadingCards }: any) => {
  console.log(currentCards);
  return (
    <ul>
      {loadingCards ? (
        <></>
      ) : (
        currentCards.map((card: any) => (
          <img key={card.id} src={card.image_uris.small} />
        ))
      )}
    </ul>
  );
};

export default CardList;
