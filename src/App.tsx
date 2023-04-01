import { createContext, useState } from 'react';
import useGetSets from './customHooks/useGetSets';
import './App.css';
import SetList from './components/SetList';
import useGetCards from './customHooks/useGetCards';
import TierManager from './components/TierManager';

const SetContext = createContext('');

function App() {
  const { data, loading, error } = useGetSets();
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const { currentCards, loadingCards, cardError } = useGetCards(selectedCodes);
  const handleMultiselectChange = (newSelectedCodes: string[]) => {
    setSelectedCodes(newSelectedCodes);
  };

  return (
    <SetContext.Provider value="">
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <main>
          <TierManager
            selectedCodes={selectedCodes}
            currentCards={currentCards}
            loadingCards={loadingCards}
          />
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
    </SetContext.Provider>
  );
}

export default App;
