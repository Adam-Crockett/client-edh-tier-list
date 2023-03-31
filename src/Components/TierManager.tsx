import { useState, useEffect, useRef } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';

const TierManager = ({ currentCards }: any) => {
  const [cardList, setCardList] = useState(currentCards);
  const [tierLevels, setTierLevels] = useState<any[]>([]);
  useEffect(() => {
    const newCards = currentCards.filter((card: any) => {
      return !cardList.includes(card);
    });
    setCardList([...cardList, ...newCards]);
    if (tierLevels.length === 0) {
      setTierLevels([{ tierName: 'cardPool', cards: [...cardList] }]);
    } else {
      const updatedTiers = [...tierLevels];
      const updatedCardPool = [...tierLevels[0].cards, ...newCards];
      updatedTiers[0].cards = updatedCardPool;
      setTierLevels(updatedTiers);
    }
  }, [currentCards]);

  console.log('cardList: ', cardList);
  console.log('tierLevels: ', tierLevels);

  const [dragging, setDragging] = useState(false);
  const dragCard = useRef<[number, any] | null>();
  const dragNode = useRef<EventTarget | null>();
  const dragOverCard = useRef<number | null>();

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    card: any,
    index: number
  ) => {
    dragCard.current = [index, card];
    dragNode.current = event.target;
    dragNode.current.addEventListener('dragend', handleDrop);
    console.log('dragStart');

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    console.log('dragEnter');
    // if (dragCard.current && index) {
    //   dragOverCard.current = index;
    //   const tempCardList = [...cardList];
    //   const dragCardContent = tempCardList[dragCard.current[0]];
    //   console.log(dragCard.current);
    //   console.log(dragOverCard.current);
    //   tempCardList.splice(dragCard.current[0], 1);
    //   tempCardList.splice(dragOverCard.current, 0, dragCardContent);
    //   dragCard.current = null;
    //   dragOverCard.current = null;
    //   setCardList(tempCardList);
    // }
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    console.log('dragDrop');
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
        handleDrop={handleDrop}
        handleDragEnter={handleDragEnter}
      />
      {cardList.length > 0 && (
        <CardList
          tierLevels={tierLevels}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          handleDrop={handleDrop}
          dragging={dragging}
        />
      )}
    </>
  );
};

export default TierManager;
