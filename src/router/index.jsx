import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default Router;
