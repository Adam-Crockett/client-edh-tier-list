import { useState } from 'react';
import useGetSets from './customHooks/useGetSets';
import './App.css';
import SetList from './components/SetList';
import useGetCards from './customHooks/useGetCards';
import TierManager from './components/TierManager';
import CardDetails from './components/CardDetails';

function App() {
  const { data, loading, error } = useGetSets();
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const { currentCards, loadingCards, cardError } = useGetCards(selectedCodes);
  const [hoveredCard, setHoveredCard] = useState<[any, number | undefined]>([
    undefined,
    undefined
  ]);
  const handleMultiselectChange = (newSelectedCodes: string[]) => {
    setSelectedCodes(newSelectedCodes);
  };

  function handleMouseOverCardDetails(
    card: any,
    cardFace: number | undefined = undefined
  ) {
    setHoveredCard([card, cardFace]);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <TierManager
          selectedCodes={selectedCodes}
          currentCards={currentCards}
          loadingCards={loadingCards}
          handleMouseOverCardDetails={handleMouseOverCardDetails}
        />
        <CardDetails hoveredCard={hoveredCard} />
        <div>
          {loading ? (
            <></>
          ) : (
            <SetList
              sets={data}
              selectedCodes={selectedCodes}
              onMultiselectChange={handleMultiselectChange}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
