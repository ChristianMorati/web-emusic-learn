import React from 'react';
import './App.css';
import TeoricContentScreen from './screens/teoric-content-course';

const App = () => {
  return (
    <div className={'app'}>
      {/* <TeoricQuiz levelIndex={0} /> */}
      <TeoricContentScreen />
    </div>
  );
};

export default App;
