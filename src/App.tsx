import React, { createContext, useState } from 'react';
import useGetSets from './customHooks/useGetSets';
import logo from './logo.svg';
import './App.css';
import SetList from './components/SetList';
import CardList from './components/CardList';

const SetContext = createContext('');

function App() {
  const sets = useGetSets();
  const [selectedSets, setSelectedSets] = useState();
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
          <CardList selectedSets={selectedSets} />
          <SetList
            sets={sets}
            onSelect={setSelectedSets}
            selectedSets={selectedSets}
          />
        </header>
        <div></div>
      </div>
    </SetContext.Provider>
  );
}

export default App;
