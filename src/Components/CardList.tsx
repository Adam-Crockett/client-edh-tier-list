import Card from './Card';
const CardList = ({
  tierLevels,
  loadingCards,
  handleDragStart,
  handleDragEnter,
  dragging
}: any) => {
  const cardListStyles = {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'list-style': 'none',
    padding: 0,
    margin: 0
  };

  return (
    <ul
      style={cardListStyles}
      onDragEnter={
        dragging && tierLevels[0].cards.length == 0
          ? (event) => {
              console.log('dragEnter');
              handleDragEnter(event, 0, 0);
            }
          : undefined
      }
    >
      {loadingCards ? (
        <></>
      ) : (
        tierLevels[0].cards.map((card: any, cardIndex: number) => {
          return (
            <li key={cardIndex}>
              <Card
                data={card}
                cardIndex={cardIndex}
                tierIndex={0}
                handleDragStart={handleDragStart}
                handleDragEnter={handleDragEnter}
                dragging={dragging}
              />
              ;
            </li>
          );
        })
      )}
    </ul>
  );
};

export default CardList;
