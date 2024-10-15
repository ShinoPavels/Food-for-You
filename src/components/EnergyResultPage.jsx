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

  const [errors, setErrors] = useState({}); // To track errors for each field
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Clear error for the field being changed
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Check if fields are empty
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required'; // Set error message for empty field
        isValid = false;
      }
    });

    setErrors(newErrors); // Update errors state
    return isValid; // Return the validity of the form
  };

  const calculateNeeds = () => {
    if (validateForm()) {
      // Save the form data to local storage or pass it via navigation state
      navigate('/result', { state: formData });
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Food 4 You!</h2>
      <p className="mb-6 text-gray-600">
        Enter your details below and we will calculate the energy requirements based on your profile.
      </p>

      <form className="w-full max-w-md mx-auto">
        <InputField 
          label="Age" 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          error={errors.age}
          className={errors.age ? 'border-red-500' : ''}
        />
        <InputField 
          label="Height (cm)" 
          type="number" 
          name="height" 
          value={formData.height} 
          onChange={handleChange} 
          error={errors.height}
          className={errors.height ? 'border-red-500' : ''}
        />
        <InputField 
          label="Weight (kg)" 
          type="number" 
          name="weight" 
          value={formData.weight} 
          onChange={handleChange} 
          error={errors.weight}
          className={errors.weight ? 'border-red-500' : ''}
        />
        
        <label htmlFor="sex" className="block text-gray-700 font-bold mb-2">Sex</label>
        <select
          name="sex"
          id="sex"
          value={formData.sex}
          onChange={handleChange}
          className={`block w-full bg-gray-200 border ${errors.sex ? 'border-red-500' : 'border-gray-300'} rounded py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500`}
        >
          <option value="">Sex</option> {/* Default option */}
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.sex && <p className="text-red-500 text-xs italic">{errors.sex}</p>}
        
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
