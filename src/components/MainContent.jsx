import React, { useState } from 'react';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    sex: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateNeeds = () => {
    // Save the form data to local storage or pass it via navigation state
    navigate('/result', { state: formData });
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Food 4 You!</h2>
      <p className="mb-6 text-gray-600">
        Enter your details below and we will calculate the energy requirements based on your profile.
      </p>

      <form className="w-full max-w-md mx-auto">
        <InputField label="Age" type="number" name="age" value={formData.age} onChange={handleChange} />
        <InputField label="Height (cm)" type="number" name="height" value={formData.height} onChange={handleChange} />
        <InputField label="Weight (kg)" type="number" name="weight" value={formData.weight} onChange={handleChange} />
        <InputField label="Sex" type="text" name="sex" value={formData.sex} onChange={handleChange} />
        
        <button
          type="button"
          onClick={calculateNeeds}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Calculate My Needs
        </button>
      </form>
    </main>
  );
};

export default MainContent;
