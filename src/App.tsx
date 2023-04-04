import { useState, useEffect } from 'react';
import useGetSets from './customHooks/useGetSets';
import './App.css';
import SetList from './components/SetList';
import useGetCards from './customHooks/useGetCards';
import TierManager from './components/TierManager';
import CardDetails from './components/CardDetails';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import useCachedData from './customHooks/useCachedData/useCachedData';

function App() {
  const [cachedData, setCachedData] = useCachedData();
  const [resetState, setResetState] = useState<boolean>(false);
  const { data, loading, error } = useGetSets();
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const { currentCards, loadingCards, cardError } = useGetCards(selectedCodes);
  const [hoveredCard, setHoveredCard] = useState<[any, number | undefined]>([
    undefined,
    undefined
  ]);
  const [setWindowOpen, setSetWindowOpen] = useState<boolean>(false);

  useEffect(() => {
    if (resetState) {
      setSelectedCodes([]);
      setHoveredCard([undefined, undefined]);
    }
  }, [resetState]);

  useEffect(() => {
    setCachedData({
      cardList: currentCards,
      currentCodes: selectedCodes,
      tierList: cachedData?.tierList || []
    });
    setResetState(false);
  }, [selectedCodes, currentCards]);

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

  return (
    <div className={styles.app}>
      <header>
        <Navbar
          handleOnClickSetEdit={handleOnClickSetEdit}
          setResetState={setResetState}
          resetState={resetState}
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
          loadingCards={loadingCards}
          handleMouseOverCardDetails={handleMouseOverCardDetails}
          resetState={resetState}
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
