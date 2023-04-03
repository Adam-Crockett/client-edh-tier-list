import React from 'react';

const CardDetails = ({ hoveredCard }: any) => {
  const data = hoveredCard[0];
  const cardFace = hoveredCard[1];
  let cardImage = '';
  if (data?.image_uris) {
    cardImage = data.image_uris.large;
  } else if (data?.card_faces) {
    cardImage = data.card_faces[cardFace].image_uris.large;
  }

  return (
    <div style={{ minHeight: '200' }}>
      <img src={cardImage} />
    </div>
  );
};

export default CardDetails;
