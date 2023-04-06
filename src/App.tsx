import { useState, useEffect } from 'react';
import { Navbar, SetList, TierManager } from './components';
import useGetCards from './customHooks/useGetCards';
import useGetSets from './customHooks/useGetSets';
import { TierLevel, CardData } from './interfaces';

import useCachedData from './customHooks/useCachedData';
import downloadFile from './helpers/downloadFile';
import './index.css';
import './App.css';
import styles from './App.module.css';

function App() {
  const { cachedData, setCachedData } = useCachedData();
  const [resetState, setResetState] = useState<boolean>(false);
  const { data, loading, error } = useGetSets();
  const [selectedCodes, setSelectedCodes] = useState<string[]>(
    cachedData.currentCodes
  );
  const { currentCards, loadingCards, cardError } = useGetCards(
    cachedData.currentCodes
  );
  const [tierLevels, setTierLevels] = useState<TierLevel[]>(
    cachedData.tierLevels
  );
  const [hoveredCard, setHoveredCard] = useState<
    [CardData | undefined, number]
  >([undefined, -1]);
  const [setWindowOpen, setSetWindowOpen] = useState<boolean>(false);
  const [cardList, setCardList] = useState<CardData[]>(cachedData.cardList);

  useEffect(() => {
    if (resetState) {
      setSelectedCodes([]);
      setTierLevels([]);
      setHoveredCard([undefined, -1]);
      setCachedData({ cardList: [], currentCodes: [], tierLevels: [] });
    }
  }, [resetState]);

  useEffect(() => {
    setCachedData({
      cardList: currentCards,
      currentCodes: selectedCodes,
      tierLevels: tierLevels
    });
    setResetState(false);
  }, [selectedCodes, currentCards, tierLevels]);

  const handleMultiselectChange = (newSelectedCodes: string[]) => {
    setSelectedCodes(newSelectedCodes);
  };

  function handleMouseOverCardDetails(card: CardData, cardFace = -1) {
    setHoveredCard([card, cardFace]);
  }

  function handleOnClickSetEdit() {
    setSetWindowOpen(!setWindowOpen);
  }

  function handleOnClickExport() {
    downloadFile(cachedData);
  }

  const handleAddTierLevel = () => {
    setTierLevels([
      ...tierLevels,
      { tierName: tierLevels.length, color: '#04293a', cards: [] }
    ]);
  };

  return (
    <div className={styles.app}>
      <header>
        <Navbar
          handleOnClickSetEdit={handleOnClickSetEdit}
          setResetState={setResetState}
          resetState={resetState}
          handleAddTierLevel={handleAddTierLevel}
          handleOnClickExport={handleOnClickExport}
        />
      </header>
      <main>
        {setWindowOpen && (
          <SetList
            sets={data}
            selectedCodes={selectedCodes}
            onMultiselectChange={handleMultiselectChange}
            handleOnClickSetEdit={handleOnClickSetEdit}
          />
        )}
        {setWindowOpen && <div className={styles.overlay} />}
        <div>
          <TierManager
            selectedCodes={selectedCodes}
            currentCards={currentCards}
            tierLevels={tierLevels}
            setTierLevels={setTierLevels}
            cardList={cardList}
            setCardList={setCardList}
            loadingCards={loadingCards}
            hoveredCard={hoveredCard}
            handleMouseOverCardDetails={handleMouseOverCardDetails}
          />
        </div>
      </main>
      <footer className={styles.footer}>Disclaimer Stuff</footer>
    </div>
  );
}

export default App;
