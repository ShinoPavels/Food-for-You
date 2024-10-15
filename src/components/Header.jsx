import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white py-4">
      <h1 className="text-center text-3xl font-bold">
        <Link to="/" className="hover:underline">
          Food 4 You
        </Link>
      </h1>
    </header>
  );
};

export default Header;
