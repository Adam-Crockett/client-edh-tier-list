import { useState, useEffect } from 'react';
import { Navbar, SetList, TierManager } from './Components';
import useGetCards from './customHooks/useGetCards';
import useGetSets from './customHooks/useGetSets';
import { TierLevel, CardData, SetData } from './interfaces';

import useCachedData from './customHooks/useCachedData';
import downloadFile from './helpers/downloadFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import './index.css';
import './App.css';
import styles from './App.module.css';
import { defaultTiers } from './helpers/defaultTiers';

function App() {
  const { cachedData, setCachedData } = useCachedData();
  const [resetState, setResetState] = useState<boolean>(false);
  const { data, loading, error } = useGetSets();
  const [sets, setSets] = useState<SetData[]>(data);
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
    setSets(data);
    console.log(data);
    console.log(sets);
  }, [data]);

  useEffect(() => {
    if (resetState) {
      setSelectedCodes([]);
      setTierLevels([]);
      setHoveredCard([undefined, -1]);
      setCachedData({
        cardList: [],
        currentCodes: [],
        tierLevels: defaultTiers
      });
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
      { tierName: tierLevels.length, color: '#006B76', cards: [] }
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
          selectedCodes={selectedCodes}
        />
      </header>
      <main>
        {setWindowOpen && (
          <SetList
            sets={sets}
            selectedCodes={selectedCodes}
            onMultiselectChange={handleMultiselectChange}
            handleOnClickSetEdit={handleOnClickSetEdit}
            loading={loading}
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
      <footer className={styles.footer}>
        <a
          className={styles.gitHubButton}
          href="https://github.com/Adam-Crockett/client-edh-tier-list"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <div className={styles.disclaimerInfo}>
          <p>
            Magic: The Gathering is a Trademark of Wizards of the Coast, Inc.
            and Hasbro, Inc.
          </p>
          <p>
            Card data provided by&nbsp;
            <a
              className={styles.scryfallFooterLink}
              href="https://scryfall.com/"
              target="_blank"
            >
              Scryfall
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
