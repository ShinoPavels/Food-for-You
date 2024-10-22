import React, { useState, useEffect, useMemo } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import mealDatabase from './MealDatabase'; // Ensure this imports the database correctly

// Updated ingredient mappings based on the MealDatabase
const ingredientMappings = {
  Acai: ['Acai puree', 'Purée d\'acai'],
  Acid: ['Acid', 'Acide'],
  Alcohol: ['Alcohol', 'Alcohols', 'beer', 'wine', 'spirits', 'Alcool', 'Alcools', 'bière', 'vin', 'spiritueux'],
  Almond: ['almonds', 'Almonds', 'Almond butter', 'amandes', 'Amandes', 'beurre d\'amande'],
  AlmondMilk: ['Almond milk', 'Almond Milk', 'Almond Milks', 'lait d\'amande', 'Lait d\'amande', 'Laits d\'amande'],
  Apple: ['Apple', 'Apples', 'apples', 'Pomme', 'Pommes'],
  ArborioRice: ['Arborio Rice', 'Riz Arborio'],
  Artichokes: ['Artichokes', 'Artichauts'],
  Asparagus: ['Asparagus', 'Asperges'],
  AssortedCheeses: ['Assorted Cheeses', 'Fromages assortis'],
  AssortedVegetables: ['Assorted Vegetables', 'Légumes assortis'],
  Avocado: ['Avocado', 'avocado', 'Avocat', 'avocat'],
  AvocadoOil: ['Avocado Oil', 'Avocado Oils', 'Huile d\'avocat', 'Huiles d\'avocat'],
  Bacon: ['Bacon', 'bacon', 'Bacon', 'bacon'],
  Bagel: ['Bagel', 'Bagel'],
  BakingPowder: ['Baking Powder', 'baking powder', 'Baking powder', 'Poudre à lever', 'poudre à lever'],
  BacterialCultures: ['Bacterial cultures', 'Live cultures', 'Active cultures', 'Kefir cultures', 'Mold cultures', 'Penicillium mold', 'Cultures bactériennes', 'Cultures vivantes', 'Cultures actives', 'Cultures de kéfir', 'Cultures de moisissure', 'Moisissure de Pénicillium'],
  Banana: ['Banana', 'Bananas', 'Banane', 'Bananes'],
  BarbecueSauce: ['Barbecue Sauce', 'barbecue sauce', 'BBQ Sauce', 'Sauce barbecue', 'sauce barbecue', 'Sauce BBQ'],
  Barley: ['Barley', 'Barleys', 'Orge', 'Orgé'],
  Basil: ['Basil', 'Basilic'],
  Batter: ['Batter', 'Tempura Batter', 'Pâte', 'Pâte à tempura'],
  BayLeaf: ['Bay Leaf', 'Bay Leaves', 'Feuille de laurier', 'Feuilles de laurier'],
  BeanSprouts: ['Bean Sprouts', 'Germes de soja'],
  Beans: ['Bean', 'Beans', 'black beans', 'kidney beans', 'pinto beans', 'Haricot', 'Haricots', 'haricots noirs', 'haricots rouges', 'haricots pinto'],
  Beef: ['Beef', 'Ground Beef', 'beefs', 'ground beef', 'Boeuf', 'Viande de boeuf', 'boeufs', 'viande hachée'],
  BeefBroth: ['Beef Broth', 'Bouillon de boeuf'],
  Beets: ['Beets', 'Betteraves'],
  BellPeppers: ['Bell Pepper', 'Bell Peppers', 'Bell peppers', 'Poivron', 'Poivrons'],
  Berries: ['Berries', 'Baies'],
  BitterMelon: ['Bitter Melon', 'Melon amer'],
  BlackBeans: ['Black Beans', 'Haricots noirs'],
  BlackPepper: ['Black pepper', 'Black Pepper', 'Poivre noir'],
  Blueberries: ['Blueberries', 'Myrtilles'],
  Bread: ['Bread', 'Whole grain bread', 'Pain', 'Pain complet'],
  Breadcrumbs: ['Bread Crumbs', 'Chapelure'],
  Breading: ['Breading', 'Panure'],
  Broccoli: ['Broccoli', 'Brocoli'],
  Broth: ['Broth', 'Bouillon'],
  BrusselsSprouts: ['Brussels Sprouts', 'Choux de Bruxelles'],
  Buckwheat: ['Buckwheat', 'Sarrasin'],
  Bun: ['Bun', 'Petit pain'],
  Butter: ['Butter', 'butter', 'Beurre', 'beurre'],
  Buttermilk: ['Buttermilk', 'buttermilk', 'Lait ribot', 'lait ribot'],
  ButternutSquash: ['Butternut Squash', 'Courge butternut'],
  CaesarDressing: ['Caesar Dressing', 'Vinaigrette César'],
  Cabbage: ['Cabbage', 'Chou'],
  Capers: ['Capers', 'Câpres'],
  Carambola: ['Carambola', 'Carambole'],
  Carrot: ['Carrot', 'Carrots', 'Carotte', 'Carottes'],
  Cauliflower: ['Cauliflower', 'Chou-fleur'],
  Celery: ['Celery', 'Céleri'],
  Cereal: ['Cereal', 'Cereals', 'Céréale', 'Céréales'],
  CheddarCheese: ['Cheddar cheese', 'Cheddar Cheese', 'Fromage cheddar', 'Fromage Cheddar'],
  Cheese: ['Cheese', 'Cheddar Cheese', 'Parmesan Cheese', 'Mozzarella Cheese', 'Feta Cheese', 'Cottage cheese', 'Feta cheese', 'Fromage', 'Fromage cheddar', 'Fromage parmesan', 'Fromage mozzarella', 'Fromage feta', 'Fromage cottage'],
  Cherries: ['Cherries', 'Dried cherries', 'Cherry', 'cherries', 'Cerises', 'Cerises séchées', 'Cerise', 'cerises'],
  Chickpeas: ['Chickpeas', 'Pois chiches'],
  Chicken: ['Chicken', 'Chicken Breast', 'Chicken Wings', 'Poulet', 'Poitrine de poulet', 'Ailes de poulet'],
  Chili: ['Chili', 'Chili flakes', 'Chili Flakes', 'Chili', 'Flocons de piment', 'Flocons de chili'],
  ChiliPowder: ['Chili Powder', 'Chili Powders', 'Poudre de chili', 'Poudres de chili'],
  Chocolate: ['Chocolate', 'Dark Chocolate', 'chocolate syrup', 'Dark chocolate', 'Chocolat', 'Chocolat noir', 'sirop de chocolat', 'Chocolat noir'],
  Chia: ['Chia seeds', 'Chia Seeds', 'Graines de chia'],
  Cider: ['Cider', 'Cidre'],
  Cilantro: ['Cilantro', 'Coriandre'],
  Cinnamon: ['Cinnamon', 'Cannelle'],
  Clams: ['Clams', 'Palourdes'],
  Cloudberry: ['Cloudberry', 'Mûre'],
  Cocoa: ['Cocoa', 'Cocoa Powder', 'red cocoa powder', 'Cocoa powder', 'Cacao', 'Poudre de cacao', 'poudre de cacao rouge'],
  Coconut: ['Coconut', 'Coconut Milk', 'Noix de coco', 'Lait de coco'],
  CoconutMilk: ['Coconut Milk', 'Lait de coco'],
  CoconutOil: ['Coconut Oil', 'Coconut Oils', 'Huile de coco', 'Huiles de coco'],
  CocktailSauce: ['Cocktail Sauce', 'Sauce cocktail'],
  coffee: ['Coffee', 'Coffee beans', 'Café', 'Grains de café'],
  CoffeeBeans: ['Coffee Beans', 'Grains de café'],
  Coleslaw: ['Coleslaw', 'Salade de chou'],
  Corn: ['Corn', 'Cornmeal', 'Maïs', 'Farine de maïs'],
  Cornstarch: ['Cornstarch', 'Fécule de maïs'],
  Couscous: ['Couscous', 'Couscousses'],
  CrabMeat: ['Crab Meat', 'Viande de crabe'],
  Crackers: ['Crackers', 'Craquelins'],
  Cream: ['Cream', 'Crème'],
  CreamCheese: ['Cream Cheese', 'cream cheese frosting', 'Cream cheese', 'Fromage à la crème', 'Glaçage au fromage à la crème'],
  Croutons: ['Croutons', 'Croûtons'],
  Cucumber: ['Cucumber', 'Cucumbers', 'Concombre', 'Concombres'],
  Cumin: ['Cumin', 'Cumin'],
  Curry: ['Curry Paste', 'Curry Powder', 'Pâte de curry', 'Poudre de curry'],
  CustardApple: ['Custard Apple', 'Pomme à crème'],
  DriedFruits: ['Dried fruits', 'Mixed fruits', 'Fruits secs', 'Fruits mélangés'],
  Daikon: ['Daikon', 'Daikon'],
  DarkChocolate: ['Dark Chocolate', 'Dark Chocolates', 'Chocolate chips', 'Chocolat noir', 'Chocolats noirs', 'Pépites de chocolat'],
  Dates: ['Dates', 'Dattes'],
  DragonFruit: ['Dragon Fruit', 'Fruit du dragon'],
  Dressings: ['Dressing', 'Dressings', 'salad dressing', 'Vinaigrette', 'Vinaigrettes', 'vinaigrette pour salade'],
  Duck: ['Duck', 'Canard'],
  Egg: ['Egg', 'Eggs', 'egg whites', 'Egg Yolks', 'Egg whites', 'Oeuf', 'Oeufs', 'Blancs d\'oeufs', 'Jaunes d\'oeufs', 'blancs d\'oeufs'],
  Eggplant: ['Eggplant', 'Aubergine'],
  Feijoa: ['Feijoa', 'Feijoa'],
  Fennel: ['Fennel', 'Fenouil'],
  Fig: ['Fig', 'Figue'],
  Fish: ['Fish', 'Fishes', 'fish', 'fishes', 'salmon', 'tuna', 'Fresh Tuna', 'Raw Fish', 'Poisson', 'Poissons', 'saumon', 'thon', 'Thon frais', 'Poisson cru'],
  Flour: ['Flour', 'flour', 'Whole wheat flour', 'almond flour', 'Farine', 'farine', 'Farine de blé complet', 'Farine d\'amande'],
  Fries: ['Fries', 'Frites'],
  Fruits: ['Fruit', 'Fruits', 'apple', 'banana', 'orange', 'grapes', 'strawberries', 'blueberries', 'Frozen berries', 'Fruit', 'Fruits', 'pomme', 'banane', 'orange', 'raisins', 'fraises', 'myrtilles', 'Baies congelées'],
  Garlic: ['Garlic', 'Ail'],
  Gelatin: ['Gelatin', 'Gélatine'],
  Ginger: ['Ginger', 'Gingembre'],
  Gnocchi: ['Gnocchi', 'Gnocchi'],
  GoatsMilk: ['Goat\'s milk', 'Goat\'s Milk', 'Lait de chèvre', 'Lait de Chèvre'],
  Grapefruit: ['Grapefruit', 'Pamplemousse'],
  Grapes: ['Grapes', 'Raisins'],
  Granola: ['Granola', 'Granola'],
  Gravy: ['Gravy', 'Sauce'],
  GreekYogurt: ['Greek yogurt', 'Greek Yogurt', 'Yaourt grec', 'Yaourt Grec'],
  GreenOnions: ['Green Onions', 'Oignons verts'],
  GrilledVegetables: ['Grilled Vegetables', 'Légumes grillés'],
  GroundMeat: ['Ground Meat', 'Viande hachée'],
  Guava: ['Guava', 'Goyave'],
  Ham: ['Ham', 'Jambon'],
  Herbs: ['Herbs', 'Herbes'],
  HoagieRoll: ['Hoagie Roll', 'Pain à hoagie'],
  Hollandaise: ['Hollandaise sauce', 'Hollandaise Sauce', 'Sauce hollandaise'],
  Honey: ['Honey', 'Miel'],
  HotDogBun: ['Hot Dog Bun', 'Pain à hot dog'],
  HotSauce: ['Hot Sauce', 'Sauce piquante'],
  Hummus: ['Hummus', 'Houmous'],
  IceCream: ['Ice Cream', 'Crème glacée'],
  Insect: ['Live insect larvae', 'Larves d\'insectes vivantes'],
  Jackfruit: ['Jackfruit', 'Jacquier'],
  Jalapeños: ['Jalapeños', 'Jalapeños'],
  JerkMarinade: ['Jerk Marinade', 'Marinade jerk'],
  Juices: ['Juice', 'Juices', 'orange juice', 'apple juice', 'grape juice', 'Jus', 'Jus', 'jus d\'orange', 'jus de pomme', 'jus de raisin'],
  Kale: ['Kale', 'Chou frisé'],
  Kimchi: ['Kimchi', 'Kimchi'],
  Kiwi: ['Kiwi', 'Kiwi'],
  Kumquat: ['Kumquat', 'Kumquat'],
  Lamb: ['Lamb', 'Ground Lamb', 'Lamb Chops', 'Agneau', 'Agneau haché', 'Côtelettes d\'agneau'],
  Leeks: ['Leek', 'Leeks', 'Poireau', 'Poireaux'],
  Lemon: ['Lemon', 'Lemon Juice', 'Lemon juice', 'Citron', 'Jus de citron', 'jus de citron'],
  Lettuce: ['Lettuce', 'Romaine Lettuce', 'Laitue', 'Laitue romaine'],
  Lentils: ['Lentils', 'Lentil', 'lentils', 'lentil', 'red lentils', 'green lentils', 'Lentilles', 'Lentille', 'lentilles', 'lentille', 'lentilles rouges', 'lentilles vertes'],
  LimeJuice: ['Lime Juice', 'Jus de lime'],
  Lobster: ['Lobster', 'Homard'],
  Lychee: ['Lychee', 'Litchi'],
  Macaroni: ['Macaroni', 'Macaronis'],
  Mango: ['Mango', 'Mango puree', 'Mangue', 'Purée de mangue'],
  MapleSyrup: ['Maple Syrup', 'Maple Syrups', 'Sirop d\'érable', 'Sirop d\'érable'],
  Maplesyrup: ['Maple syrup', 'Sirop d\'érable'],
  MarinaraSauce: ['Marinara Sauce', 'Sauce marinara'],
  MarinatedVegetables: ['Marinated Vegetables', 'Légumes marinés'],
  Marshmallows: ['Marshmallows', 'Guimauves'],
  Mayonnaise: ['Mayonnaise', 'Mayonnaise'],
  Matcha: ['Matcha Powder', 'Matcha powder', 'Poudre de matcha', 'poudre de matcha'],
  Melon: ['Melon', 'Melon'],
  Milk: ['Milk', 'Cow\'s milk', 'Lait', 'Lait de vache'],
  Mint: ['Mint', 'Menthe'],
  Miso: ['Miso', 'Miso'],
  MixedFruits: ['Mixed Fruits', 'Fruits mélangés'],
  MixedVegetables: ['Mixed Vegetables', 'Légumes mélangés'],
  Mixedberries: ['Mixed berries', 'Baies mélangées'],
  Mixedfruit: ['Mixed fruit', 'Fruit mélangé'],
  Mixedfruits: ['Mixed fruits (Apples, Berries, Oranges)', 'Fruits mélangés (Pommes, Baies, Oranges)'],
  Mozzarella: ['Mozzarella', 'Mozzarella Cheese', 'Mozzarella', 'Fromage mozzarella'],
  Muffin: ['English muffin', 'Muffin anglais'],
  Muffins: ['Muffin', 'Muffins'],
  Mulberry: ['Mulberry', 'Mûre'],
  Mushrooms: ['Mushrooms', 'Champignons'],
  Mussels: ['Mussels', 'Moules'],
  Mustard: ['Mustard', 'Mustard Greens', 'Moutarde', 'Moutarde verte'],
  Noodles: ['Noodles', 'Nouilles'],
  Nutmeg: ['Nutmeg', 'Muscade'],
  Nuts: ['Nuts', 'Noix'],
  Oatmeal: ['Oatmeal', 'Flocons d\'avoine'],
  Oats: ['Oats', 'Avoine'],
  Oil: ['Oil', 'oils', 'Olive Oil', 'Avocado Oil', 'Huile', 'huiles', 'Huile d\'olive', 'Huile d\'avocat'],
  Olives: ['Olives', 'Olives'],
  Onions: ['Onion', 'Onions', 'Red Onion', 'yellow onion', 'Oignon', 'Oignons', 'Oignon rouge', 'Oignon jaune'],
  Oranges: ['Oranges', 'Oranges'],
  Oregano: ['Oregano', 'Origan'],
  Oysters: ['Oysters', 'Huîtres'],
  Pancakes: ['Pancakes', 'Crêpes'],
  Papaya: ['Papaya', 'Papaye'],
  Paprika: ['Paprika', 'Paprika'],
  Parmesan: ['Parmesan', 'Parmesan Cheese', 'Parmesan', 'Fromage parmesan'],
  Parsley: ['Parsley', 'Persil'],
  Parsnips: ['Parsnips', 'Panais'],
  PassionFruit: ['Passion Fruit', 'Fruit de la passion'],
  Pasta: ['Pasta', 'Pâtes'],
  PastaSauce: ['Pasta Sauce', 'Sauce pour pâtes'],
  Pastrami: ['Pastrami', 'Pastrami'],
  Peaches: ['Peaches', 'Pêches'],
  Peanut: ['Peanuts', 'peanuts', 'Cacahuètes', 'cacahuètes'],
  PeanutButter: ['Peanut Butter', 'peanut butter', 'Beurre de cacahuète', 'beurre de cacahuète'],
  Pear: ['Pears', 'pears', 'Poires', 'poires'],
  Pecans: ['Pecans', 'Pacanes'],
  Peppers: ['Peppers', 'Poivrons'],
  Pepperoni: ['Pepperoni', 'Pepperoni'],
  Pickles: ['Pickles', 'Cornichons'],
  Pineapple: ['Pineapple', 'Ananas'],
  Pita: ['Pita', 'Pita bread', 'Pain pita'],
  PizzaDough: ['Pizza Dough', 'Pâte à pizza'],
  Plantain: ['Plantain', 'Plantain'],
  Plums: ['Plums', 'Prunes'],
  Pomegranate: ['Pomegranate', 'Grenade'],
  Popcorn: ['Popcorn', 'Popcorn'],
  Pork: ['Pork', 'Porc'],
  Prawns: ['Prawns', 'Crevettes'],
  Pretzels: ['Pretzels', 'Bretzels'],
  PricklyPear: ['Prickly Pear', 'Poire cactus'],
  Prosciutto: ['Prosciutto', 'Prosciutto'],
  Prunes: ['Prunes', 'Pruneaux'],
  Pudding: ['Pudding', 'Pouding'],
  Pumpkin: ['Pumpkin', 'Citrouille'],
  PumpkinSeeds: ['Pumpkin Seeds', 'Graines de citrouille'],
  QuailEggs: ['Quail eggs', 'Oeufs de caille'],
  Quinoa: ['Quinoa', 'Quinoa'],
  Radicchio: ['Radicchio', 'Radicchio'],
  Radishes: ['Radishes', 'Radis'],
  Raisins: ['Raisins', 'Raisins'],
  Raspberries: ['Raspberries', 'Framboises'],
  Rice: ['Rice', 'White Rice', 'brown rice', 'Jasmine rice', 'Basmati rice', 'Riz', 'Riz blanc', 'riz brun', 'riz jasmin', 'riz basmati'],
  RiceNoodles: ['Rice noodles', 'Nouilles de riz'],
  Ricotta: ['Ricotta', 'Ricotta cheese', 'Ricotta', 'Fromage ricotta'],
  Roll: ['Roll', 'Pain'],
  Rosemary: ['Rosemary', 'Romarin'],
  RyeBread: ['Rye Bread', 'Pain de seigle'],
  Salad: ['Salad', 'Salads', 'Salade', 'Salades'],
  Salt: ['Salt', 'sea salt', 'Sel', 'sel marin'],
  Salsa: ['Salsa', 'Salsa'],
  Sapodilla: ['Sapodilla', 'Sapotille'],
  Sausage: ['Sausage', 'Sausages', 'Saucisse', 'Saucisses'],
  Scallops: ['Scallops', 'Coquilles Saint-Jacques'],
  Seaweed: ['Seaweed', 'Algues'],
  Sesame: ['Sesame Seeds', 'sesame seeds', 'Sésame'],
  Shallots: ['Shallots', 'Échalotes'],
  Shellfish: ['Shellfish', 'Fruits de mer'],
  Shrimp: ['Shrimp', 'Crevettes'],
  Sorrel: ['Sorrel', 'oseille'],
  SoySauce: ['Soy Sauce', 'Soya Sauce', 'Sauce soja'],
  Soybeans: ['Soybeans', 'Fèves de soja'],
  Soymilk: ['Soy Milk', 'Lait de soja'],
  Spaghetti: ['Spaghetti', 'Spaghetti'],
  Spinach: ['Spinach', 'Épinards'],
  Squid: ['Squid', 'Calmar'],
  SquidInk: ['Squid Ink', 'Encre de calmar'],
  Starfruit: ['Starfruit', 'Carambole'],
  Steak: ['Steak', 'Steaks', 'Beef steak', 'Boeuf', 'Boeuf steak'],
  Strawberries: ['Strawberries', 'Fraises'],
  Sugar: ['Sugar', 'brown sugar', 'Sucre', 'sucre brun'],
  SunflowerOil: ['Sunflower oil', 'Sunflower Oil', 'Huile de tournesol'],
  SweetCorn: ['Sweet Corn', 'Maïs doux'],
  SweetPotato: ['Sweet Potato', 'Patate douce'],
  SwissChard: ['Swiss Chard', 'Bettes'],
  Tahini: ['Tahini', 'Tahini'],
  Taro: ['Taro', 'Taro'],
  Tarragon: ['Tarragon', 'Estragon'],
  Tea: ['Tea', 'Green Tea', 'Thé', 'Thé vert'],
  Tofu: ['Tofu', 'Tofu'],
  Tomato: ['Tomato', 'Tomatoes', 'Tomate', 'Tomates'],
  TomatoPaste: ['Tomato Paste', 'Concentré de tomate'],
  Tortillas: ['Tortillas', 'Tortillas'],
  Tumeric: ['Turmeric', 'Curcuma'],
  Tuna: ['Tuna', 'Thon'],
  Turnips: ['Turnips', 'Navets'],
  Vanilla: ['Vanilla', 'Vanille'],
  Vegetables: ['Vegetable', 'Vegetables', 'Légumes', 'Légume'],
  Vinegar: ['Vinegar', 'Vinaigre'],
  Walnuts: ['Walnuts', 'Noix'],
  Water: ['Water', 'Eau'],
  Watermelon: ['Watermelon', 'Pastèque'],
  Wheat: ['Wheat', 'Blé'],
  Whey: ['Whey', 'Petit-lait'],
  WhiteFish: ['White Fish', 'Poisson blanc'],
  WhiteWine: ['White Wine', 'Vin blanc'],
  Yogurt: ['Yogurt', 'Yaourt'],
  Zucchini: ['Zucchini', 'Courgette']
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
    Alcohols: 'Alcohols',
    beer: 'beer',
    wine: 'wine',
    spirits: 'spirits',
    Almond: 'almonds',
    Almonds: 'Almonds',
    AlmondButter: 'Almond butter',
    AlmondMilk: 'Almond milk',
    AlmondMilks: 'Almond Milks',
    Apple: 'Apple',
    Apples: 'Apples',
    apples: 'apples',
    ArborioRice: 'Arborio Rice',
    Artichokes: 'Artichokes',
    Asparagus: 'Asparagus',
    AssortedCheeses: 'Assorted Cheeses',
    AssortedVegetables: 'Assorted Vegetables',
    Avocado: 'Avocado',
    avocado: 'avocado',
    AvocadoOil: 'Avocado Oil',
    AvocadoOils: 'Avocado Oils',
    Bacon: 'Bacon',
    bacon: 'bacon',
    Bagel: 'Bagel',
    BakingPowder: 'Baking Powder',
    bakingPowder: 'baking powder',
    BakingPowder2: 'Baking powder',
    BacterialCultures: 'Bacterial cultures',
    LiveCultures: 'Live cultures',
    ActiveCultures: 'Active cultures',
    KefirCultures: 'Kefir cultures',
    MoldCultures: 'Mold cultures',
    PenicilliumMold: 'Penicillium mold',
    Banana: 'Banana',
    Bananas: 'Bananas',
    BarbecueSauce: 'Barbecue Sauce',
    barbecueSauce: 'barbecue sauce',
    BBQSauce: 'BBQ Sauce',
    Barley: 'Barley',
    Barleys: 'Barleys',
    Basil: 'Basil',
    Batter: 'Batter',
    TempuraBatter: 'Tempura Batter',
    BayLeaf: 'Bay Leaf',
    BayLeaves: 'Bay Leaves',
    BeanSprouts: 'Bean Sprouts',
    Beans: 'Bean',
    blackBeans: 'black beans',
    kidneyBeans: 'kidney beans',
    pintoBeans: 'pinto beans',
    Beef: 'Beef',
    GroundBeef: 'Ground Beef',
    beefs: 'beefs',
    groundBeef: 'ground beef',
    BeefBroth: 'Beef Broth',
    Beets: 'Beets',
    BellPeppers: 'Bell Pepper',
    BellPeppers2: 'Bell Peppers',
    BellPeppers3: 'Bell peppers',
    Berries: 'Berries',
    BitterMelon: 'Bitter Melon',
    BlackBeans: 'Black Beans',
    BlackPepper: 'Black pepper',
    BlackPepper2: 'Black Pepper',
    Blueberries: 'Blueberries',
    Bread: 'Bread',
    WholeGrainBread: 'Whole grain bread',
    Breadcrumbs: 'Bread Crumbs',
    Breading: 'Breading',
    Broccoli: 'Broccoli',
    Broth: 'Broth',
    BrusselsSprouts: 'Brussels Sprouts',
    Buckwheat: 'Buckwheat',
    Bun: 'Bun',
    Butter: 'Butter',
    butter: 'butter',
    Buttermilk: 'Buttermilk',
    buttermilk: 'buttermilk',
    ButternutSquash: 'Butternut Squash',
    CaesarDressing: 'Caesar Dressing',
    Cabbage: 'Cabbage',
    Capers: 'Capers',
    Carambola: 'Carambola',
    Carrot: 'Carrot',
    Carrots: 'Carrots',
    Cauliflower: 'Cauliflower',
    Celery: 'Celery',
    Cereal: 'Cereal',
    Cereals: 'Cereals',
    CheddarCheese: 'Cheddar cheese',
    CheddarCheese2: 'Cheddar Cheese',
    Cheese: 'Cheese',
    Cheddar: 'Cheddar Cheese',
    ParmesanCheese: 'Parmesan Cheese',
    MozzarellaCheese: 'Mozzarella Cheese',
    FetaCheese: 'Feta Cheese',
    CottageCheese: 'Cottage cheese',
    Cherries: 'Cherries',
    DriedCherries: 'Dried cherries',
    Cherry: 'Cherry',
    cherries2: 'cherries',
    Chickpeas: 'Chickpeas',
    Chicken: 'Chicken',
    ChickenBreast: 'Chicken Breast',
    ChickenWings: 'Chicken Wings',
    Chili: 'Chili',
    ChiliFlakes: 'Chili flakes',
    ChiliFlakes2: 'Chili Flakes',
    ChiliPowder: 'Chili Powder',
    ChiliPowders: 'Chili Powders',
    Chocolate: 'Chocolate',
    DarkChocolate: 'Dark Chocolate',
    ChocolateSyrup: 'chocolate syrup',
    DarkChocolate2: 'Dark chocolate',
    Chia: 'Chia seeds',
    ChiaSeeds: 'Chia Seeds',
    Cider: 'Cider',
    Cilantro: 'Cilantro',
    Cinnamon: 'Cinnamon',
    Clams: 'Clams',
    Cloudberry: 'Cloudberry',
    Cocoa: 'Cocoa',
    CocoaPowder: 'Cocoa Powder',
    RedCocoaPowder: 'red cocoa powder',
    CocoaPowder2: 'Cocoa powder',
    Coconut: 'Coconut',
    CoconutMilk: 'Coconut Milk',
    CoconutOil: 'Coconut Oil',
    CoconutOils: 'Coconut Oils',
    CocktailSauce: 'Cocktail Sauce',
    coffee: 'Coffee',
    CoffeeBeans: 'Coffee Beans',
    Coleslaw: 'Coleslaw',
    Corn: 'Corn',
    Cornmeal: 'Cornmeal',
    Cornstarch: 'Cornstarch',
    Couscous: 'Couscous',
    Couscouses: 'Couscouses',
    CrabMeat: 'Crab Meat',
    Crackers: 'Crackers',
    Cream: 'Cream',
    CreamCheese: 'Cream Cheese',
    creamCheeseFrosting: 'cream cheese frosting',
    Croutons: 'Croutons',
    Cucumber: 'Cucumber',
    Cucumbers: 'Cucumbers',
    Cumin: 'Cumin',
    Curry: 'Curry Paste',
    CurryPowder: 'Curry Powder',
    CustardApple: 'Custard Apple',
    DriedFruits: 'Dried fruits',
    MixedFruits: 'Mixed fruits',
    Daikon: 'Daikon',
    DarkChocolate3: 'Dark Chocolate',
    DarkChocolates: 'Dark Chocolates',
    ChocolateChips: 'Chocolate chips',
    Dates: 'Dates',
    DragonFruit: 'Dragon Fruit',
    Dressings: 'Dressing',
    Dressings2: 'Dressings',
    SaladDressing: 'salad dressing',
    Duck: 'Duck',
    Egg: 'Egg',
    Eggs: 'Eggs',
    EggWhites: 'egg whites',
    EggYolks: 'Egg Yolks',
    EggWhites2: 'Egg whites',
    Eggplant: 'Eggplant',
    Feijoa: 'Feijoa',
    Fennel: 'Fennel',
    Fig: 'Fig',
    Fish: 'Fish',
    Fishes: 'Fishes',
    fish: 'fish',
    fishes: 'fishes',
    Salmon: 'salmon',
    Tuna: 'tuna',
    FreshTuna: 'Fresh Tuna',
    RawFish: 'Raw Fish',
    Flour: 'Flour',
    flour: 'flour',
    WholeWheatFlour: 'Whole wheat flour',
    AlmondFlour: 'almond flour',
    Fries: 'Fries',
    Fruits: 'Fruit',
    Fruits2: 'Fruits',
    apple: 'apple',
    banana: 'banana',
    orange: 'orange',
    grapes: 'grapes',
    strawberries: 'strawberries',
    blueberries: 'blueberries',
    FrozenBerries: 'Frozen berries',
    Garlic: 'Garlic',
    Gelatin: 'Gelatin',
    Ginger: 'Ginger',
    Gnocchi: 'Gnocchi',
    GoatsMilk: 'Goat\'s milk',
    GoatsMilk2: 'Goat\'s Milk',
    Grapefruit: 'Grapefruit',
    Grapes: 'Grapes',
    Granola: 'Granola',
    Gravy: 'Gravy',
    GreekYogurt: 'Greek yogurt',
    GreekYogurt2: 'Greek Yogurt',
    GreenOnions: 'Green Onions',
    GrilledVegetables: 'Grilled Vegetables',
    GroundMeat: 'Ground Meat',
    Guava: 'Guava',
    Hazelnuts: 'Hazelnuts',
    Herbs: 'Herbs',
    Honey: 'Honey',
    HotDog: 'Hot Dog',
    IceCream: 'Ice Cream',
    IceCubes: 'Ice Cubes',
    Jam: 'Jam',
    Jellies: 'Jellies',
    Juice: 'Juice',
    Ketchup: 'Ketchup',
    Kiwi: 'Kiwi',
    Lemons: 'Lemons',
    Lentils: 'Lentils',
    Lime: 'Lime',
    Mango: 'Mango',
    Melon: 'Melon',
    Miso: 'Miso',
    Mustard: 'Mustard',
    Nectarine: 'Nectarine',
    Nuts: 'Nuts',
    Olives: 'Olives',
    Onion: 'Onion',
    Onions: 'Onions',
    Orange: 'Orange',
    Pancakes: 'Pancakes',
    Paprika: 'Paprika',
    Parsley: 'Parsley',
    Peaches: 'Peaches',
    Pear: 'Pear',
    Peas: 'Peas',
    Peppers: 'Peppers',
    Pickles: 'Pickles',
    Pineapple: 'Pineapple',
    Plums: 'Plums',
    Potato: 'Potato',
    Potatoes: 'Potatoes',
    Pumpkin: 'Pumpkin',
    Radish: 'Radish',
    Raisins: 'Raisins',
    Rice: 'Rice',
    Risotto: 'Risotto',
    RoastedGarlic: 'Roasted garlic',
    Salad: 'Salad',
    Salt: 'Salt',
    Sauerkraut: 'Sauerkraut',
    Sauces: 'Sauces',
    Shrimp: 'Shrimp',
    Slices: 'Slices',
    Soy: 'Soy',
    SoySauce: 'Soy Sauce',
    Spices: 'Spices',
    Spinach: 'Spinach',
    Sugar: 'Sugar',
    SweetPotato: 'Sweet Potato',
    Tofu: 'Tofu',
    Tomato: 'Tomato',
    Tomatoes: 'Tomatoes',
    Tortillas: 'Tortillas',
    VegetableOil: 'Vegetable Oil',
    Vinegar: 'Vinegar',
    Walnuts: 'Walnuts',
    Water: 'Water',
    Wheat: 'Wheat',
    Yogurt: 'Yogurt',
    Zucchini: 'Zucchini',
    Ham: 'Ham',
    HoagieRoll: 'Hoagie Roll',
    Hollandaise: 'Hollandaise sauce',
    HotDogBun: 'Hot Dog Bun',
    HotSauce: 'Hot Sauce',
    Hummus: 'Hummus',
    Insect: 'Live insect larvae',
    Jackfruit: 'Jackfruit',
    Jalapeños: 'Jalapeños',
    JerkMarinade: 'Jerk Marinade',
    Juices: 'Juice',
    Kale: 'Kale',
    Kimchi: 'Kimchi',
    Kumquat: 'Kumquat',
    Lamb: 'Lamb',
    Leeks: 'Leek',
    Lemon: 'Lemon',
    Lettuce: 'Lettuce',
    LimeJuice: 'Lime Juice',
    Lobster: 'Lobster',
    Lychee: 'Lychee',
    Macaroni: 'Macaroni',
    MapleSyrup: 'Maple Syrup',
    Maplesyrup: 'Maple syrup',
    MarinaraSauce: 'Marinara Sauce',
    MarinatedVegetables: 'Marinated Vegetables',
    Marshmallows: 'Marshmallows',
    Mayonnaise: 'Mayonnaise',
    Matcha: 'Matcha Powder',
    Milk: 'Milk',
    Mint: 'Mint',
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
    Noodles: 'Noodles',
    Nutmeg: 'Nutmeg',
    Oatmeal: 'Oatmeal',
    Oats: 'Oats',
    Oil: 'Oil',
    Oranges: 'Oranges',
    Oregano: 'Oregano',
    Oysters: 'Oysters',
    Papaya: 'Papaya',
    Parmesan: 'Parmesan',
    Parsnips: 'Parsnips',
    PassionFruit: 'Passion Fruit',
    Pasta: 'Pasta',
    PastaSauce: 'Pasta Sauce',
    Pastrami: 'Pastrami',
    Peanut: 'Peanuts',
    PeanutButter: 'Peanut Butter',
    Pecans: 'Pecans',
    Pepperoni: 'Pepperoni',
    Pita: 'Pita',
    PizzaDough: 'Pizza Dough',
    Plantain: 'Plantain',
    Pomegranate: 'Pomegranate',
    Popcorn: 'Popcorn',
    Pork: 'Pork',
    Prawns: 'Prawns',
    Pretzels: 'Pretzels',
    PricklyPear: 'Prickly Pear',
    Prosciutto: 'Prosciutto',
    Prunes: 'Prunes',
    Pudding: 'Pudding',
    PumpkinSeeds: 'Pumpkin Seeds',
    QuailEggs: 'Quail eggs',
    Quinoa: 'Quinoa',
    Radicchio: 'Radicchio',
    Radishes: 'Radishes',
    Raspberries: 'Raspberries',
    RiceNoodles: 'Rice noodles',
    Ricotta: 'Ricotta',
    Roll: 'Roll',
    Rosemary: 'Rosemary',
    RyeBread: 'Rye Bread',
    Salsa: 'Salsa',
    Sapodilla: 'Sapodilla',
    Sausage: 'Sausage',
    Scallops: 'Scallops',
    Seaweed: 'Seaweed',
    Sesame: 'Sesame Seeds',
    Shallots: 'Shallots',
    Shellfish: 'Shellfish',
    Sorrel: 'Sorrel',
    Soybeans: 'Soybeans',
    Soymilk: 'Soy Milk',
    Spaghetti: 'Spaghetti',
    Squid: 'Squid',
    SquidInk: 'Squid Ink',
    Starfruit: 'Starfruit',
    Steak: 'Steak',
    Strawberries: 'Strawberries',
    SunflowerOil: 'Sunflower oil',
    SweetCorn: 'Sweet Corn',
    SwissChard: 'Swiss Chard',
    Tahini: 'Tahini',
    Taro: 'Taro',
    Tarragon: 'Tarragon',
    Tea: 'Tea',
    TomatoPaste: 'Tomato Paste',
    Tumeric: 'Turmeric',
    Turnips: 'Turnips',
    Vanilla: 'Vanilla',
    Vegetables: 'Vegetables',
    Watermelon: 'Watermelon',
    Whey: 'Whey',
    WhiteFish: 'White Fish',
    WhiteWine: 'White Wine',
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
    Alcohols: 'Alcools',
    beer: 'bière',
    wine: 'vin',
    spirits: 'spiritueux',
    Almond: 'Amandes',
    Almonds: 'Amandes',
    AlmondButter: 'Beurre d\'amande',
    AlmondMilk: 'Lait d\'amande',
    AlmondMilks: 'Laits d\'amande',
    Apple: 'Pomme',
    Apples: 'Pommes',
    apples: 'pommes',
    ArborioRice: 'Riz Arborio',
    Artichokes: 'Artichauts',
    Asparagus: 'Asperges',
    AssortedCheeses: 'Fromages assortis',
    AssortedVegetables: 'Légumes assortis',
    Avocado: 'Avocat',
    avocado: 'avocat',
    AvocadoOil: 'Huile d\'avocat',
    AvocadoOils: 'Huiles d\'avocat',
    Bacon: 'Bacon',
    bacon: 'bacon',
    Bagel: 'Bagel',
    BakingPowder: 'Poudre à lever',
    bakingPowder: 'poudre à lever',
    BakingPowder2: 'Poudre à lever',
    BacterialCultures: 'Cultures bactériennes',
    LiveCultures: 'Cultures vivantes',
    ActiveCultures: 'Cultures actives',
    KefirCultures: 'Cultures de kéfir',
    MoldCultures: 'Cultures de moisissure',
    PenicilliumMold: 'Moisissure Penicillium',
    Banana: 'Banane',
    Bananas: 'Bananes',
    BarbecueSauce: 'Sauce barbecue',
    barbecueSauce: 'sauce barbecue',
    BBQSauce: 'Sauce BBQ',
    Barley: 'Orge',
    Barleys: 'Orgé',
    Basil: 'Basilic',
    Batter: 'Pâte',
    TempuraBatter: 'Pâte tempura',
    BayLeaf: 'Feuille de laurier',
    BayLeaves: 'Feuilles de laurier',
    BeanSprouts: 'Germes de soja',
    Beans: 'Haricots',
    blackBeans: 'haricots noirs',
    kidneyBeans: 'haricots rouges',
    pintoBeans: 'haricots pinto',
    Beef: 'Boeuf',
    GroundBeef: 'Viande hachée',
    beefs: 'beefs',
    groundBeef: 'viande hachée',
    BeefBroth: 'Bouillon de boeuf',
    Beets: 'Betteraves',
    BellPeppers: 'Poivron',
    BellPeppers2: 'Poivrons',
    BellPeppers3: 'poivrons',
    Berries: 'Baies',
    BitterMelon: 'Melon amer',
    BlackBeans: 'Haricots noirs',
    BlackPepper: 'Poivre noir',
    BlackPepper2: 'Poivre noir',
    Blueberries: 'Myrtilles',
    Bread: 'Pain',
    WholeGrainBread: 'Pain complet',
    Breadcrumbs: 'Chapelure',
    Breading: 'Panure',
    Broccoli: 'Brocoli',
    Broth: 'Bouillon',
    BrusselsSprouts: 'Choux de Bruxelles',
    Buckwheat: 'Sarrasin',
    Bun: 'Petit pain',
    Butter: 'Beurre',
    butter: 'beurre',
    Buttermilk: 'Lait caillé',
    buttermilk: 'lait caillé',
    ButternutSquash: 'Courge musquée',
    CaesarDressing: 'Sauce César',
    Cabbage: 'Chou',
    Capers: 'Câpres',
    Carambola: 'Carambole',
    Carrot: 'Carotte',
    Carrots: 'Carottes',
    Cauliflower: 'Chou-fleur',
    Celery: 'Céleri',
    Cereal: 'Céréales',
    Cereals: 'Céréales',
    CheddarCheese: 'Fromage cheddar',
    CheddarCheese2: 'Fromage Cheddar',
    Cheese: 'Fromage',
    Cheddar: 'Fromage cheddar',
    ParmesanCheese: 'Fromage parmesan',
    MozzarellaCheese: 'Fromage mozzarella',
    FetaCheese: 'Fromage feta',
    CottageCheese: 'Fromage cottage',
    Cherries: 'Cerises',
    DriedCherries: 'Cerises séchées',
    Cherry: 'Cerise',
    cherries2: 'cerises',
    Chickpeas: 'Pois chiches',
    Chicken: 'Poulet',
    ChickenBreast: 'Poitrine de poulet',
    ChickenWings: 'Ailes de poulet',
    Chili: 'Piment',
    ChiliFlakes: 'Flocons de piment',
    ChiliFlakes2: 'Flocons de piment',
    ChiliPowder: 'Poudre de piment',
    ChiliPowders: 'Poudres de piment',
    Chocolate: 'Chocolat',
    DarkChocolate: 'Chocolat noir',
    ChocolateSyrup: 'sirop de chocolat',
    DarkChocolate2: 'Chocolat noir',
    Chia: 'Graines de chia',
    ChiaSeeds: 'Graines de chia',
    Cider: 'Cidre',
    Cilantro: 'Coriandre',
    Cinnamon: 'Cannelle',
    Clams: 'Palourdes',
    Cloudberry: 'Mûre des marais',
    Cocoa: 'Cacao',
    CocoaPowder: 'Poudre de cacao',
    RedCocoaPowder: 'poudre de cacao rouge',
    CocoaPowder2: 'Poudre de cacao',
    Coconut: 'Noix de coco',
    CoconutMilk: 'Lait de coco',
    CoconutOil: 'Huile de coco',
    CoconutOils: 'Huiles de coco',
    CocktailSauce: 'Sauce cocktail',
    coffee: 'Café',
    CoffeeBeans: 'Grains de café',
    Coleslaw: 'Coleslaw',
    Corn: 'Maïs',
    Cornmeal: 'Farine de maïs',
    Cornstarch: 'Fécule de maïs',
    Couscous: 'Couscous',
    Couscouses: 'Couscouses',
    CrabMeat: 'Viande de crabe',
    Crackers: 'Crackers',
    Cream: 'Crème',
    CreamCheese: 'Fromage à la crème',
    creamCheeseFrosting: 'glaçage au fromage à la crème',
    Croutons: 'Croûtons',
    Cucumber: 'Concombre',
    Cucumbers: 'Concombres',
    Cumin: 'Cumin',
    Curry: 'Pâte de curry',
    CurryPowder: 'Poudre de curry',
    CustardApple: 'Pomme-cannelle',
    DriedFruits: 'Fruits secs',
    MixedFruits: 'Fruits mélangés',
    Daikon: 'Daikon',
    DarkChocolate3: 'Chocolat noir',
    DarkChocolates: 'Chocolats noirs',
    ChocolateChips: 'Pépites de chocolat',
    Dates: 'Dattes',
    DragonFruit: 'Fruit du dragon',
    Dressings: 'Vinaigrette',
    Dressings2: 'Vinaigrettes',
    SaladDressing: 'vinaigrette',
    Duck: 'Canard',
    Egg: 'Oeuf',
    Eggs: 'Oeufs',
    EggWhites: 'blancs d\'oeufs',
    EggYolks: 'Jaunes d\'oeufs',
    EggWhites2: 'Blancs d\'oeufs',
    Eggplant: 'Aubergine',
    Feijoa: 'Feijoa',
    Fennel: 'Fenouil',
    Fig: 'Figue',
    Fish: 'Poisson',
    Fishes: 'Poissons',
    fish: 'poisson',
    fishes: 'poissons',
    Salmon: 'Saumon',
    Tuna: 'Thon',
    FreshTuna: 'Thon frais',
    RawFish: 'Poisson cru',
    Flour: 'Farine',
    flour: 'farine',
    WholeWheatFlour: 'Farine de blé entier',
    AlmondFlour: 'Farine d\'amande',
    Fries: 'Frites',
    Fruits: 'Fruits',
    Fruits2: 'Fruits',
    apple: 'pomme',
    banana: 'banane',
    orange: 'orange',
    grapes: 'raisin',
    strawberries: 'fraises',
    blueberries: 'myrtilles',
    FrozenBerries: 'Baies congelées',
    Garlic: 'Ail',
    Gelatin: 'Gélatine',
    Ginger: 'Gingembre',
    Gnocchi: 'Gnocchis',
    GoatsMilk: 'Lait de chèvre',
    GoatsMilk2: 'Lait de chèvre',
    Grapefruit: 'Pamplemousse',
    Grapes: 'Raisins',
    Granola: 'Granola',
    Gravy: 'Sauce',
    GreekYogurt: 'Yaourt grec',
    GreekYogurt2: 'Yaourt grec',
    GreenOnions: 'Oignons verts',
    GrilledVegetables: 'Légumes grillés',
    GroundMeat: 'Viande hachée',
    Guava: 'Goyave',
    Hazelnuts: 'Noisettes',
    Herbs: 'Herbes',
    Honey: 'Miel',
    HotDog: 'Hot-dog',
    IceCream: 'Crème glacée',
    IceCubes: 'Cubes de glace',
    Jam: 'Confiture',
    Jellies: 'Gelées',
    Juice: 'Jus',
    Ketchup: 'Ketchup',
    Kiwi: 'Kiwi',
    Lemons: 'Citrons',
    Lentils: 'Lentilles',
    Lime: 'Citron vert',
    Mango: 'Mangue',
    Melon: 'Melon',
    Miso: 'Miso',
    Mustard: 'Moutarde',
    Nectarine: 'Nectarine',
    Nuts: 'Noix',
    Olives: 'Olives',
    Onion: 'Oignon',
    Onions: 'Oignons',
    Orange: 'Orange',
    Pancakes: 'Crêpes',
    Paprika: 'Paprika',
    Parsley: 'Persil',
    Peaches: 'Pêches',
    Pear: 'Poire',
    Peas: 'Petits pois',
    Peppers: 'Poivrons',
    Pickles: 'Cornichons',
    Pineapple: 'Ananas',
    Plums: 'Prunes',
    Potato: 'Pomme de terre',
    Potatoes: 'Pommes de terre',
    Pumpkin: 'Citrouille',
    Radish: 'Radis',
    Raisins: 'Raisins',
    Rice: 'Riz',
    Risotto: 'Risotto',
    RoastedGarlic: 'Ail rôti',
    Salad: 'Salade',
    Salt: 'Sel',
    Sauerkraut: 'Choucroute',
    Sauces: 'Sauces',
    Shrimp: 'Crevettes',
    Slices: 'Tranches',
    Soy: 'Soja',
    SoySauce: 'Sauce soja',
    Spices: 'Épices',
    Spinach: 'Épinards',
    Sugar: 'Sucre',
    SweetPotato: 'Patate douce',
    Tofu: 'Tofu',
    Tomato: 'Tomate',
    Tomatoes: 'Tomates',
    Tortillas: 'Tortillas',
    VegetableOil: 'Huile végétale',
    Vinegar: 'Vinaigre',
    Walnuts: 'Noix',
    Water: 'Eau',
    Wheat: 'Blé',
    Yogurt: 'Yaourt',
    Zucchini: 'Courgette',
    Ham: 'Jambon',
    HoagieRoll: 'Pain hoagie',
    Hollandaise: 'Sauce hollandaise',
    HotDogBun: 'Pain à hot-dog',
    HotSauce: 'Sauce piquante',
    Hummus: 'Houmous',
    Insect: 'Larves d\'insectes vivantes',
    Jackfruit: 'Jacquier',
    Jalapeños: 'Jalapeños',
    JerkMarinade: 'Marinade jerk',
    Juices: 'Jus',
    Kale: 'Chou frisé',
    Kimchi: 'Kimchi',
    Kumquat: 'Kumquat',
    Lamb: 'Agneau',
    Leeks: 'Poireaux',
    Lemon: 'Citron',
    Lettuce: 'Laitue',
    LimeJuice: 'Jus de citron vert',
    Lobster: 'Homard',
    Lychee: 'Litchi',
    Macaroni: 'Macaroni',
    MapleSyrup: 'Sirop d\'érable',
    Maplesyrup: 'Sirop d\'érable',
    MarinaraSauce: 'Sauce marinara',
    MarinatedVegetables: 'Légumes marinés',
    Marshmallows: 'Guimauves',
    Mayonnaise: 'Mayonnaise',
    Matcha: 'Poudre de matcha',
    Milk: 'Lait',
    Mint: 'Menthe',
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
    Noodles: 'Nouilles',
    Nutmeg: 'Muscade',
    Oatmeal: 'Flocons d\'avoine',
    Oats: 'Avoine',
    Oil: 'Huile',
    Oranges: 'Oranges',
    Oregano: 'Origan',
    Oysters: 'Huîtres',
    Papaya: 'Papaye',
    Parmesan: 'Parmesan',
    Parsnips: 'Panais',
    PassionFruit: 'Fruit de la passion',
    Pasta: 'Pâtes',
    PastaSauce: 'Sauce pour pâtes',
    Pastrami: 'Pastrami',
    Peanut: 'Cacahuète',
    PeanutButter: 'Beurre de cacahuète',
    Pecans: 'Pécan',
    Pepperoni: 'Pepperoni',
    Pita: 'Pita',
    PizzaDough: 'Pâte à pizza',
    Plantain: 'Plante banane',
    Pomegranate: 'Grenade',
    Popcorn: 'Pop-corn',
    Pork: 'Porc',
    Prawns: 'Crevettes',
    Pretzels: 'Bretzels',
    PricklyPear: 'Poire épineuse',
    Prosciutto: 'Prosciutto',
    Prunes: 'Pruneaux',
    Pudding: 'Pouding',
    PumpkinSeeds: 'Graines de citrouille',
    QuailEggs: 'Oeufs de caille',
    Quinoa: 'Quinoa',
    Radicchio: 'Radicchio',
    Radishes: 'Radis',
    Raspberries: 'Framboises',
    RiceNoodles: 'Nouilles de riz',
    Ricotta: 'Ricotta',
    Roll: 'Roulé',
    Rosemary: 'Romarin',
    RyeBread: 'Pain de seigle',
    Salsa: 'Salsa',
    Sapodilla: 'Sapodille',
    Sausage: 'Saucisse',
    Scallops: 'Saint-Jacques',
    Seaweed: 'Algues',
    Sesame: 'Graines de sésame',
    Shallots: 'Échalotes',
    Shellfish: 'Fruits de mer',
    Sorrel: 'Rorippa',
    Soybeans: 'Fèves de soja',
    Soymilk: 'Lait de soja',
    Spaghetti: 'Spaghetti',
    Squid: 'Calmar',
    SquidInk: 'Encre de seiche',
    Starfruit: 'Carambole',
    Steak: 'Steak',
    Strawberries: 'Fraises',
    SunflowerOil: 'Huile de tournesol',
    SweetCorn: 'Maïs doux',
    SwissChard: 'Bette',
    Tahini: 'Tahini',
    Taro: 'Taro',
    Tarragon: 'Estragon',
    Tea: 'Thé',
    TomatoPaste: 'Pâte de tomate',
    Tumeric: 'Curcuma',
    Turnips: 'Navets',
    Vanilla: 'Vanille',
    Vegetables: 'Légumes',
    Watermelon: 'Pastèque',
    Whey: 'Petits suisses',
    WhiteFish: 'Poisson blanc',
    WhiteWine: 'Vin blanc',
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

  const translateIngredient = (ingredient) => {
    return translations[language]?.[ingredient] || ingredient;
  };

  // Updated filter functions to include translated ingredients
  const filteredExcludedIngredients = useMemo(() => {
    const translatedOptions = ingredientOptions.map(translateIngredient);
    return translatedOptions
      .filter(ingredient =>
        ingredient.toLowerCase().includes(excludeSearchInput.toLowerCase())
      )
      .map(getBaseIngredient)
      .filter((base, index, self) => self.indexOf(base) === index)
      .sort();
  }, [excludeSearchInput, ingredientOptions, language]);

  const filteredIncludedIngredients = useMemo(() => {
    const translatedOptions = ingredientOptions.map(translateIngredient);
    return translatedOptions
      .filter(ingredient =>
        ingredient.toLowerCase().includes(includeSearchInput.toLowerCase())
      )
      .map(getBaseIngredient)
      .filter((base, index, self) => self.indexOf(base) === index)
      .sort();
  }, [includeSearchInput, ingredientOptions, language]);

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

  // Updated exclude toggle function
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

  // Calculate BMI and other derived values
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
                {translateIngredient(ingredient)}
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
                {translateIngredient(ingredient)}
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