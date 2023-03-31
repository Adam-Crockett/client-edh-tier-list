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

  // console.log(tierLevels);

  return (
    <ul
      style={cardListStyles}
      // onDragEnter={dragging ? (event) => handleDragEnter(event) : null}
    >
      {loadingCards ? (
        <></>
      ) : (
        tierLevels[0].cards.map((card: any, index: number) => {
          return (
            <li
              key={index}
              draggable={true}
              onDragStart={(event) =>
                handleDragStart(event, card, index, tierLevels)
              }
              onDragEnter={(event) => handleDragEnter(event, index, tierLevels)}
            >
              <Card data={card} />;
            </li>
          );
        })
      )}
    </ul>
  );
};

export default CardList;
