import React from 'react';

import Header from '../../components/Header';
import About from '../../components/About';
import Footer from '../../components/Footer';

import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
