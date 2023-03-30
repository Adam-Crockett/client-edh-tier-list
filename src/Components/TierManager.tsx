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
