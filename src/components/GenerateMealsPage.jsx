import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import mealDatabase from './MealDatabase'; // Import the meal database
import { FaCoffee, FaLeaf, FaUtensils } from 'react-icons/fa'; // Importing icons for better visuals

const GenerateMealsPage = () => {
  const location = useLocation();
  const { energy, protein, fats, carbs } = location.state; // Data passed from EnergyResultPage

  const [mealPlan, setMealPlan] = useState(null);
  const [flavorText, setFlavorText] = useState('');

  useEffect(() => {
    generateMealPlan();
  }, [energy, protein, fats, carbs]);

  const generateMealPlan = () => {
    // Select meals for breakfast, lunch, and dinner
    const breakfast = generateMealForMealType('breakfast', energy * 0.25); // 25% of total energy for breakfast
    const lunch = generateMealForMealType('lunch', energy * 0.35); // 35% for lunch
    const dinner = generateMealForMealType('dinner', energy * 0.4); // 40% for dinner

    // Combine all meals
    setMealPlan({
      breakfast,
      lunch,
      dinner,
    });

    // Generate flavor text based on selected meals
    setFlavorText(generateFlavorText([...breakfast, ...lunch, ...dinner]));
  };

  const generateMealForMealType = (mealType, targetEnergy) => {
    const meal = [];
    let totalEnergy = 0;

    const pickRandomDish = (category) => {
      return mealDatabase[category][Math.floor(Math.random() * mealDatabase[category].length)]();
    };

    if (mealType === 'breakfast') {
      const breakfastDish = pickRandomDish('breakfast');
      const beverage = pickRandomDish('beverages');
      const fruit = pickRandomDish('Fruits');

      meal.push(breakfastDish, beverage, fruit);
      totalEnergy = breakfastDish.totalEnergy + beverage.totalEnergy + fruit.totalEnergy;
    } else {
      const starter = pickRandomDish('starters');
      const mainDish = pickRandomDish('mainDishes');
      const fruit = pickRandomDish('Fruits');
      const dessertOrCheese = Math.random() < 0.5 ? pickRandomDish('desserts') : pickRandomDish('cheeses');

      meal.push(starter, mainDish, fruit, dessertOrCheese);
      totalEnergy = starter.totalEnergy + mainDish.totalEnergy + fruit.totalEnergy + dessertOrCheese.totalEnergy;
    }

    // Adjust portion sizes to meet the energy goal
    adjustMealPortions(meal, targetEnergy, totalEnergy);

    return meal;
  };

  const adjustMealPortions = (meal, targetEnergy, totalEnergy) => {
    const adjustmentFactor = targetEnergy / totalEnergy;

    meal.forEach(dish => {
      dish.quantity *= adjustmentFactor;
      dish.totalEnergy = (dish.energyPer100g * dish.quantity) / 100;
    });
  };

  // Re-generate meal plan
  const handleRegenerateMeals = () => {
    generateMealPlan();
  };

  const generateFlavorText = (meals) => {
    const vitamins = new Set();
    const minerals = new Set();
    const proteinTypes = new Set();
    const lipidTypes = new Set();
    const glucidTypes = new Set();

    meals.forEach(meal => {
      meal.vitamins.forEach(vitamin => vitamins.add(vitamin)); // Use add instead of push
      meal.minerals.forEach(mineral => minerals.add(mineral)); // Use add instead of push
      proteinTypes.add(meal.proteinType);
      lipidTypes.add(meal.lipidType);
      glucidTypes.add(meal.glucidType);
    });

    return `Your meal plan is rich in vitamins such as ${[...vitamins].join(', ')}, and minerals including ${[...minerals].join(', ')}. 
    The meals provide a balanced intake of carbohydrates, proteins, and fats, primarily composed of ${[...glucidTypes].join(', ')}, 
    ${[...lipidTypes].join(', ')}, and ${[...proteinTypes].join(', ')}. Enjoy a nutritious day!`;
  };

  // Utility function to format dish names
  const formatDishName = (name) => {
    if (!name) return "Fruit"; // Handle undefined names

    // Special case for "Fruit"
    if (name === "Fruit") return "Fruit";

    return name
      .replace(/([A-Z])/g, ' $1') // Add space before each capital letter
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
      .trim(); // Trim any leading or trailing spaces
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-green-100 to-blue-200 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Background image can be added here if desired */}
        <img src="https://source.unsplash.com/1600x900/?food" alt="" className="w-full h-full object-cover" /> {/* Alt attribute fixed */}
      </div>
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800 shadow-md p-2 rounded bg-white bg-opacity-90 border border-gray-300 relative z-10">
        Menu for You
      </h1>

      {mealPlan ? (
        <>
          <MealSection title="Breakfast" meals={mealPlan.breakfast} formatDishName={formatDishName} icon={<FaCoffee className="text-green-600" />} />
          <MealSection title="Lunch" meals={mealPlan.lunch} formatDishName={formatDishName} icon={<FaUtensils className="text-green-600" />} />
          <MealSection title="Dinner" meals={mealPlan.dinner} formatDishName={formatDishName} icon={<FaLeaf className="text-green-600" />} />

          <p className="mt-6 text-center text-gray-800 italic text-lg bg-gray-100 p-4 rounded-lg shadow-sm">{flavorText}</p>

          <div className="text-center mt-8">
            <button
              onClick={handleRegenerateMeals}
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded transition duration-300 shadow-lg transform hover:scale-105"
            >
              Re-Generate Meals
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-700">Generating your meal plan...</p>
      )}
    </div>
  );
};

// Reusable component for displaying a meal section
const MealSection = ({ title, meals, formatDishName, icon }) => (
  <div className="mb-8 bg-white rounded-lg shadow-md p-4 border border-gray-200">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-4xl font-semibold ml-2 text-green-700">{title}</h2>
    </div>
    <ul className="list-disc list-inside space-y-2">
      {meals.map((meal, index) => (
        <li key={index} className="flex flex-col md:flex-row items-center p-2 rounded hover:bg-gray-100 transition duration-200">
          <span className="font-semibold text-lg text-green-600">{formatDishName(meal.name)}</span>: 
          <span className="ml-0 md:ml-2 text-gray-700">{meal.ingredients.join(', ')}</span>
          <span className="ml-0 md:ml-2 text-gray-500">({Math.round(meal.quantity)}g) - {Math.round(meal.totalEnergy)} kcal</span>
        </li>
      ))}
    </ul>
  </div>
);

export default GenerateMealsPage;
