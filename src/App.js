import React from 'react';
import './App.css';
import TeoricQuiz from './module/game/components/teoric-quiz';
import Game from './module/game/components/game';
import TeoricContentScreen from './screens/teoric-content-course';
import HomeScreen from './screens/home';
import Header from './components/header';

const App = () => {
  return (
    <div className={'app'}>
      {/* <TeoricQuiz levelIndex={0} /> */}
      {/* <Game /> */}
      {/* <HomeScreen /> */}
      <Header />
      <TeoricContentScreen />
    </div>
  );
};

export default App;
