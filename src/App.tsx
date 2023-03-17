import { createContext, useState } from 'react';
import useGetSets from './customHooks/useGetSets';
import './App.css';
import SetList from './components/SetList';
import CardList from './components/CardList';
import useGetCards from './customHooks/useGetCards';

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
          <div>
            <CardList currentCards={currentCards} loadingCards={loadingCards} />
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
