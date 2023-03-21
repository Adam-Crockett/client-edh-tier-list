import { useState, useEffect, useRef } from 'react';
import TierLevelManager from './TierLevelManager';
import CardList from './CardList';

type DragItem = {
  index: number;
  id: string;
  type: string;
};

const TierManager = ({ cardList, loadingCards }: any) => {
  const [isDragginer, setIsDragging] = useState(false);
  const [lists, setLists] = useState(cardList);

  // useEffect(() => {
  //   setLists(cardList);
  // }, [setLists, cardList]);

  // const dragItem = useRef();
  // const dragItemNode = useRef();

  // const handleDragStart = (event: any, item: any) => {
  //   dragItemNode.current = event.target;
  //   dragItemNode.current.addEventListener('dragend', handleDragEnd);
  //   dragItem.current = item;

  //   setTimeout(() => {
  //     setIsDragging(true);
  //   });
  // };

  // const handleDragOver = (event: any, targetItem: any) => {
  //   if (dragItemNode.current !== event.target) {
  //     setLists((oldList) => {
  //       let newList = JSON.parse(JSON.stringify(oldList));
  //       newList[targetItem.grpI].items.splice(
  //         targetItem.itemI,
  //         0,
  //         newList[dragItem.current.grpI].items.splice(
  //           dragItem.current.itemI,
  //           1
  //         )[0]
  //       );
  //       dragItem.current = targetItem;
  //       return newList;
  //     });
  //   }
  // };
  // const handleDragEnd = (event: any) => {
  //   setIsDragging(false);
  //   dragItem.current = null;
  //   dragItemNode.current.removeEventListener('dragend', handleDragEnd);
  //   dragItemNode.current = null;
  // };

  // const handleDrop = (
  //   event: React.DragEvent<HTMLImageElement>,
  //   listId: string
  // ) => {
  //   event.preventDefault;
  //   if (dragItem && dragItem.type === 'item') {
  //     const newList = [...lists];
  //     const itemIndex = newList[dragItem.index].items.findIndex(
  //       (item: any) => item.id === dragItem.id
  //     );
  //     if (itemIndex >= 0) {
  //       const item = newList[dragItem.index].items[itemIndex];
  //       newList[dragItem.index].items.splice(itemIndex, 1);
  //       const targetListIndex = newList.findIndex((list) => list.id === listId);
  //       newList[targetListIndex].items.push(item);
  //       setLists(newList);
  //     }
  //   }
  // };

  return (
    <>
      <TierLevelManager
      // handleDragStart={handleDragStart}
      // handleDragEnd={handleDragEnd}
      // handleDragOver={handleDragOver}
      // handleDrop={handleDrop}
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
