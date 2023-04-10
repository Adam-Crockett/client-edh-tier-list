import { CardData, CardListProps } from '../../interfaces';
import { Card } from '../../Components';
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
      <div
        className={`${styles.cardListWrapper} ${
          tierLevels[0].cards.length === 0 ? styles.emptyWrapper : ''
        }`}
      >
        <ul
          className={`${styles.container} ${
            tierLevels[0].cards.length === 0 ? styles.emptyTier : ''
          }`}
          onDragEnter={(event) => {
            if (event.target === event.currentTarget) {
              handleDragEnter(event, 0, tierLevels[0].cards.length - 1);
            } else {
              undefined;
            }
          }}
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
      </div>
    );
  }
};
