import React from 'react';

import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import styles from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
