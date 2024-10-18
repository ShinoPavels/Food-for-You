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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const calculateNeeds = () => {
    if (validateForm()) {
      navigate('/result', { state: formData });
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Welcome to Food 4 You!</h2>
        <p className="text-lg text-gray-600">
          Enter your details below and we will calculate your personalized dietary needs.
        </p>
      </div>

      <form className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <InputField 
          label="Age" 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          error={errors.age}
        />
        <InputField 
          label="Height (cm)" 
          type="number" 
          name="height" 
          value={formData.height} 
          onChange={handleChange} 
          error={errors.height}
        />
        <InputField 
          label="Weight (kg)" 
          type="number" 
          name="weight" 
          value={formData.weight} 
          onChange={handleChange} 
          error={errors.weight}
        />

        <div className="mb-4">
          <label htmlFor="sex" className="block text-gray-700 font-bold mb-2">Sex</label>
          <select
            name="sex"
            id="sex"
            value={formData.sex}
            onChange={handleChange}
            className={`block w-full bg-gray-100 border ${errors.sex ? 'border-red-500' : 'border-gray-300'} rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-green-500`}
          >
            <option value="">Select your sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.sex && <p className="text-red-500 text-xs italic">{errors.sex}</p>}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={calculateNeeds}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline mt-6 transition duration-200"
          >
            Calculate My Needs
          </button>
        </div>
      </form>
    </main>
  );
};

export default MainContent;
