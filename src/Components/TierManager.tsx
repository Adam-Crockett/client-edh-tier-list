import { useState, useEffect, useRef } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';

type DragItem = {
  index: number;
  id: string;
  type: string;
};

const TierManager = ({ currentCards, loadingCards }: any) => {
  const [isDragginer, setIsDragging] = useState(false);
  const [cardList, setCardList] = useState(currentCards);
  const [tierLevels, setTierLevels] = useState<any[]>([]);

  useEffect(() => {
    setCardList(currentCards);
  }, [currentCards]);

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
        tierCards={cardList}
        handleAddTierLevel={handleAddTierLevel}
        handleRemoveTierLevel={handleRemoveTierLevel}
        handleEditTierLevel={handleEditTierLevel}
      />
      <CardList
        currentCards={cardList}
        // loadingCards={loadingCards}
        // handleDragStart={handleDragStart}
        // handleDragEnd={handleDragEnd}
        // handleDragOver={handleDragOver}
        // handleDrop={handleDrop}
      />
    </>
  );
};

export default TierManager;
