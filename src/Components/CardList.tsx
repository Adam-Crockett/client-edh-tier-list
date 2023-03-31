import Card from './Card';
const CardList = ({ currentCards, loadingCards }: any) => {
  return (
    <ul>
      {loadingCards ? (
        <></>
      ) : (
        currentCards.map((card: any, index: number) => {
          return <Card key={index} draggable data={card} />;
        })
      )}
    </ul>
  );
};

export default CardList;
