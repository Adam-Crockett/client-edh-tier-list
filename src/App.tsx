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
  const [selectedCodes, setSelectedCodes] = useState<SelectedSets>({
    selectedCodes: []
  });
  const { currentCards, loadingCards, cardError } = useGetCards(selectedCodes);
  const handleMultiselectChange = (selectedCodes: string[]) => {
    setSelectedCodes({ selectedCodes });
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
          <CardList selectedSets={currentCards} />
          <div>{selectedCodes.selectedCodes}</div>
          {loading ? (
            <></>
          ) : (
            <SetList
              sets={data}
              selectedCodes={selectedCodes.selectedCodes}
              onMultiselectChange={handleMultiselectChange}
            />
          )}
        </header>
        <div></div>
      </div>
    </SetContext.Provider>
  );
}

export default App;
