import React from 'react';
import './index.css';
import './App.css';
import TeoricContentScreen from './screens/teoric-content-course';
import GameScreen from './screens/game';

const App = () => {

  return (
    <div>
      <div className="game">
        <GameScreen />
        <TeoricContentScreen />
      </div>
    </div>
  );
}

export default App;
