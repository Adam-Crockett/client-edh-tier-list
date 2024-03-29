import { useState, useEffect, useRef } from 'react';
import { CardList, TierLevelManager, CardDetails } from '../../Components';
import getRemovedCodes from '../../helpers/getRemovedCodes';
import { CardData, TierManagerProps } from '../../interfaces';
import { defaultTiers } from '../../helpers/defaultTiers';
import styles from './TierManager.module.css';

export const TierManager = ({
  currentCards,
  selectedCodes,
  tierLevels,
  setTierLevels,
  hoveredCard,
  cardList,
  setCardList,
  loadingCards,
  handleMouseOverCardDetails
}: TierManagerProps) => {
  const [currentCodes, setCurrentCodes] = useState<string[]>(selectedCodes);

  useEffect(() => {
    let newCards: CardData[] = [];
    if (Array.isArray(currentCards)) {
      newCards = currentCards.filter((card) => {
        return !cardList.some(
          (existingCard: CardData) => existingCard.set === card.set
        );
      });
    }
    const updatedTiers = [...tierLevels];
    if (currentCodes.length > selectedCodes.length) {
      const removedCodes = getRemovedCodes(currentCodes, selectedCodes);
      let updatedCards = [...cardList];
      updatedTiers.forEach((tier) => {
        tier.cards = tier.cards.filter((card: CardData) => {
          return !removedCodes.includes(card.set);
        });
      });

      updatedCards = updatedCards.filter((card) => {
        return !removedCodes.includes(card.set);
      });
      setCardList(updatedCards);
      setTierLevels(updatedTiers);
      setCurrentCodes(selectedCodes);
    } else {
      if (cardList.length > 0) {
        setCardList([...cardList, ...newCards]);
      } else {
        setCardList([...newCards]);
      }
      setCurrentCodes(selectedCodes);
      if (tierLevels.length === 0) {
        const newTierLevels = [...defaultTiers];
        newTierLevels[0].cards = [...cardList];
        setTierLevels(newTierLevels);
      } else {
        const updatedCardPool = [...tierLevels[0].cards, ...newCards];
        updatedTiers[0].cards = updatedCardPool;
        setTierLevels(updatedTiers);
      }
    }
  }, [currentCards, selectedCodes]);

  const [dragging, setDragging] = useState(false);
  const dragCard = useRef<[number, number] | null>();
  const dragNode = useRef<EventTarget | null>();
  const dragOverCard = useRef<number | null>();
  const [draggedImage, setDraggedImage] = useState<string | null>(null);

  const handleDragStart = (
    event: React.DragEvent<HTMLImageElement>,
    tierIndex: number,
    cardIndex: number
  ) => {
    dragNode.current = event.target;
    dragNode.current.addEventListener('dragend', handleDrop);
    dragCard.current = [tierIndex, cardIndex];
    setDraggedImage(() => {
      const image: string | undefined =
        tierLevels[tierIndex].cards[cardIndex]?.image_uris?.border_crop;
      return image ? image : null;
    });

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (
    event:
      | React.DragEvent<HTMLImageElement>
      | React.DragEvent<HTMLUListElement>,
    tierIndex: number,
    cardIndex: number
  ) => {
    if (dragNode.current !== event.target && dragCard.current) {
      dragOverCard.current = cardIndex;
      const updatedTierLevels = [...tierLevels];
      const draggedCard = updatedTierLevels[dragCard.current[0]].cards.splice(
        dragCard.current[1],
        1
      )[0];

      if (event.target instanceof HTMLImageElement) {
        updatedTierLevels[tierIndex].cards.splice(cardIndex, 0, draggedCard);
        setTierLevels(updatedTierLevels);
        dragCard.current = [tierIndex, cardIndex];
      } else {
        updatedTierLevels[tierIndex].cards.push(draggedCard);
        setTierLevels(updatedTierLevels);
        dragCard.current = [
          tierIndex,
          updatedTierLevels[tierIndex].cards.length - 1
        ];
      }
    }
  };
  const handleDrop = () => {
    setDragging(false);
    setDraggedImage(null);
    dragCard.current = null;
    dragNode.current?.removeEventListener('dragend', handleDrop);
    dragNode.current = null;
  };

  const handleRemoveTierLevel = (index: number) => {
    const updatedTierLevels = [...tierLevels];
    const removedCards = updatedTierLevels[index].cards;
    if (removedCards.length > 0) {
      const updatedCardPool = [...updatedTierLevels[0].cards, ...removedCards];
      updatedTierLevels[0].cards = updatedCardPool;
    }
    updatedTierLevels.splice(index, 1);
    setTierLevels(updatedTierLevels);
  };

  const handleEditTierLevelColor = (index: number, newColor: string) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels[index].color = newColor;
    setTierLevels(updatedTierLevels);
  };

  const handleEditTierLevelName = (index: number, newName: string) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels[index].tierName = newName;
    setTierLevels(updatedTierLevels);
  };

  return (
    <div className={styles.container}>
      <div className={styles.CardDetailsContainer}>
        <CardDetails
          hoveredCard={hoveredCard}
          selectedCodes={selectedCodes}
          draggedImage={draggedImage}
        />
      </div>
      <div className={styles.TierLevelContainer}>
        <TierLevelManager
          tierLevels={tierLevels}
          handleRemoveTierLevel={handleRemoveTierLevel}
          handleEditTierLevelName={handleEditTierLevelName}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          handleMouseOverCardDetails={handleMouseOverCardDetails}
          handleEditTierLevelColor={handleEditTierLevelColor}
          dragging={dragging}
        />
      </div>
      <div className={styles.CardListContainer}>
        {!loadingCards && tierLevels.length > 0 && (
          <CardList
            tierLevels={tierLevels}
            loadingCards={loadingCards}
            handleDragStart={handleDragStart}
            handleDragEnter={handleDragEnter}
            handleMouseOverCardDetails={handleMouseOverCardDetails}
            dragging={dragging}
          />
        )}
      </div>
    </div>
  );
};
