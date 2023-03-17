import { createContext, useState } from 'react';
import useGetSets from './customHooks/useGetSets';
import './App.css';
import SetList from './components/SetList';
import CardList from './components/CardList';
import { SelectedSets } from './interfaces';
import useGetCards from './customHooks/useGetCards';

const SetContext = createContext('');

function App() {
  const { data, loading, error } = useGetSets();
  // Implement a solution to deal with removing a set from selectedCodes and updating currentCards
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
      </div>
    </SetContext.Provider>
  );
}

export default App;
