import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PetInfo from './components/PetInfo';
import ContactOwner from './components/ContactOwner';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  // State to manage the current language ('en' for English, 'zh' for Chinese)
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Function to toggle the language
  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  return (
    <Router>
      <AppContainer>
        {/* Pass toggleLanguage function and currentLanguage to Header */}
        <Header toggleLanguage={toggleLanguage} currentLanguage={currentLanguage} />
        <Routes>
          {/* Pass currentLanguage as a prop to the PetInfo and ContactOwner components */}
          <Route path="/" element={<PetInfo currentLanguage={currentLanguage} />} />
          <Route path="/contact" element={<ContactOwner currentLanguage={currentLanguage} />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
