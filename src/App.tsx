import { createContext, useState } from 'react';
import useGetSets from './customHooks/useGetSets';
import './App.css';
import SetList from './components/SetList';
import CardList from './components/CardList';

const SetContext = createContext('');

interface AppState {
  selectedIds: number[];
}

// interface SetsData {
//   sets: FetchedSetsData[];
// }

// interface FetchedSetsData {
//   options: { id: number; src: string; name: string; code: string }[];
// }

function App() {
  const sets = useGetSets();
  const [selectedIds, setSelectedSets] = useState<AppState>({
    selectedIds: []
  });
  const handleMultiselectChange = (selectedIds: number[]) => {
    setSelectedSets({ selectedIds });
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
          {/* <CardList selectedSets={selectedIds} /> */}
          <div>{selectedIds.selectedIds}</div>
          {sets ? (
            <SetList
              sets={sets}
              selectedIds={selectedIds.selectedIds}
              onMultiselectChange={handleMultiselectChange}
            />
          ) : (
            <></>
          )}
        </header>
        <div></div>
      </div>
    </SetContext.Provider>
  );
}

export default App;
