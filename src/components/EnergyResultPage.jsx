import React, { useState, useEffect, useMemo } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import mealDatabase from './MealDatabase'; // Ensure this imports the database correctly

// Updated ingredient mappings based on the MealDatabase
const ingredientMappings = {
  Acai: ['Acai puree'],
  Acid: ['Acid'],
  Alcohol: ['Alcohol', 'Alcohols', 'beer', 'wine', 'spirits'],
  Almond: ['Almond milk', 'Almonds', 'Almond butter'],
  AlmondMilk: ['Almond Milk', 'Almond Milks'],
  Apple: ['Apple', 'Apples', 'apples'],
  ArborioRice: ['Arborio Rice'],
  Artichokes: ['Artichokes'],
  Asparagus: ['Asparagus'],
  AssortedCheeses: ['Assorted Cheeses'],
  AssortedVegetables: ['Assorted Vegetables'],
  Avocado: ['Avocado', 'avocado'],
  AvocadoOil: ['Avocado Oil', 'Avocado Oils'],
  Bacon: ['Bacon', 'bacon'],
  Bagel: ['Bagel'],
  BakingPowder: ['Baking Powder', 'baking powder', 'Baking powder'],
  BacterialCultures: ['Bacterial cultures', 'Live cultures', 'Active cultures', 'Kefir cultures', 'Mold cultures', 'Penicillium mold'],
  Banana: ['Banana', 'Bananas'],
  BarbecueSauce: ['Barbecue Sauce', 'barbecue sauce', 'BBQ Sauce'],
  Barley: ['Barley', 'Barleys'],
  Basil: ['Basil'],
  Batter: ['Batter', 'Tempura Batter'],
  BayLeaf: ['Bay Leaf', 'Bay Leaves'],
  BeanSprouts: ['Bean Sprouts'],
  Beans: ['Bean', 'Beans', 'black beans', 'kidney beans', 'pinto beans'],
  Beef: ['Beef', 'Ground Beef', 'beefs', 'ground beef'],
  BeefBroth: ['Beef Broth'],
  Beets: ['Beets'],
  BellPeppers: ['Bell Pepper', 'Bell Peppers', 'Bell peppers'],
  Berries: ['Berries'],
  BitterMelon: ['Bitter Melon'],
  BlackBeans: ['Black Beans'],
  BlackPepper: ['Black pepper', 'Black Pepper'],
  Blueberries: ['Blueberries'],
  Bread: ['Bread', 'Whole grain bread'],
  Breadcrumbs: ['Bread Crumbs'],
  Breading: ['Breading'],
  Broccoli: ['Broccoli'],
  Broth: ['Broth'],
  BrusselsSprouts: ['Brussels Sprouts'],
  Buckwheat: ['Buckwheat'],
  Bun: ['Bun'],
  Butter: ['Butter', 'butter'],
  Buttermilk: ['Buttermilk', 'buttermilk'],
  ButternutSquash: ['Butternut Squash'],
  CaesarDressing: ['Caesar Dressing'],
  Cabbage: ['Cabbage'],
  Capers: ['Capers'],
  Carambola: ['Carambola'],
  Carrot: ['Carrot', 'Carrots'],
  Carrots: ['Carrot', 'Carrots'],
  Cauliflower: ['Cauliflower'],
  Celery: ['Celery'],
  Cereal: ['Cereal', 'Cereals'],
  CheddarCheese: ['Cheddar cheese', 'Cheddar Cheese'],
  Cheese: ['Cheese', 'Cheddar Cheese', 'Parmesan Cheese', 'Mozzarella Cheese', 'Feta Cheese', 'Cottage cheese', 'Feta cheese'],
  Cherries: ['Cherries', 'Dried cherries', 'Cherry', 'cherries'],
  Chickpeas: ['Chickpeas'],
  Chicken: ['Chicken', 'Chicken Breast', 'Chicken Wings'],
  Chili: ['Chili', 'Chili flakes', 'Chili Flakes'],
  ChiliPowder: ['Chili Powder', 'Chili Powders'],
  Chocolate: ['Chocolate', 'Dark Chocolate', 'chocolate syrup', 'Dark chocolate'],
  Chia: ['Chia seeds', 'Chia Seeds'],
  Cider: ['Cider'],
  Cilantro: ['Cilantro'],
  Cinnamon: ['Cinnamon'],
  Clams: ['Clams'],
  Cloudberry: ['Cloudberry'],
  Cocoa: ['Cocoa', 'Cocoa Powder', 'red cocoa powder', 'Cocoa powder'],
  Coconut: ['Coconut', 'Coconut Milk'],
  CoconutMilk: ['Coconut Milk'],
  CoconutOil: ['Coconut Oil', 'Coconut Oils'],
  CocktailSauce: ['Cocktail Sauce'],
  coffee: ['Coffee', 'Coffee beans'],
  CoffeeBeans: ['Coffee Beans'],
  Coleslaw: ['Coleslaw'],
  Corn: ['Corn', 'Cornmeal'],
  Cornstarch: ['Cornstarch'],
  Couscous: ['Couscous', 'Couscouses'],
  CrabMeat: ['Crab Meat'],
  Crackers: ['Crackers'],
  Cream: ['Cream'],
  CreamCheese: ['Cream Cheese', 'cream cheese frosting', 'Cream cheese'],
  Croutons: ['Croutons'],
  Cucumber: ['Cucumber', 'Cucumbers'],
  Cumin: ['Cumin'],
  Curry: ['Curry Paste', 'Curry Powder'],
  CustardApple: ['Custard Apple'],
  DriedFruits: ['Dried fruits', 'Mixed fruits'],
  Daikon: ['Daikon'],
  DarkChocolate: ['Dark Chocolate', 'Dark Chocolates', 'Chocolate chips'],
  Dates: ['Dates'],
  DragonFruit: ['Dragon Fruit'],
  Dressings: ['Dressing', 'Dressings', 'salad dressing'],
  Duck: ['Duck'],
  Egg: ['Egg', 'Eggs', 'egg whites', 'Egg Yolks', 'Egg whites'],
  Eggplant: ['Eggplant'],
  Feijoa: ['Feijoa'],
  Fennel: ['Fennel'],
  Fig: ['Fig'],
  Fish: ['Fish', 'Fishes', 'fish', 'fishes', 'salmon', 'tuna', 'Fresh Tuna', 'Raw Fish'],
  Flour: ['Flour', 'flour', 'Whole wheat flour'],
  Fries: ['Fries'],
  Fruits: ['Fruit', 'Fruits', 'apple', 'banana', 'orange', 'grapes', 'strawberries', 'blueberries', 'Frozen berries'],
  Garlic: ['Garlic'],
  Gelatin: ['Gelatin'],
  Ginger: ['Ginger'],
  Gnocchi: ['Gnocchi'],
  GoatsMilk: ['Goat\'s milk', 'Goat\'s Milk'],
  Grapefruit: ['Grapefruit'],
  Grapes: ['Grapes'],
  Granola: ['Granola'],
  Gravy: ['Gravy'],
  GreekYogurt: ['Greek yogurt', 'Greek Yogurt'],
  GreenOnions: ['Green Onions'],
  GrilledVegetables: ['Grilled Vegetables'],
  GroundMeat: ['Ground Meat'],
  Guava: ['Guava'],
  Ham: ['Ham'],
  Herbs: ['Herbs'],
  HoagieRoll: ['Hoagie Roll'],
  Hollandaise: ['Hollandaise sauce', 'Hollandaise Sauce'],
  Honey: ['Honey'],
  HotDogBun: ['Hot Dog Bun'],
  HotSauce: ['Hot Sauce'],
  Hummus: ['Hummus'],
  IceCream: ['Ice Cream'],
  Insect: ['Live insect larvae'],
  Jackfruit: ['Jackfruit'],
  Jalapeños: ['Jalapeños'],
  JerkMarinade: ['Jerk Marinade'],
  Juices: ['Juice', 'Juices', 'orange juice', 'apple juice', 'grape juice'],
  Kale: ['Kale'],
  Kimchi: ['Kimchi'],
  Kiwi: ['Kiwi'],
  Kumquat: ['Kumquat'],
  Lamb: ['Lamb', 'Ground Lamb', 'Lamb Chops'],
  Leeks: ['Leek', 'Leeks'],
  Lemon: ['Lemon', 'Lemon Juice', 'Lemon juice'],
  Lettuce: ['Lettuce', 'Romaine Lettuce'],
  Lentils: ['Lentils', 'Lentil', 'lentils', 'lentil', 'red lentils', 'green lentils'],
  LimeJuice: ['Lime Juice'],
  Lobster: ['Lobster'],
  Lychee: ['Lychee'],
  Macaroni: ['Macaroni'],
  Mango: ['Mango', 'Mango puree'],
  MapleSyrup: ['Maple Syrup', 'Maple Syrups'],
  Maplesyrup: ['Maple syrup'],
  MarinaraSauce: ['Marinara Sauce'],
  MarinatedVegetables: ['Marinated Vegetables'],
  Marshmallows: ['Marshmallows'],
  Mayonnaise: ['Mayonnaise'],
  Matcha: ['Matcha Powder', 'Matcha powder'],
  Melon: ['Melon'],
  Milk: ['Milk', 'Cow\'s milk'],
  Mint: ['Mint'],
  Miso: ['Miso'],
  MixedFruits: ['Mixed Fruits'],
  MixedVegetables: ['Mixed Vegetables'],
  Mixedberries: ['Mixed berries'],
  Mixedfruit: ['Mixed fruit'],
  Mixedfruits: ['Mixed fruits (Apples, Berries, Oranges)'],
  Mozzarella: ['Mozzarella', 'Mozzarella Cheese'],
  Muffin: ['English muffin'],
  Muffins: ['Muffin', 'Muffins'],
  Mulberry: ['Mulberry'],
  Mushrooms: ['Mushrooms'],
  Mussels: ['Mussels'],
  Mustard: ['Mustard', 'Mustard Greens'],
  Noodles: ['Noodles'],
  Nutmeg: ['Nutmeg'],
  Nuts: ['Nuts'],
  Oatmeal: ['Oatmeal'],
  Oats: ['Oats'],
  Oil: ['Oil', 'oils', 'Olive Oil', 'Avocado Oil'],
  Olives: ['Olives'],
  Onions: ['Onion', 'Onions', 'Red Onion', 'yellow onion'],
  Oranges: ['Oranges'],
  Oregano: ['Oregano'],
  Oysters: ['Oysters'],
  Pancakes: ['Pancakes'],
  Papaya: ['Papaya'],
  Paprika: ['Paprika'],
  Parmesan: ['Parmesan', 'Parmesan Cheese'],
  Parsley: ['Parsley'],
  Parsnips: ['Parsnips'],
  PassionFruit: ['Passion Fruit'],
  Pasta: ['Pasta'],
  PastaSauce: ['Pasta Sauce'],
  Pastrami: ['Pastrami'],
  Peaches: ['Peaches'],
  Peanut: ['Peanuts', 'peanuts'],
  PeanutButter: ['Peanut Butter', 'peanut butter'],
  Pear: ['Pears', 'pears'],
  Pecans: ['Pecans'],
  Peppers: ['Peppers'],
  Pepperoni: ['Pepperoni'],
  Pickles: ['Pickles'],
  Pineapple: ['Pineapple'],
  Pita: ['Pita', 'Pita bread'],
  PizzaDough: ['Pizza Dough'],
  Plantain: ['Plantain'],
  Plums: ['Plums'],
  Pomegranate: ['Pomegranate'],
  Popcorn: ['Popcorn'],
  Pork: ['Pork'],
  Prawns: ['Prawns'],
  Pretzels: ['Pretzels'],
  PricklyPear: ['Prickly Pear'],
  Prosciutto: ['Prosciutto'],
  Prunes: ['Prunes'],
  Pudding: ['Pudding'],
  Pumpkin: ['Pumpkin'],
  PumpkinSeeds: ['Pumpkin Seeds'],
  QuailEggs: ['Quail eggs'],
  Quinoa: ['Quinoa'],
  Radicchio: ['Radicchio'],
  Radishes: ['Radishes'],
  Raisins: ['Raisins'],
  Raspberries: ['Raspberries'],
  Rice: ['Rice', 'White Rice', 'brown rice', 'Jasmine rice', 'Basmati rice'],
  RiceNoodles: ['Rice noodles'],
  Ricotta: ['Ricotta', 'Ricotta cheese'],
  Roll: ['Roll'],
  Rosemary: ['Rosemary'],
  RyeBread: ['Rye Bread'],
  Salad: ['Salad', 'Salads'],
  Salt: ['Salt', 'sea salt'],
  Salsa: ['Salsa'],
  Sapodilla: ['Sapodilla'],
  Sausage: ['Sausage', 'Sausages'],
  Scallops: ['Scallops'],
  Seaweed: ['Seaweed'],
  Sesame: ['Sesame Seeds', 'sesame seeds'],
  Shallots: ['Shallots'],
  Shellfish: ['Shellfish'],
  Shrimp: ['Shrimp'],
  Sorrel: ['Sorrel'],
  SoySauce: ['Soy Sauce', 'Soya Sauce'],
  Soybeans: ['Soybeans'],
  Soymilk: ['Soy Milk'],
  Spaghetti: ['Spaghetti'],
  Spinach: ['Spinach'],
  Squid: ['Squid'],
  SquidInk: ['Squid Ink'],
  Starfruit: ['Starfruit'],
  Steak: ['Steak', 'Steaks', 'Beef steak'],
  Strawberries: ['Strawberries'],
  Sugar: ['Sugar', 'brown sugar'],
  SunflowerOil: ['Sunflower oil', 'Sunflower Oil'],
  SweetCorn: ['Sweet Corn'],
  SweetPotato: ['Sweet Potato'],
  SwissChard: ['Swiss Chard'],
  Tahini: ['Tahini'],
  Taro: ['Taro'],
  Tarragon: ['Tarragon'],
  Tea: ['Tea', 'Green Tea'],
  Tofu: ['Tofu'],
  Tomato: ['Tomato', 'Tomatoes'],
  TomatoPaste: ['Tomato Paste'],
  Tortillas: ['Tortillas'],
  Tumeric: ['Turmeric'],
  Tuna: ['Tuna'],
  Turnips: ['Turnips'],
  Vanilla: ['Vanilla'],
  Vegetables: ['Vegetable', 'Vegetables'],
  Vinegar: ['Vinegar'],
  Walnuts: ['Walnuts'],
  Water: ['Water'],
  Watermelon: ['Watermelon'],
  Wheat: ['Wheat'],
  Whey: ['Whey'],
  WhiteFish: ['White Fish'],
  WhiteWine: ['White Wine'],
  Yogurt: ['Yogurt'],
  Zucchini: ['Zucchini']
};


const EnergyResultPage = () => {
  const location = useLocation();
  const { age, height, weight, sex } = location.state || {};
  const navigate = useNavigate();

  const [excludedIngredients, setExcludedIngredients] = useState([]);
  const [includedIngredients, setIncludedIngredients] = useState([]);
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [excludeSearchInput, setExcludeSearchInput] = useState('');
  const [includeSearchInput, setIncludeSearchInput] = useState('');

  useEffect(() => {
    if (!mealDatabase) {
      console.error("mealDatabase is undefined");
      return;
    }

    const allIngredients = new Set();
    Object.values(mealDatabase).forEach(mealArray => {
      mealArray.forEach(mealFunction => {
        if (typeof mealFunction === 'function') {
          const meal = mealFunction();
          if (meal.ingredients && Array.isArray(meal.ingredients)) {
            meal.ingredients.forEach(ingredient => {
              allIngredients.add(ingredient);
            });
          }
        }
      });
    });
    setIngredientOptions([...allIngredients]);
  }, []);

  const getBaseIngredient = (ingredient) => {
    for (const [base, variations] of Object.entries(ingredientMappings)) {
      if (variations.includes(ingredient)) {
        return base;
      }
    }
    return ingredient;
  };

  const getIngredientVariations = (baseIngredient) => {
    return ingredientMappings[baseIngredient] || [];
  };

  const filteredExcludedIngredients = useMemo(() => {
    return ingredientOptions
      .filter(ingredient =>
        ingredient.toLowerCase().includes(excludeSearchInput.toLowerCase())
      )
      .map(getBaseIngredient)
      .filter((base, index, self) => self.indexOf(base) === index)
      .sort();
  }, [excludeSearchInput, ingredientOptions]);

  const filteredIncludedIngredients = useMemo(() => {
    return ingredientOptions
      .filter(ingredient =>
        ingredient.toLowerCase().includes(includeSearchInput.toLowerCase())
      )
      .map(getBaseIngredient)
      .filter((base, index, self) => self.indexOf(base) === index)
      .sort();
  }, [includeSearchInput, ingredientOptions]);

  // Updated include toggle function
  const handleIncludeIngredientToggle = (ingredient) => {
    const baseIngredient = getBaseIngredient(ingredient);
    const variations = getIngredientVariations(baseIngredient);
    
    setIncludedIngredients(prev => {
      if (prev.some(ing => variations.includes(ing))) {
        return prev.filter(ing => !variations.includes(ing));
      } else {
        return [...prev, ...variations];
      }
    });
  };

  // Updated exclude toggle function (same as before)
  const handleExcludeIngredientToggle = (ingredient) => {
    const baseIngredient = getBaseIngredient(ingredient);
    const variations = getIngredientVariations(baseIngredient);
  
    setExcludedIngredients(prev => {
      if (prev.some(ing => variations.includes(ing))) {
        return prev.filter(ing => !variations.includes(ing));
      } else {
        return [...prev, ...variations];
      }
    });
  };

  const handleGenerateMeals = () => {
    if (energy) {
      navigate('/generate-meals', {
        state: {
          energy: Math.round(energy),
          carbs: Math.round(carbs),
          protein: Math.round(protein),
          fats: Math.round(fats),
          excludedIngredients,
          includedIngredients,
        },
      });
    } else {
      alert('Please enter valid height, weight, and age.');
    }
  };

  const bmi = useMemo(() => {
    if (!height || !weight) return null;
    return weight / ((height / 100) ** 2);
  }, [height, weight]);

  const heightInMeters = height / 100;
  const energy = useMemo(() => {
    if (!age || !weight || !heightInMeters || !sex) return null;

    let energyValue;
    if (sex.toLowerCase() === 'male' || sex.toLowerCase() === 'man') {
      energyValue = (1.083 * Math.pow(weight, 0.48) * Math.pow(heightInMeters, 0.50) * Math.pow(age, -0.13)) * (1000 / 4.1855);
    } else if (sex.toLowerCase() === 'female' || sex.toLowerCase() === 'woman') {
      energyValue = (0.963 * Math.pow(weight, 0.48) * Math.pow(heightInMeters, 0.50) * Math.pow(age, -0.13)) * (1000 / 4.1855);
    }

    return energyValue;
  }, [age, heightInMeters, sex, weight]);

  const carbs = useMemo(() => energy ? 0.45 * energy : 0, [energy]);
  const protein = useMemo(() => energy ? 0.15 * energy : 0, [energy]);
  const fats = useMemo(() => energy ? 0.35 * energy : 0, [energy]);

  return (
    <div className="container mx-auto px-6 py-10 bg-white rounded-lg shadow-lg max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-green-700">Your Daily Energy Needs</h2>
        <p className="text-lg text-gray-700 mt-4">
          You need approximately <span className="font-semibold text-green-900 text-3xl">{Math.round(energy)} kcal</span> per day.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Daily energy should be balanced between proteins, fats, and carbs. Spread your meals across breakfast, lunch, and dinner.
        </p>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Macronutrient Breakdown */}
        <div className="bg-green-50 border border-green-300 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-green-700 text-center">Macronutrient Breakdown</h3>
          <div className="mt-4 text-gray-700 text-center space-y-2">
            <p>Glucids (45%): <strong className="text-green-900">{Math.round(carbs)} kcal</strong></p>
            <p>Proteins (15%): <strong className="text-green-900">{Math.round(protein)} kcal</strong></p>
            <p>Lipids (35%): <strong className="text-green-900">{Math.round(fats)} kcal</strong></p>
          </div>
        </div>

        {/* BMI Calculation */}
        <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 text-center">BMI Calculation</h3>
          <p className="mt-4 text-gray-700 text-center">Your BMI is: <strong className="text-blue-900">{bmi?.toFixed(2)}</strong></p>
          <p className="text-sm text-gray-500 text-center mt-2">
            {bmi && getBMIInfo(getBMIStatus(bmi))}
          </p>
        </div>
      </div>
    <div className="container mx-auto px-6 py-10 bg-white rounded-lg shadow-lg max-w-5xl">
      {/* Rest of the component content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Include Ingredients */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Include Ingredients</h3>
          <input
            type="text"
            value={includeSearchInput}
            onChange={(e) => setIncludeSearchInput(e.target.value)}
            placeholder="Search ingredients to include..."
            className="w-full border border-gray-300 p-3 rounded-lg mt-4 focus:ring focus:ring-green-200"
          />
          <div className="h-40 overflow-y-auto mt-4">
            {filteredIncludedIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="cursor-pointer text-gray-600 hover:text-green-500 hover:bg-green-100 p-2 rounded"
                onClick={() => handleIncludeIngredientToggle(ingredient)}
              >
                {ingredient}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-4">
            {includedIngredients.map((ingredient, index) => (
              <div key={index} className="bg-green-200 text-green-800 rounded-full px-4 py-2 mr-2 mb-2 flex items-center shadow-md">
                <span>{ingredient}</span>
                <button
                  className="ml-2"
                  onClick={() => setIncludedIngredients(prev => prev.filter(ing => ing !== ingredient))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-green-600"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Exclude Ingredients */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Exclude Ingredients</h3>
          <input
            type="text"
            value={excludeSearchInput}
            onChange={(e) => setExcludeSearchInput(e.target.value)}
            placeholder="Search ingredients to exclude..."
            className="w-full border border-gray-300 p-3 rounded-lg mt-4 focus:ring focus:ring-red-200"
          />
          <div className="h-40 overflow-y-auto mt-4">
            {filteredExcludedIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="cursor-pointer text-gray-600 hover:text-red-500 hover:bg-red-100 p-2 rounded"
                onClick={() => handleExcludeIngredientToggle(ingredient)}
              >
                {ingredient}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-4">
            {excludedIngredients.map((ingredient, index) => (
              <div key={index} className="bg-red-200 text-red-800 rounded-full px-4 py-2 mr-2 mb-2 flex items-center shadow-md">
                <span>{ingredient}</span>
                <button
                  className="ml-2"
                  onClick={() => setExcludedIngredients(prev => prev.filter(ing => ing !== ingredient))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-red-600"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleGenerateMeals}
          className="bg-green-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-800 focus:ring focus:ring-green-300 shadow-md"
        >
          Generate Meal Plan
        </button>
      </div>
    </div>
    </div>
  );
};

const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obesity';
};

const getBMIInfo = (status) => {
  const info = {
    'Underweight': 'You may need to gain weight for better health.',
    'Normal weight': 'You have a healthy weight for your height.',
    'Overweight': 'Consider weight loss for better health.',
    'Obesity': 'It is recommended to reduce weight for better health.',
  };
  return info[status];
};

export default EnergyResultPage;