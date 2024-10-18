import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'; // Import the left arrow icon

const Header = ({ language, toggleLanguage }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Language-specific strings (except title, which stays in English)
  const textContent = {
    ENG: {
      backButton: 'Back',
    },
    FR: {
      backButton: 'Retour',
    }
  };

  return (
    <header className="relative bg-green-600 text-white py-4 px-6 shadow-md">
      {/* Centered Title - Always in English */}
      <h1 className="text-3xl font-extrabold tracking-wide text-center uppercase">
        <Link to="/" className="hover:underline hover:text-gray-200 transition-colors duration-300">
          Food 4 You
        </Link>
      </h1>

      {/* Language Switch Button */}
      <button
        onClick={toggleLanguage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
      >
        {language}
      </button>

      {/* Back Button - Only show if not on the homepage */}
      {location.pathname !== '/' && (
        <button
          onClick={handleBackButtonClick}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white text-green-600 px-2 py-1 rounded-lg flex items-center hover:bg-gray-100 transition-colors duration-300"
        >
          <AiOutlineArrowLeft className="mr-1" /> {/* Icon with margin to the right */}
          {textContent[language].backButton}
        </button>
      )}
    </header>
  );
};

export default Header;

