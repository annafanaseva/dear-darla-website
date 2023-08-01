import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
