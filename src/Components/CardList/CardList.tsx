import { CardData, CardListProps } from '../../interfaces';
import { Card } from '../../components';

export const CardList = ({
  tierLevels,
  loadingCards,
  handleDragStart,
  handleDragEnter,
  dragging,
  handleMouseOverCardDetails
}: CardListProps) => {
  const cardListStyles = {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'list-style': 'none',
    padding: 0,
    marginTop: '160px'
  };

  if (loadingCards) {
    return <></>;
  } else {
    return (
      <ul
        style={cardListStyles}
        onDragEnter={
          dragging && tierLevels[0]?.cards.length == 0
            ? (event) => {
                handleDragEnter(event, 0, 0);
              }
            : undefined
        }
      >
        {tierLevels[0].cards.map((card: CardData, cardIndex: number) => {
          return (
            <li key={cardIndex}>
              <Card
                data={card}
                cardIndex={cardIndex}
                tierIndex={0}
                handleDragStart={handleDragStart}
                handleDragEnter={handleDragEnter}
                dragging={dragging}
                handleMouseOverCardDetails={handleMouseOverCardDetails}
              />
            </li>
          );
        })}
      </ul>
    );
  }
};
