import { CardData } from '../interfaces';
const CardList = ({ currentCards, loadingCards }: any) => {
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
            return <img key={card.id} src={card.image_uris.small} />;
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
