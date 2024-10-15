import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

const EnergyResultPage = () => {
  const location = useLocation();
  const { age, height, weight, sex } = location.state;
  const navigate = useNavigate();

  const handleGenerateMeals = () => {
    navigate('/generate-meals', {
      state: {
        energy: Math.round(energy),
        carbs: Math.round(carbs),
        protein: Math.round(protein),
        fats: Math.round(fats),
      },
    });
  };

  const heightInMeters = height / 100; // Convert height to meters

  // Energy calculation
  let energy;
  if (sex.toLowerCase() === 'male' || sex.toLowerCase() === 'man') {
    energy = (1.083 * Math.pow(weight, 0.48) * Math.pow(heightInMeters, 0.50) * Math.pow(age, -0.13)) * (1000 / 4.1855);
  } else if (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'woman') {
    energy = (0.963 * Math.pow(weight, 0.48) * Math.pow(heightInMeters, 0.50) * Math.pow(age, -0.13)) * (1000 / 4.1855);
  }

  // Macronutrient calculation
  const carbs = 0.45 * energy; // 45% to 50% carbs, we'll use 45%
  const protein = 0.15 * energy; // 15% protein
  const fats = 0.35 * energy; // 35% to 40% fats, we'll use 35%

  // BMI Calculation
  const bmi = weight / (heightInMeters * heightInMeters);
  let bmiStatus = '';
  if (bmi < 18.5) {
    bmiStatus = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiStatus = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiStatus = 'Overweight';
  } else {
    bmiStatus = 'Obesity';
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Daily Energy Needs</h2>
        <p className="text-lg text-gray-700">
          You need approximately <strong>{Math.round(energy)} kcal</strong> per day.
        </p>
        <p className="text-sm text-gray-500">
          This is roughly equivalent to a large fast food meal (e.g., a cheeseburger, fries, and a soft drink).
        </p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold mb-2">Macronutrient Breakdown</h3>
        <p>Carbohydrates (45%): <strong>{Math.round(carbs)} kcal</strong></p>
        <p>Proteins (15%): <strong>{Math.round(protein)} kcal</strong></p>
        <p>Fats (35%): <strong>{Math.round(fats)} kcal</strong></p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold mb-2">BMI Calculation</h3>
        <p>Your BMI is: <strong>{bmi.toFixed(2)}</strong></p>
        <p>Status: <strong>{bmiStatus}</strong></p>
        <p className="text-sm text-gray-500">{getBMIInfo(bmiStatus)}</p>
      </div>

      <div className="text-center">
        
        <button
          onClick={handleGenerateMeals}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
          <FaUtensils className="mr-2" />
          Generate Meals for the Day
        </button>
        
      </div>
    </div>
  );
};

// Function to provide a description based on BMI status
const getBMIInfo = (status) => {
  switch (status) {
    case 'Underweight':
      return 'You may need to gain some weight. Consult a healthcare provider.';
    case 'Normal weight':
      return 'You are in the healthy weight range. Keep maintaining your current habits!';
    case 'Overweight':
      return 'You may need to lose some weight. Consider healthier eating habits and more physical activity.';
    case 'Obesity':
      return 'You are in the obesity range. It is important to take action to improve your health.';
    default:
      return '';
  }
};

export default EnergyResultPage;
