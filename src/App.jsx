import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import EnergyResultPage from './components/EnergyResultPage';
import GenerateMealsPage from './components/GenerateMealsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/result" element={<EnergyResultPage />} />
          <Route path="/generate-meals" element={<GenerateMealsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

