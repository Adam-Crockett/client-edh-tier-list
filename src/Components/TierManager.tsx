import { useState, useEffect, useRef } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';

const TierManager = ({ currentCards }: any) => {
  const [cardList, setCardList] = useState(currentCards);
  const [tierLevels, setTierLevels] = useState<any[]>([]);
  useEffect(() => {
    setCardList(currentCards);
  }, [currentCards]);

  const dragCard = useRef<number | null>();
  const dragOverCard = useRef<number | null>();

  const handleDragStart = (
    event: any,
    card: any,
    index: any,
    parentCollection: any
  ) => {
    event.preventDefault();
    dragCard.current = index;
    console.log('dragStart fired');
  };

  const handleDragEnter = (
    event: any,
    index: number,
    parentCollection: any
  ) => {
    event.preventDefault();
    console.log('dragOver fired');
    if (dragCard.current && index) {
      dragOverCard.current = index;
      const tempCardList = [...cardList];
      const dragCardContent = tempCardList[dragCard.current];
      console.log(dragCard.current);
      console.log(dragOverCard.current);
      tempCardList.splice(dragCard.current, 1);
      tempCardList.splice(dragOverCard.current, 0, dragCardContent);
      dragCard.current = null;
      dragOverCard.current = null;
      setCardList(tempCardList);
    }
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    console.log('drop fired');
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
      <CardList
        currentCards={cardList}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDrop={handleDrop}
      />
    </>
  );
};

export default TierManager;
