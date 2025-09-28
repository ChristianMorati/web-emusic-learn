import React from 'react';
import Header from '../../components/header';
import styles from './home.module.css';
import LandingPage from './landing-page';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
    </div>
  );
};

export default HomeScreen;
