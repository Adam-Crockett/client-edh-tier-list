import { useState, useEffect } from 'react';
import { Navbar, CardDetails, SetList, TierManager } from './components';
import useGetCards from './customHooks/useGetCards';
import useGetSets from './customHooks/useGetSets';
import { TierLevel, CardData } from './interfaces';

import useCachedData from './customHooks/useCachedData';
import downloadFile from './helpers/downloadFile';
import './App.css';
import styles from './App.module.css';

function App() {
  const [cachedData, setCachedData] = useCachedData();
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
  const [hoveredCard, setHoveredCard] = useState<[any, number | undefined]>([
    undefined,
    undefined
  ]);
  const [setWindowOpen, setSetWindowOpen] = useState<boolean>(false);
  const [cardList, setCardList] = useState<CardData[]>(cachedData.cardList);

  useEffect(() => {
    if (resetState) {
      setSelectedCodes([]);
      setTierLevels([]);
      setHoveredCard([undefined, undefined]);
      setCachedData({
        cardList: [],
        currentCodes: [],
        tierLevels: []
      });
    }
  }, [resetState]);

  useEffect(() => {
    setCachedData({
      currentCodes: selectedCodes,
      cardList: currentCards,
      tierLevels: tierLevels
    });
    setResetState(false);
  }, [selectedCodes, currentCards, tierLevels]);

  const handleMultiselectChange = (newSelectedCodes: string[]) => {
    setSelectedCodes(newSelectedCodes);
  };

  function handleMouseOverCardDetails(
    card: any,
    cardFace: number | undefined = undefined
  ) {
    setHoveredCard([card, cardFace]);
  }

  function handleOnClickSetEdit() {
    setSetWindowOpen(!setWindowOpen);
  }

  function handleOnClickExport() {
    downloadFile(cachedData);
  }

  return (
    <div className={styles.app}>
      <header>
        <Navbar
          handleOnClickSetEdit={handleOnClickSetEdit}
          setResetState={setResetState}
          resetState={resetState}
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

        <TierManager
          selectedCodes={selectedCodes}
          currentCards={currentCards}
          tierLevels={tierLevels}
          setTierLevels={setTierLevels}
          cardList={cardList}
          setCardList={setCardList}
          loadingCards={loadingCards}
          handleMouseOverCardDetails={handleMouseOverCardDetails}
        />
        <div>
          <CardDetails hoveredCard={hoveredCard} />
        </div>
      </main>
      <footer className={styles.footer}>Disclaimer Stuff</footer>
    </div>
  );
}

export default App;
