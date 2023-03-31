import Card from './Card';
const CardList = ({ currentCards, loadingCards }: any) => {
  const cardListStyles = {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'list-style': 'none',
    padding: 0,
    margin: 0
  };

  return (
    <ul style={cardListStyles}>
      {loadingCards ? (
        <></>
      ) : (
        currentCards.map((card: any, index: number) => {
          return (
            <li key={index}>
              <Card draggable data={card} />;
            </li>
          );
        })
      )}
    </ul>
  );
};

export default CardList;
