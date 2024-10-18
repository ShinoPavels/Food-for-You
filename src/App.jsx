import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import EnergyResultPage from './components/EnergyResultPage';
import GenerateMealsPage from './components/GenerateMealsPage';

function App() {
  const [language, setLanguage] = useState('ENG'); // Lifting the language state up

  const toggleLanguage = () => {
    setLanguage(language === 'ENG' ? 'FR' : 'ENG');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/" element={<MainContent language={language} />} />
          <Route path="/result" element={<EnergyResultPage language={language} />} />
          <Route path="/generate-meals" element={<GenerateMealsPage language={language} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

