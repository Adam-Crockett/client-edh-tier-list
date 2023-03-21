import { useState } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';

type DragItem = {
  index: number;
  id: string;
  type: string;
};

const TierManager = ({ cardList, loadingCards }: any) => {
  const [dragItem, setDragItem] = useState<DragItem | null>(null);
  const [lists, setLists] = useState(cardList);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
    id: string,
    type: any
  ) => {
    console.log('drag start', index, id, type);
    setDragItem({ index, id, type });
    event.dataTransfer.setData('text/plain', '');
  };

  const handleDragEnd = () => {
    console.log('drag end');
    setDragItem(null);
  };
  const handleDragOver = (
    event: React.DragEvent<HTMLImageElement>,
    listId: string
  ) => {
    event.preventDefault;
  };

  const handleDrop = (
    event: React.DragEvent<HTMLImageElement>,
    listId: string
  ) => {
    event.preventDefault;
    if (dragItem && dragItem.type === 'item') {
      const newList = [...lists];
      const itemIndex = newList[dragItem.index].items.findIndex(
        (item: any) => item.id === dragItem.id
      );
      if (itemIndex >= 0) {
        const item = newList[dragItem.index].items[itemIndex];
        newList[dragItem.index].items.splice(itemIndex, 1);
        const targetListIndex = newList.findIndex((list) => list.id === listId);
        newList[targetListIndex].items.push(item);
        setLists(newList);
      }
    }
  };
  return (
    <>
      {/* <TierLevelManager
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
      <CardList
        currentCards={cardList}
        loadingCards={loadingCards}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      /> */}
    </>
  );
};

export default TierManager;
