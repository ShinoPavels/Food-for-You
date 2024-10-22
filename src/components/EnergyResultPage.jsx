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

const translations = {
  ENG: {
    yourEnergyNeeds: 'Your Daily Energy Needs',
    approximately: 'You need approximately',
    kcalPerDay: 'kcal per day.',
    energyBalanced: 'Daily energy should be balanced between proteins, fats, and carbs. Spread your meals across breakfast, lunch, and dinner.',
    macronutrientBreakdown: 'Macronutrient Breakdown',
    glucids: 'Glucids (45%)',
    proteins: 'Proteins (15%)',
    lipids: 'Lipids (35%)',
    bmiCalculation: 'BMI Calculation',
    bmiIs: 'Your BMI is:',
    includeIngredients: 'Include Ingredients',
    searchInclude: 'Search ingredients to include...',
    excludeIngredients: 'Exclude Ingredients',
    searchExclude: 'Search ingredients to exclude...',
    generateMealPlan: 'Generate Meal Plan',
    Acai: 'Acai puree',
    Acid: 'Acid',
    Alcohol: 'Alcohol',
    Almond: 'Almond milk',
    AlmondMilk: 'Almond Milk',
    Apple: 'Apple',
    ArborioRice: 'Arborio Rice',
    Artichokes: 'Artichokes',
    Asparagus: 'Asparagus',
    AssortedCheeses: 'Assorted Cheeses',
    AssortedVegetables: 'Assorted Vegetables',
    Avocado: 'Avocado',
    AvocadoOil: 'Avocado Oil',
    Bacon: 'Bacon',
    Bagel: 'Bagel',
    BakingPowder: 'Baking Powder',
    BacterialCultures: 'Bacterial cultures',
    Banana: 'Banana',
    BarbecueSauce: 'Barbecue Sauce',
    Barley: 'Barley',
    Basil: 'Basil',
    Batter: 'Batter',
    BayLeaf: 'Bay Leaf',
    BeanSprouts: 'Bean Sprouts',
    Beans: 'Beans',
    Beef: 'Beef',
    BeefBroth: 'Beef Broth',
    Beets: 'Beets',
    BellPeppers: 'Bell Peppers',
    Berries: 'Berries',
    BitterMelon: 'Bitter Melon',
    BlackBeans: 'Black Beans',
    BlackPepper: 'Black pepper',
    Blueberries: 'Blueberries',
    Bread: 'Bread',
    Breadcrumbs: 'Bread Crumbs',
    Breading: 'Breading',
    Broccoli: 'Broccoli',
    Broth: 'Broth',
    BrusselsSprouts: 'Brussels Sprouts',
    Buckwheat: 'Buckwheat',
    Bun: 'Bun',
    Butter: 'Butter',
    Buttermilk: 'Buttermilk',
    ButternutSquash: 'Butternut Squash',
    CaesarDressing: 'Caesar Dressing',
    Cabbage: 'Cabbage',
    Capers: 'Capers',
    Carambola: 'Carambola',
    Carrot: 'Carrot',
    Cauliflower: 'Cauliflower',
    Celery: 'Celery',
    Cereal: 'Cereal',
    CheddarCheese: 'Cheddar cheese',
    Cheese: 'Cheese',
    Cherries: 'Cherries',
    Chickpeas: 'Chickpeas',
    Chicken: 'Chicken',
    Chili: 'Chili',
    ChiliPowder: 'Chili Powder',
    Chocolate: 'Chocolate',
    Chia: 'Chia seeds',
    Cider: 'Cider',
    Cilantro: 'Cilantro',
    Cinnamon: 'Cinnamon',
    Clams: 'Clams',
    Cloudberry: 'Cloudberry',
    Cocoa: 'Cocoa',
    Coconut: 'Coconut',
    CoconutMilk: 'Coconut Milk',
    CoconutOil: 'Coconut Oil',
    CocktailSauce: 'Cocktail Sauce',
    Coffee: 'Coffee',
    Coleslaw: 'Coleslaw',
    Corn: 'Corn',
    Cornstarch: 'Cornstarch',
    Couscous: 'Couscous',
    CrabMeat: 'Crab Meat',
    Crackers: 'Crackers',
    Cream: 'Cream',
    CreamCheese: 'Cream Cheese',
    Croutons: 'Croutons',
    Cucumber: 'Cucumber',
    Cumin: 'Cumin',
    Curry: 'Curry',
    CustardApple: 'Custard Apple',
    DriedFruits: 'Dried fruits',
    Daikon: 'Daikon',
    DarkChocolate: 'Dark Chocolate',
    Dates: 'Dates',
    DragonFruit: 'Dragon Fruit',
    Dressings: 'Dressings',
    Duck: 'Duck',
    Egg: 'Egg',
    Eggplant: 'Eggplant',
    Feijoa: 'Feijoa',
    Fennel: 'Fennel',
    Fig: 'Fig',
    Fish: 'Fish',
    Flour: 'Flour',
    Fries: 'Fries',
    Fruits: 'Fruit',
    Garlic: 'Garlic',
    Gelatin: 'Gelatin',
    Ginger: 'Ginger',
    Gnocchi: 'Gnocchi',
    GoatsMilk: 'Goat\'s milk',
    Grapefruit: 'Grapefruit',
    Grapes: 'Grapes',
    Granola: 'Granola',
    Gravy: 'Gravy',
    GreekYogurt: 'Greek yogurt',
    GreenOnions: 'Green Onions',
    GrilledVegetables: 'Grilled Vegetables',
    GroundMeat: 'Ground Meat',
    Guava: 'Guava',
    Ham: 'Ham',
    Herbs: 'Herbs',
    HoagieRoll: 'Hoagie Roll',
    Hollandaise: 'Hollandaise sauce',
    Honey: 'Honey',
    HotDogBun: 'Hot Dog Bun',
    HotSauce: 'Hot Sauce',
    Hummus: 'Hummus',
    IceCream: 'Ice Cream',
    Insect: 'Live insect larvae',
    Jackfruit: 'Jackfruit',
    Jalapeños: 'Jalapeños',
    JerkMarinade: 'Jerk Marinade',
    Juices: 'Juice',
    Kale: 'Kale',
    Kimchi: 'Kimchi',
    Kiwi: 'Kiwi',
    Kumquat: 'Kumquat',
    Lamb: 'Lamb',
    Leeks: 'Leek',
    Lemon: 'Lemon',
    Lettuce: 'Lettuce',
    Lentils: 'Lentils',
    LimeJuice: 'Lime Juice',
    Lobster: 'Lobster',
    Lychee: 'Lychee',
    Macaroni: 'Macaroni',
    Mango: 'Mango',
    MapleSyrup: 'Maple Syrup',
    Maplesyrup: 'Maple syrup',
    MarinaraSauce: 'Marinara Sauce',
    MarinatedVegetables: 'Marinated Vegetables',
    Marshmallows: 'Marshmallows',
    Mayonnaise: 'Mayonnaise',
    Matcha: 'Matcha Powder',
    Melon: 'Melon',
    Milk: 'Milk',
    Mint: 'Mint',
    Miso: 'Miso',
    MixedFruits: 'Mixed Fruits',
    MixedVegetables: 'Mixed Vegetables',
    Mixedberries: 'Mixed berries',
    Mixedfruit: 'Mixed fruit',
    Mixedfruits: 'Mixed fruits (Apples, Berries, Oranges)',
    Mozzarella: 'Mozzarella',
    Muffin: 'English muffin',
    Muffins: 'Muffin',
    Mulberry: 'Mulberry',
    Mushrooms: 'Mushrooms',
    Mussels: 'Mussels',
    Mustard: 'Mustard',
    Noodles: 'Noodles',
    Nutmeg: 'Nutmeg',
    Nuts: 'Nuts',
    Oatmeal: 'Oatmeal',
    Oats: 'Oats',
    Oil: 'Oil',
    Olives: 'Olives',
    Onions: 'Onion',
    Oranges: 'Oranges',
    Oregano: 'Oregano',
    Oysters: 'Oysters',
    Pancakes: 'Pancakes',
    Papaya: 'Papaya',
    Paprika: 'Paprika',
    Parmesan: 'Parmesan',
    Parsley: 'Parsley',
    Parsnips: 'Parsnips',
    PassionFruit: 'Passion Fruit',
    Pasta: 'Pasta',
    PastaSauce: 'Pasta Sauce',
    Pastrami: 'Pastrami',
    Peaches: 'Peaches',
    Peanut: 'Peanuts',
    PeanutButter: 'Peanut Butter',
    Pear: 'Pears',
    Pecans: 'Pecans',
    Peppers: 'Peppers',
    Pepperoni: 'Pepperoni',
    Pickles: 'Pickles',
    Pineapple: 'Pineapple',
    Pita: 'Pita',
    PizzaDough: 'Pizza Dough',
    Plantain: 'Plantain',
    Plums: 'Plums',
    Pomegranate: 'Pomegranate',
    Popcorn: 'Popcorn',
    Pork: 'Pork',
    Prawns: 'Prawns',
    Pretzels: 'Pretzels',
    PricklyPear: 'Prickly Pear',
    Prosciutto: 'Prosciutto',
    Prunes: 'Prunes',
    Pudding: 'Pudding',
    Pumpkin: 'Pumpkin',
    PumpkinSeeds: 'Pumpkin Seeds',
    QuailEggs: 'Quail eggs',
    Quinoa: 'Quinoa',
    Radicchio: 'Radicchio',
    Radishes: 'Radishes',
    Raisins: 'Raisins',
    Raspberries: 'Raspberries',
    Rice: 'Rice',
    RiceNoodles: 'Rice noodles',
    Ricotta: 'Ricotta',
    Roll: 'Roll',
    Rosemary: 'Rosemary',
    RyeBread: 'Rye Bread',
    Salad: 'Salad',
    Salt: 'Salt',
    Salsa: 'Salsa',
    Sapodilla: 'Sapodilla',
    Sausage: 'Sausage',
    Scallops: 'Scallops',
    Seaweed: 'Seaweed',
    Sesame: 'Sesame Seeds',
    Shallots: 'Shallots',
    Shellfish: 'Shellfish',
    Shrimp: 'Shrimp',
    Sorrel: 'Sorrel',
    SoySauce: 'Soy Sauce',
    Soybeans: 'Soybeans',
    Soymilk: 'Soy Milk',
    Spaghetti: 'Spaghetti',
    Spinach: 'Spinach',
    Squid: 'Squid',
    SquidInk: 'Squid Ink',
    Starfruit: 'Starfruit',
    Steak: 'Steak',
    Strawberries: 'Strawberries',
    Sugar: 'Sugar',
    SunflowerOil: 'Sunflower oil',
    SweetCorn: 'Sweet Corn',
    SweetPotato: 'Sweet Potato',
    SwissChard: 'Swiss Chard',
    Tahini: 'Tahini',
    Taro: 'Taro',
    Tarragon: 'Tarragon',
    Tea: 'Tea',
    Tofu: 'Tofu',
    Tomato: 'Tomato',
    TomatoPaste: 'Tomato Paste',
    Tortillas: 'Tortillas',
    Tumeric: 'Turmeric',
    Tuna: 'Tuna',
    Turnips: 'Turnips',
    Vanilla: 'Vanilla',
    Vegetables: 'Vegetables',
    Vinegar: 'Vinegar',
    Walnuts: 'Walnuts',
    Water: 'Water',
    Watermelon: 'Watermelon',
    Wheat: 'Wheat',
    Whey: 'Whey',
    WhiteFish: 'White Fish',
    WhiteWine: 'White Wine',
    Yogurt: 'Yogurt',
    Zucchini: 'Zucchini',
    bmiUnderweight: 'You may need to gain weight for better health.',
    bmiNormalWeight: 'You have a healthy weight for your height.',
    bmiOverweight: 'Consider weight loss for better health.',
    bmiObesity: 'It is recommended to reduce weight for better health.'
  },
  FR: {
    yourEnergyNeeds: 'Vos besoins énergétiques quotidiens',
    approximately: 'Vous avez besoin d\'environ',
    kcalPerDay: 'kcal par jour.',
    energyBalanced: 'L\'énergie quotidienne doit être équilibrée entre protéines, lipides et glucides. Répartissez vos repas entre petit-déjeuner, déjeuner et dîner.',
    macronutrientBreakdown: 'Répartition des macronutriments',
    glucids: 'Glucides (45%)',
    proteins: 'Protéines (15%)',
    lipids: 'Lipides (35%)',
    bmiCalculation: 'Calcul de l\'IMC',
    bmiIs: 'Votre IMC est :',
    includeIngredients: 'Ingrédients à inclure',
    searchInclude: 'Rechercher des ingrédients à inclure...',
    excludeIngredients: 'Ingrédients à exclure',
    searchExclude: 'Rechercher des ingrédients à exclure...',
    generateMealPlan: 'Générer un Menu',
    Acai: 'Purée d\'acai',
    Acid: 'Acide',
    Alcohol: 'Alcool',
    Almond: 'Lait d\'amande',
    AlmondMilk: 'Lait d\'amande',
    Apple: 'Pomme',
    ArborioRice: 'Riz Arborio',
    Artichokes: 'Artichauts',
    Asparagus: 'Asperges',
    AssortedCheeses: 'Fromages assortis',
    AssortedVegetables: 'Légumes assortis',
    Avocado: 'Avocat',
    AvocadoOil: 'Huile d\'avocat',
    Bacon: 'Bacon',
    Bagel: 'Bagel',
    BakingPowder: 'Poudre à lever',
    BacterialCultures: 'Cultures bactériennes',
    Banana: 'Banane',
    BarbecueSauce: 'Sauce barbecue',
    Barley: 'Orge',
    Basil: 'Basilic',
    Batter: 'Pâte',
    BayLeaf: 'Feuille de laurier',
    BeanSprouts: 'Pousses de haricot',
    Beans: 'Haricots',
    Beef: 'Boeuf',
    BeefBroth: 'Bouillon de boeuf',
    Beets: 'Betteraves',
    BellPeppers: 'Poivrons',
    Berries: 'Baies',
    BitterMelon: 'Melon amer',
    BlackBeans: 'Haricots noirs',
    BlackPepper: 'Poivre noir',
    Blueberries: 'Myrtilles',
    Bread: 'Pain',
    Breadcrumbs: 'Chapelure',
    Breading: 'Enrobage',
    Broccoli: 'Brocoli',
    Broth: 'Bouillon',
    BrusselsSprouts: 'Choux de Bruxelles',
    Buckwheat: 'Sarrasin',
    Bun: 'Petit pain',
    Butter: 'Beurre',
    Buttermilk: 'Lait caillé',
    ButternutSquash: 'Courge butternut',
    CaesarDressing: 'Vinaigrette César',
    Cabbage: 'Chou',
    Capers: 'Câpres',
    Carambola: 'Carambole',
    Carrot: 'Carotte',
    Cauliflower: 'Chou-fleur',
    Celery: 'Céleri',
    Cereal: 'Céréales',
    CheddarCheese: 'Fromage cheddar',
    Cheese: 'Fromage',
    Cherries: 'Cerises',
    Chickpeas: 'Pois chiches',
    Chicken: 'Poulet',
    Chili: 'Piment',
    ChiliPowder: 'Poudre de piment',
    Chocolate: 'Chocolat',
    Chia: 'Graines de chia',
    Cider: 'Cidre',
    Cilantro: 'Coriandre',
    Cinnamon: 'Cannelle',
    Clams: 'Palourdes',
    Cloudberry: 'Mûre des marais',
    Cocoa: 'Cacao',
    Coconut: 'Noix de coco',
    CoconutMilk: 'Lait de coco',
    CoconutOil: 'Huile de coco',
    CocktailSauce: 'Sauce cocktail',
    Coffee: 'Café',
    Coleslaw: 'Salade de chou',
    Corn: 'Maïs',
    Cornstarch: 'Fécule de maïs',
    Couscous: 'Couscous',
    CrabMeat: 'Viande de crabe',
    Crackers: 'Craquelins',
    Cream: 'Crème',
    CreamCheese: 'Fromage à la crème',
    Croutons: 'Croûtons',
    Cucumber: 'Concombre',
    Cumin: 'Cumin',
    Curry: 'Curry',
    CustardApple: 'Pomme-custard',
    DriedFruits: 'Fruits secs',
    Daikon: 'Daikon',
    DarkChocolate: 'Chocolat noir',
    Dates: 'Dattes',
    DragonFruit: 'Fruit du dragon',
    Dressings: 'Vinaigrettes',
    Duck: 'Canard',
    Egg: 'Œuf',
    Eggplant: 'Aubergine',
    Feijoa: 'Feijoa',
    Fennel: 'Fenouil',
    Fig: 'Figue',
    Fish: 'Poisson',
    Flour: 'Farine',
    Fries: 'Frites',
    Fruits: 'Fruits',
    Garlic: 'Ail',
    Gelatin: 'Gélatine',
    Ginger: 'Gingembre',
    Gnocchi: 'Gnocchi',
    GoatsMilk: 'Lait de chèvre',
    Grapefruit: 'Pamplemousse',
    Grapes: 'Raisins',
    Granola: 'Granola',
    Gravy: 'Sauce',
    GreekYogurt: 'Yaourt grec',
    GreenOnions: 'Oignons verts',
    GrilledVegetables: 'Légumes grillés',
    GroundMeat: 'Viande hachée',
    Guava: 'Goyave',
    Ham: 'Jambon',
    Herbs: 'Herbes',
    HoagieRoll: 'Pain hoagie',
    Hollandaise: 'Sauce hollandaise',
    Honey: 'Miel',
    HotDogBun: 'Pain à hot-dog',
    HotSauce: 'Sauce piquante',
    Hummus: 'Houmous',
    IceCream: 'Crème glacée',
    Insect: 'Larves d\'insectes vivantes',
    Jackfruit: 'Jacquier',
    Jalapeños: 'Jalapeños',
    JerkMarinade: 'Marinade jerk',
    Juices: 'Jus',
    Kale: 'Chou frisé',
    Kimchi: 'Kimchi',
    Kiwi: 'Kiwi',
    Kumquat: 'Kumquat',
    Lamb: 'Agneau',
    Leeks: 'Poireaux',
    Lemon: 'Citron',
    Lettuce: 'Laitue',
    Lentils: 'Lentilles',
    LimeJuice: 'Jus de citron vert',
    Lobster: 'Homard',
    Lychee: 'Litchi',
    Macaroni: 'Macaroni',
    Mango: 'Mangue',
    MapleSyrup: 'Sirop d\'érable',
    Maplesyrup: 'Sirop d\'érable',
    MarinaraSauce: 'Sauce marinara',
    MarinatedVegetables: 'Légumes marinés',
    Marshmallows: 'Guimauves',
    Mayonnaise: 'Mayonnaise',
    Matcha: 'Poudre de matcha',
    Melon: 'Melon',
    Milk: 'Lait',
    Mint: 'Menthe',
    Miso: 'Miso',
    MixedFruits: 'Fruits mélangés',
    MixedVegetables: 'Légumes mélangés',
    Mixedberries: 'Baies mélangées',
    Mixedfruit: 'Fruits mélangés',
    Mixedfruits: 'Fruits mélangés (pommes, baies, oranges)',
    Mozzarella: 'Mozzarella',
    Muffin: 'Muffin anglais',
    Muffins: 'Muffin',
    Mulberry: 'Mûre',
    Mushrooms: 'Champignons',
    Mussels: 'Moules',
    Mustard: 'Moutarde',
    Noodles: 'Nouilles',
    Nutmeg: 'Muscade',
    Nuts: 'Noix',
    Oatmeal: 'Flocons d\'avoine',
    Oats: 'Avoine',
    Oil: 'Huile',
    Olives: 'Olives',
    Onions: 'Oignon',
    Oranges: 'Oranges',
    Oregano: 'Origan',
    Oysters: 'Huîtres',
    Pancakes: 'Crêpes',
    Papaya: 'Papaye',
    Paprika: 'Paprika',
    Parmesan: 'Parmesan',
    Parsley: 'Persil',
    Parsnips: 'Panais',
    PassionFruit: 'Fruit de la passion',
    Pasta: 'Pâtes',
    PastaSauce: 'Sauce pour pâtes',
    Pastrami: 'Pastrami',
    Peaches: 'Pêches',
    Peanut: 'Cacahuète',
    PeanutButter: 'Beurre de cacahuète',
    Pear: 'Poire',
    Pecans: 'Pécan',
    Peppers: 'Poivrons',
    Pepperoni: 'Pepperoni',
    Pickles: 'Cornichons',
    Pineapple: 'Ananas',
    Pita: 'Pita',
    PizzaDough: 'Pâte à pizza',
    Plantain: 'Plante banane',
    Plums: 'Prunes',
    Pomegranate: 'Grenade',
    Popcorn: 'Pop-corn',
    Pork: 'Porc',
    Prawns: 'Crevettes',
    Pretzels: 'Bretzels',
    PricklyPear: 'Poire épineuse',
    Prosciutto: 'Prosciutto',
    Prunes: 'Pruneaux',
    Pudding: 'Pouding',
    Pumpkin: 'Citrouille',
    PumpkinSeeds: 'Graines de citrouille',
    QuailEggs: 'Œufs de caille',
    Quinoa: 'Quinoa',
    Radicchio: 'Radicchio',
    Radishes: 'Radis',
    Raisins: 'Raisins',
    Raspberries: 'Framboises',
    Rice: 'Riz',
    RiceNoodles: 'Nouilles de riz',
    Ricotta: 'Ricotta',
    Roll: 'Roulé',
    Rosemary: 'Romarin',
    RyeBread: 'Pain de seigle',
    Salad: 'Salade',
    Salt: 'Sel',
    Salsa: 'Salsa',
    Sapodilla: 'Sapodille',
    Sausage: 'Saucisse',
    Scallops: 'Saint-Jacques',
    Seaweed: 'Algues',
    Sesame: 'Graines de sésame',
    Shallots: 'Échalotes',
    Shellfish: 'Fruits de mer',
    Shrimp: 'Crevettes',
    Sorrel: 'Rorippa',
    SoySauce: 'Sauce soja',
    Soybeans: 'Fèves de soja',
    Soymilk: 'Lait de soja',
    Spaghetti: 'Spaghetti',
    Spinach: 'Épinards',
    Squid: 'Calmar',
    SquidInk: 'Encre de seiche',
    Starfruit: 'Carambole',
    Steak: 'Steak',
    Strawberries: 'Fraises',
    Sugar: 'Sucre',
    SunflowerOil: 'Huile de tournesol',
    SweetCorn: 'Maïs doux',
    SweetPotato: 'Patate douce',
    SwissChard: 'Bette',
    Tahini: 'Tahini',
    Taro: 'Taro',
    Tarragon: 'Estragon',
    Tea: 'Thé',
    Tofu: 'Tofu',
    Tomato: 'Tomate',
    TomatoPaste: 'Pâte de tomate',
    Tortillas: 'Tortillas',
    Tumeric: 'Curcuma',
    Tuna: 'Thon',
    Turnips: 'Navets',
    Vanilla: 'Vanille',
    Vegetables: 'Légumes',
    Vinegar: 'Vinaigre',
    Walnuts: 'Noix',
    Water: 'Eau',
    Watermelon: 'Pastèque',
    Wheat: 'Blé',
    Whey: 'Petits suisses',
    WhiteFish: 'Poisson blanc',
    WhiteWine: 'Vin blanc',
    Yogurt: 'Yaourt',
    Zucchini: 'Courgette',
    bmiUnderweight: 'Vous pourriez avoir besoin de prendre du poids pour une meilleure santé.',
    bmiNormalWeight: 'Vous avez un poids sain pour votre taille.',
    bmiOverweight: 'Envisagez de perdre du poids pour une meilleure santé.',
    bmiObesity: 'Il est recommandé de réduire le poids pour une meilleure santé.'
  }
};

const EnergyResultPage = ({ language }) => {
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

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obesity';
  };
  
  const getBMIInfo = (status) => {
    const info = {
      'Underweight': translations[language].bmiUnderweight,
      'Normal weight': translations[language].bmiNormalWeight,
      'Overweight': translations[language].bmiOverweight,
      'Obesity': translations[language].bmiObesity,
    };
    return info[status];
  };

  return (
    <div className="container mx-auto px-6 py-10 bg-white rounded-lg shadow-lg max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-green-700">{translations[language].yourEnergyNeeds}</h2>
        <p className="text-lg text-gray-700 mt-4">
        {translations[language].approximately} <span className="font-semibold text-green-900 text-3xl">{Math.round(energy)} kcal</span> {translations[language].kcalPerDay}
        </p>
        <p className="text-sm text-gray-600 mt-2">
        {translations[language].energyBalanced}
        </p>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Macronutrient Breakdown */}
        <div className="bg-green-50 border border-green-300 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-green-700 text-center">{translations[language].macronutrientBreakdown}</h3>
          <div className="mt-4 text-gray-700 text-center space-y-2">
          <p>{translations[language].glucids}: <strong className="text-green-900">{Math.round(carbs)} kcal</strong></p>
            <p>{translations[language].proteins}: <strong className="text-green-900">{Math.round(protein)} kcal</strong></p>
            <p>{translations[language].lipids}: <strong className="text-green-900">{Math.round(fats)} kcal</strong></p>
          </div>
        </div>

        {/* BMI Calculation */}
        <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 text-center">{translations[language].bmiCalculation}</h3>
          <p className="mt-4 text-gray-700 text-center">{translations[language].bmiIs} <strong className="text-blue-900">{bmi?.toFixed(2)}</strong></p>
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
          <h3 className="text-xl font-semibold text-gray-800 text-center">{translations[language].includeIngredients}</h3>
          <input
            type="text"
            value={includeSearchInput}
            onChange={(e) => setIncludeSearchInput(e.target.value)}
            placeholder={translations[language].searchInclude}
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
          <h3 className="text-xl font-semibold text-gray-800 text-center">{translations[language].excludeIngredients}</h3>
          <input
            type="text"
            value={excludeSearchInput}
            onChange={(e) => setExcludeSearchInput(e.target.value)}
            placeholder={translations[language].searchExclude}
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
          {translations[language].generateMealPlan}
        </button>
      </div>
    </div>
    </div>
  );
};

export default EnergyResultPage;