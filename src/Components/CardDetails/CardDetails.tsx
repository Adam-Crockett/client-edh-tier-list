import { CardDetailsProps } from '../../interfaces';
export const CardDetails = ({ hoveredCard }: CardDetailsProps) => {
  if (hoveredCard[0] === undefined) {
    return <div></div>;
  } else {
    const data = hoveredCard[0];
    let cardImage = '';
    if (data?.image_uris) {
      cardImage = data.image_uris.large;
    } else if (data?.card_faces) {
      const cardFace =
        !hoveredCard[1] && hoveredCard[1] === -1 ? 0 : hoveredCard[1];
      cardImage = data.card_faces[cardFace]?.image_uris.large;
    }

    return (
      <div style={{ minHeight: '200' }}>
        <img src={cardImage} />
      </div>
    );
  }
};
