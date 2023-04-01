import { useState, useEffect, useRef } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';
import getRemovedCodes from '../helpers/getRemovedCodes';

const TierManager = ({ currentCards, selectedCodes }: any) => {
  const [cardList, setCardList] = useState<any>(currentCards);
  const [currentCodes, setCurrentCodes] = useState<string[]>(selectedCodes);
  const [tierLevels, setTierLevels] = useState<any[]>([]);
  useEffect(() => {
    // Implement handling if cards are removed from the card pool
    const newCards = currentCards.filter((card: any) => {
      return !cardList.includes(card);
    });
    console.log(currentCodes.length, selectedCodes.length);
    if (currentCodes.length > selectedCodes.length) {
      const removedCodes = getRemovedCodes(currentCodes, selectedCodes);
      console.log(removedCodes);
      const updatedTiers = [...tierLevels];
      const updatedCards = [...cardList];
      updatedTiers.forEach((tier) => {
        tier.cards = tier.cards.filter((card: any) => {
          return !removedCodes.includes(card.set);
        });
      });
      updatedCards.forEach((card: any) => {
        if (removedCodes.includes(card.set)) {
          updatedCards.splice(updatedCards.indexOf(card), 1);
        }
      });
      console.log(updatedTiers);
      setCardList(updatedCards);
      setTierLevels(updatedTiers);
      setCurrentCodes(selectedCodes);
    } else {
      // Cards already in pool are added to the card pool tier
      setCardList([...cardList, ...newCards]);
      setCurrentCodes(selectedCodes);
      if (tierLevels.length === 0) {
        setTierLevels([{ tierName: 'cardPool', cards: [...cardList] }]);
      } else {
        const updatedTiers = [...tierLevels];
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

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    tierIndex: number,
    cardIndex: number
  ) => {
    dragNode.current = event.target;
    dragNode.current.addEventListener('dragend', handleDrop);
    dragCard.current = [tierIndex, cardIndex];
    console.log('dragStart');

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (
    event: React.DragEvent<HTMLLIElement>,
    tierIndex: number,
    cardIndex: number
  ) => {
    console.log('dragEnter');
    console.log('tierIndex: ', tierIndex);
    if (dragNode.current !== event.target && dragCard.current) {
      console.log('not over self');
      dragOverCard.current = cardIndex;
      const updatedTierLevels = [...tierLevels];
      const draggedCard = updatedTierLevels[dragCard.current[0]].cards.splice(
        dragCard.current[1],
        1
      )[0];
      updatedTierLevels[tierIndex].cards.splice(cardIndex, 0, draggedCard);
      setTierLevels(updatedTierLevels);
      dragCard.current = [tierIndex, cardIndex];
    }
  };
  const handleDrop = (event: any) => {
    console.log('dragDrop');
    setDragging(false);
    dragCard.current = null;
    dragNode.current?.removeEventListener('dragend', handleDrop);
    dragNode.current = null;
  };

  const handleAddTierLevel = () => {
    setTierLevels([...tierLevels, { tierName: tierLevels.length, cards: [] }]);
  };

  const handleRemoveTierLevel = (index: number) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels.splice(index, 1);
    setTierLevels(updatedTierLevels);
  };

  const handleEditTierLevel = (index: number, newName: string) => {
    const updatedTierLevels = [...tierLevels];
    updatedTierLevels[index].tierName = newName;
    setTierLevels(updatedTierLevels);
  };

  return (
    <>
      <TierLevelManager
        tierLevels={tierLevels}
        handleAddTierLevel={handleAddTierLevel}
        handleRemoveTierLevel={handleRemoveTierLevel}
        handleEditTierLevel={handleEditTierLevel}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        dragging={dragging}
      />
      {cardList.length > 0 && (
        <CardList
          tierLevels={tierLevels}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          dragging={dragging}
        />
      )}
    </>
  );
};

export default TierManager;
