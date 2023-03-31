import { useState, useEffect } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';

const TierManager = ({ currentCards, loadingCards }: any) => {
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
        handleAddTierLevel={handleAddTierLevel}
        handleRemoveTierLevel={handleRemoveTierLevel}
        handleEditTierLevel={handleEditTierLevel}
      />
      <CardList currentCards={cardList} />
    </>
  );
};

export default TierManager;
