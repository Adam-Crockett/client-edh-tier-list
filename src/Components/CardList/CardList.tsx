import { CardData, CardListProps } from '../../interfaces';
import { Card } from '../../components';
import styles from './CardList.module.css';

export const CardList = ({
  tierLevels,
  loadingCards,
  handleDragStart,
  handleDragEnter,
  dragging,
  handleMouseOverCardDetails
}: CardListProps) => {
  if (loadingCards) {
    return <></>;
  } else {
    return (
      // <div className={styles.cardListWrapper}>
      <ul
        className={styles.container}
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
      // </div>
    );
  }
};
