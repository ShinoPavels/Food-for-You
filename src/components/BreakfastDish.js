// Database of breakfast dishes

export const pancakes = () => ({
    name: "pancakes",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 7, // grams
    lipidType: "Unsaturated fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Flour)",
    vitamins: ["Vitamin A", "Vitamin B2", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar", "Baking Powder"],
    energyPer100g: 210, // kcal
    totalEnergy: 315, // kcal
});

export const scrambledEggs = () => ({
    name: "scrambledEggs",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 9, // grams
    lipidType: "Saturated fats (Eggs)",
    glucidsPer100g: 1, // grams
    glucidType: "Minimal (Eggs)",
    vitamins: ["Vitamin D", "Vitamin B12", "Vitamin A"],
    minerals: ["Selenium", "Phosphorus"],
    ingredients: ["Eggs", "Salt", "Pepper", "Butter"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const oatmeal = () => ({
    name: "oatmeal",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 6, // grams
    lipidType: "Polyunsaturated fats (Oats)",
    glucidsPer100g: 66, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin B5", "Vitamin E"],
    minerals: ["Magnesium", "Zinc", "Iron"],
    ingredients: ["Rolled oats", "Water", "Salt"],
    energyPer100g: 389, // kcal
    totalEnergy: 778, // kcal
});

export const avocadoToast = () => ({
    name: "avocadoToast",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Avocado)",
    lipidsPer100g: 15, // grams
    lipidType: "Monounsaturated fats (Avocado)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Whole grain bread)",
    vitamins: ["Vitamin E", "Vitamin K", "Folate"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Whole grain bread", "Avocado", "Salt", "Pepper"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const yogurtParfait = () => ({
    name: "yogurtParfait",
    type: "Dessert",
    mealType: "Breakfast",
    quantity: 250, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Dairy (Yogurt)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated fats (Yogurt)",
    glucidsPer100g: 15, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin B12", "Calcium", "Vitamin D"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["Yogurt", "Granola", "Berries", "Honey"],
    energyPer100g: 120, // kcal
    totalEnergy: 300, // kcal
});

export const smoothieBowl = () => ({
    name: "smoothieBowl",
    type: "Dessert",
    mealType: "Breakfast",
    quantity: 300, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Banana", "Spinach", "Almond milk", "Nuts", "Seeds"],
    energyPer100g: 120, // kcal
    totalEnergy: 360, // kcal
});

export const frenchToast = () => ({
    name: "frenchToast",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Bread)",
    vitamins: ["Vitamin A", "Vitamin B2", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Sugar"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const chiaPudding = () => ({
    name: "chiaPudding",
    type: "Dessert",
    mealType: "Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Chia seeds)",
    lipidsPer100g: 15, // grams
    lipidType: "Omega-3 (Chia seeds)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Chia seeds)",
    vitamins: ["Vitamin C", "Vitamin E"],
    minerals: ["Calcium", "Magnesium"],
    ingredients: ["Chia seeds", "Almond milk", "Honey", "Vanilla"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const breakfastBurrito = () => ({
    name: "breakfastBurrito",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Eggs, Bacon)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated fats (Bacon)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Tortilla)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["Tortilla", "Eggs", "Bacon", "Cheese", "Salsa"],
    energyPer100g: 250, // kcal
    totalEnergy: 625, // kcal
});

export const acaiBowl = () => ({
    name: "acaiBowl",
    type: "Dessert",
    mealType: "Breakfast",
    quantity: 250, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Acai)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Acai puree", "Banana", "Granola", "Berries"],
    energyPer100g: 180, // kcal
    totalEnergy: 450, // kcal
});

export const bagelWithLox = () => ({
    name: "bagelWithLox",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 15, // grams
    proteinType: "Animal-based (Salmon)",
    lipidsPer100g: 10, // grams
    lipidType: "Omega-3 (Salmon)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Bagel)",
    vitamins: ["Vitamin B12", "Vitamin D"],
    minerals: ["Sodium", "Calcium"],
    ingredients: ["Bagel", "Smoked salmon", "Cream cheese", "Capers"],
    energyPer100g: 300, // kcal
    totalEnergy: 600, // kcal
});

export const quiche = () => ({
    name: "quiche",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 20, // grams
    lipidType: "Saturated fats (Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Pastry)",
    vitamins: ["Vitamin A", "Vitamin B2", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "Cream", "Cheese", "Pastry", "Spinach"],
    energyPer100g: 350, // kcal
    totalEnergy: 875, // kcal
});

export const proteinPancakes = () => ({
    name: "proteinPancakes",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 150, // grams
    proteinsPer100g: 20, // grams
    proteinType: "Animal-based (Whey Protein)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B12", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Oats", "Whey protein", "Eggs", "Banana"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const granola = () => ({
    name: "granola",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Oats, Nuts)",
    lipidsPer100g: 10, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 60, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["Oats", "Honey", "Nuts", "Dried fruits"],
    energyPer100g: 450, // kcal
    totalEnergy: 450, // kcal
});

export const poachedEggs = () => ({
    name: "poachedEggs",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 150, // grams
    proteinsPer100g: 13, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Eggs)",
    glucidsPer100g: 1, // grams
    glucidType: "Minimal (Eggs)",
    vitamins: ["Vitamin B12", "Vitamin D"],
    minerals: ["Selenium", "Phosphorus"],
    ingredients: ["Eggs", "Vinegar"],
    energyPer100g: 150, // kcal
    totalEnergy: 225, // kcal
});

export const breakfastQuinoa = () => ({
    name: "breakfastQuinoa",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 2, // grams
    lipidType: "Polyunsaturated fats (Quinoa)",
    glucidsPer100g: 21, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Magnesium", "Phosphorus"],
    ingredients: ["Quinoa", "Almond milk", "Honey", "Berries"],
    energyPer100g: 120, // kcal
    totalEnergy: 240, // kcal
});

export const shakshuka = () => ({
    name: "shakshuka",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 10, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 8, // grams
    glucidType: "Complex carbs (Tomatoes, Peppers)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Eggs", "Tomatoes", "Bell peppers", "Onions", "Spices"],
    energyPer100g: 150, // kcal
    totalEnergy: 375, // kcal
});

export const breakfastTacos = () => ({
    name: "breakfastTacos",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 9, // grams
    proteinType: "Animal-based (Eggs, Cheese)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated fats (Cheese)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Tortilla)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Sodium", "Calcium"],
    ingredients: ["Corn tortillas", "Eggs", "Cheese", "Salsa", "Avocado"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const muesli = () => ({
    name: "muesli",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Nuts, Oats)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 60, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Rolled oats", "Nuts", "Dried fruits", "Honey"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const sweetPotatoHash = () => ({
    name: "sweetPotatoHash",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 200, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Sweet Potatoes)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Sweet Potatoes)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Potassium", "Manganese"],
    ingredients: ["Sweet potatoes", "Bell peppers", "Onions", "Olive oil", "Spices"],
    energyPer100g: 130, // kcal
    totalEnergy: 260, // kcal
});

export const nutButterBananaToast = () => ({
    name: "nutButterBananaToast",
    type: "Main Dish",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Nut butter)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Nut butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Whole grain bread)",
    vitamins: ["Vitamin E", "Vitamin B6"],
    minerals: ["Magnesium", "Potassium"],
    ingredients: ["Whole grain bread", "Almond butter", "Banana"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const frittata = () => ({
    name: "frittata",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 200, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated fats (Cheese)",
    glucidsPer100g: 5, // grams
    glucidType: "Minimal (Vegetables)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "Spinach", "Cheese", "Tomatoes", "Onions"],
    energyPer100g: 200, // kcal
    totalEnergy: 400, // kcal
});

export const smoothie = () => ({
    name: "smoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Fruits, Nuts)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Calcium"],
    ingredients: ["Banana", "Spinach", "Almond milk", "Peanut butter"],
    energyPer100g: 130, // kcal
    totalEnergy: 390, // kcal
});

export const breakfastSandwich = () => ({
    name: "breakfastSandwich",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs, Bacon)",
    lipidsPer100g: 14, // grams
    lipidType: "Saturated fats (Bacon)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Bread)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Iron", "Sodium"],
    ingredients: ["Bread", "Eggs", "Bacon", "Cheese"],
    energyPer100g: 320, // kcal
    totalEnergy: 800, // kcal
});

export const ricePudding = () => ({
    name: "ricePudding",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Rice)",
    lipidsPer100g: 4, // grams
    lipidType: "Saturated fats (Milk)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Rice)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Rice", "Milk", "Sugar", "Cinnamon", "Vanilla"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const eggBenedict = () => ({
    name: "eggBenedict",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 20, // grams
    lipidType: "Saturated fats (Hollandaise sauce)",
    glucidsPer100g: 15, // grams
    glucidType: "Complex carbs (English muffin)",
    vitamins: ["Vitamin B2", "Vitamin B6"],
    minerals: ["Sodium", "Calcium"],
    ingredients: ["Eggs", "English muffin", "Ham", "Hollandaise sauce"],
    energyPer100g: 350, // kcal
    totalEnergy: 875, // kcal
});

export const cottageCheeseWithFruit = () => ({
    name: "cottageCheeseWithFruit",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 11, // grams
    proteinType: "Dairy (Cottage cheese)",
    lipidsPer100g: 4, // grams
    lipidType: "Saturated fats (Cottage cheese)",
    glucidsPer100g: 5, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin B12", "Vitamin A"],
    minerals: ["Calcium", "Potassium"],
    ingredients: ["Cottage cheese", "Mixed fruit", "Honey"],
    energyPer100g: 100, // kcal
    totalEnergy: 250, // kcal
});

export const berrySmoothieBowl = () => ({
    name: "berrySmoothieBowl",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Almonds)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Berries)",
    vitamins: ["Vitamin C", "Vitamin K"],
    minerals: ["Magnesium", "Potassium"],
    ingredients: ["Frozen berries", "Almond milk", "Granola", "Chia seeds"],
    energyPer100g: 120, // kcal
    totalEnergy: 360, // kcal
});

export const oatmealCookies = () => ({
    name: "oatmealCookies",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 60, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Oats", "Flour", "Butter", "Sugar", "Eggs"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const chiaSeedPudding = () => ({
    name: "chiaSeedPudding",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Chia seeds)",
    lipidsPer100g: 10, // grams
    lipidType: "Omega-3 (Chia seeds)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Honey)",
    vitamins: ["Vitamin B1", "Vitamin B2"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Chia seeds", "Almond milk", "Honey", "Berries"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const breakfastBowl = () => ({
    name: "breakfastBowl",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 300, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Quinoa, Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin B6", "Vitamin C"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Quinoa", "Eggs", "Avocado", "Spinach"],
    energyPer100g: 200, // kcal
    totalEnergy: 600, // kcal
});

export const eggsFlorentine = () => ({
    name: "eggsFlorentine",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated fats (Hollandaise sauce)",
    glucidsPer100g: 15, // grams
    glucidType: "Complex carbs (English muffin)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "English muffin", "Spinach", "Hollandaise sauce"],
    energyPer100g: 320, // kcal
    totalEnergy: 800, // kcal
});

export const fruitSalad = () => ({
    name: "fruitSalad",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 0, // grams
    lipidType: "Minimal (Fruits)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Mixed fruits (Apples, Berries, Oranges)"],
    energyPer100g: 80, // kcal
    totalEnergy: 160, // kcal
});

export const eggWhiteOmelette = () => ({
    name: "eggWhiteOmelette",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 11, // grams
    proteinType: "Animal-based (Egg whites)",
    lipidsPer100g: 5, // grams
    lipidType: "Minimal (Egg whites)",
    glucidsPer100g: 1, // grams
    glucidType: "Minimal (Vegetables)",
    vitamins: ["Vitamin B12", "Vitamin D"],
    minerals: ["Sodium", "Potassium"],
    ingredients: ["Egg whites", "Spinach", "Tomatoes", "Onions"],
    energyPer100g: 70, // kcal
    totalEnergy: 140, // kcal
});

export const cinnamonRolls = () => ({
    name: "cinnamonRolls",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 60, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1", "Calcium"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Flour", "Sugar", "Butter", "Cinnamon", "Milk"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const breakfastSmoothie = () => ({
    name: "breakfastSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Almonds)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin E"],
    minerals: ["Potassium", "Calcium"],
    ingredients: ["Banana", "Spinach", "Almond milk", "Peanut butter"],
    energyPer100g: 150, // kcal
    totalEnergy: 450, // kcal
});

export const breakfastGranolaBars = () => ({
    name: "breakfastGranolaBars",
    type: "Snack",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Nuts)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 60, // grams
    glucidType: "Simple carbs (Honey)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Oats", "Nuts", "Honey", "Dried fruits"],
    energyPer100g: 350, // kcal
    totalEnergy: 350, // kcal
});

export const peanutButterBananaSmoothie = () => ({
    name: "peanutButterBananaSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Peanut butter)",
    lipidsPer100g: 10, // grams
    lipidType: "Healthy fats (Peanut butter)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Banana)",
    vitamins: ["Vitamin E", "Vitamin B6"],
    minerals: ["Magnesium", "Potassium"],
    ingredients: ["Banana", "Peanut butter", "Almond milk"],
    energyPer100g: 160, // kcal
    totalEnergy: 480, // kcal
});

export const spinachFetaEggWrap = () => ({
    name: "spinachFetaEggWrap",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs, Cheese)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated fats (Feta cheese)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Wrap)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Whole wheat wrap", "Eggs", "Spinach", "Feta cheese"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const maplePecanOatmeal = () => ({
    name: "maplePecanOatmeal",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 250, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats, Nuts)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Pecans)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["Oats", "Pecans", "Maple syrup", "Milk"],
    energyPer100g: 200, // kcal
    totalEnergy: 500, // kcal
});

export const bananaPancakes = () => ({
    name: "bananaPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Flour, Banana)",
    lipidsPer100g: 6, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B6", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Banana", "Flour", "Eggs", "Sugar", "Butter"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const wholeGrainToastWithAvocado = () => ({
    name: "wholeGrainToastWithAvocado",
    type: "Main Dish",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Whole grains, Avocado)",
    lipidsPer100g: 12, // grams
    lipidType: "Monounsaturated fats (Avocado)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Whole grain bread)",
    vitamins: ["Vitamin K", "Vitamin E"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Whole grain bread", "Avocado", "Lemon", "Salt"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const hamEggs = () => ({
    name: "hamEggs",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 15, // grams
    proteinType: "Animal-based (Ham, Eggs)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated fats (Ham)",
    glucidsPer100g: 1, // grams
    glucidType: "Minimal (Eggs)",
    vitamins: ["Vitamin B12", "Vitamin A"],
    minerals: ["Sodium", "Iron"],
    ingredients: ["Ham", "Eggs", "Black pepper"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const tropicalSmoothie = () => ({
    name: "tropicalSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 1, // grams
    lipidType: "Minimal (Fruits)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Mango", "Pineapple", "Banana", "Coconut water"],
    energyPer100g: 90, // kcal
    totalEnergy: 270, // kcal
});

export const sausageBreakfastBowl = () => ({
    name: "sausageBreakfastBowl",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 14, // grams
    proteinType: "Animal-based (Sausage)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated fats (Sausage)",
    glucidsPer100g: 10, // grams
    glucidType: "Complex carbs (Potatoes)",
    vitamins: ["Vitamin B6", "Vitamin C"],
    minerals: ["Iron", "Sodium"],
    ingredients: ["Sausage", "Potatoes", "Eggs", "Spinach"],
    energyPer100g: 320, // kcal
    totalEnergy: 800, // kcal
});

export const overnightOats = () => ({
    name: "overnightOats",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Oats", "Almond milk", "Honey", "Chia seeds", "Fruits"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const spinachAndFetaWrap = () => ({
    name: "spinachAndFetaWrap",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Cheese)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated fats (Feta cheese)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Wrap)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Whole wheat wrap", "Spinach", "Feta cheese", "Tomatoes"],
    energyPer100g: 200, // kcal
    totalEnergy: 500, // kcal
});

export const veggieOmelette = () => ({
    name: "veggieOmelette",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 200, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 9, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 6, // grams
    glucidType: "Minimal (Vegetables)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Sodium", "Iron"],
    ingredients: ["Eggs", "Bell peppers", "Onions", "Spinach"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const carrotCakeOatmeal = () => ({
    name: "carrotCakeOatmeal",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin A", "Vitamin E"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Oats", "Carrots", "Almond milk", "Nuts", "Honey"],
    energyPer100g: 200, // kcal
    totalEnergy: 500, // kcal
});

export const fruitAndNutBars = () => ({
    name: "fruitAndNutBars",
    type: "Snack",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Nuts)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 55, // grams
    glucidType: "Simple carbs (Dried fruits)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Nuts", "Dried fruits", "Honey"],
    energyPer100g: 350, // kcal
    totalEnergy: 350, // kcal
});

export const chocolateProteinPancakes = () => ({
    name: "chocolateProteinPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Flour, Protein powder)",
    lipidsPer100g: 9, // grams
    lipidType: "Healthy fats (Cocoa)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B6", "Calcium"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Flour", "Cocoa powder", "Protein powder", "Eggs", "Milk"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const chocolateChiaPudding = () => ({
    name: "chocolateChiaPudding",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Chia seeds)",
    lipidsPer100g: 10, // grams
    lipidType: "Healthy fats (Cocoa)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1", "Calcium"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Chia seeds", "Cocoa powder", "Almond milk", "Honey"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const bakedEggsWithSpinach = () => ({
    name: "bakedEggsWithSpinach",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated fats (Cheese)",
    glucidsPer100g: 3, // grams
    glucidType: "Minimal (Vegetables)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "Spinach", "Cheese", "Milk"],
    energyPer100g: 220, // kcal
    totalEnergy: 550, // kcal
});

export const strawberryBananaSmoothie = () => ({
    name: "strawberryBananaSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 1, // grams
    lipidType: "Minimal (Fruits)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Calcium"],
    ingredients: ["Strawberries", "Banana", "Almond milk"],
    energyPer100g: 90, // kcal
    totalEnergy: 270, // kcal
});

export const breakfastEggsBenedict = () => ({
    name: "breakfastEggsBenedict",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated fats (Hollandaise sauce)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (English muffin)",
    vitamins: ["Vitamin B12", "Vitamin A"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "English muffin", "Hollandaise sauce", "Spinach"],
    energyPer100g: 350, // kcal
    totalEnergy: 1050, // kcal
});

export const breakfastQuinoaBowl = () => ({
    name: "breakfastQuinoaBowl",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin B6", "Vitamin C"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Quinoa", "Avocado", "Tomatoes", "Spinach"],
    energyPer100g: 250, // kcal
    totalEnergy: 625, // kcal
});

export const chocolateProteinShake = () => ({
    name: "chocolateProteinShake",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Protein powder)",
    lipidsPer100g: 6, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B6", "Calcium"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Protein powder", "Almond milk", "Banana"],
    energyPer100g: 180, // kcal
    totalEnergy: 540, // kcal
});

export const breakfastEggsAndSausage = () => ({
    name: "breakfastEggsAndSausage",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 300, // grams
    proteinsPer100g: 14, // grams
    proteinType: "Animal-based (Eggs, Sausage)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated fats (Sausage)",
    glucidsPer100g: 2, // grams
    glucidType: "Minimal (Vegetables)",
    vitamins: ["Vitamin B12", "Vitamin A"],
    minerals: ["Sodium", "Iron"],
    ingredients: ["Eggs", "Sausage", "Black pepper"],
    energyPer100g: 250, // kcal
    totalEnergy: 750, // kcal
});

export const breakfastTofuScramble = () => ({
    name: "breakfastTofuScramble",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Tofu)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 5, // grams
    glucidType: "Minimal (Vegetables)",
    vitamins: ["Vitamin B1", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Tofu", "Spinach", "Bell peppers", "Olive oil"],
    energyPer100g: 150, // kcal
    totalEnergy: 375, // kcal
});

export const blueberryMuffin = () => ({
    name: "blueberryMuffin",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 6, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Iron"],
    ingredients: ["flour", "sugar", "blueberries", "butter", "eggs"],
    energyPer100g: 300, // kcal
    totalEnergy: 300, // kcal
});

export const chocolateChipPancakes = () => ({
    name: "chocolateChipPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 9, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Iron"],
    ingredients: ["flour", "milk", "chocolate chips", "eggs", "butter"],
    energyPer100g: 370, // kcal
    totalEnergy: 555, // kcal
});

export const spicedAppleCiderDonuts = () => ({
    name: "spicedAppleCiderDonuts",
    type: "Dessert",
    mealType: "Snack, Breakfast",
    quantity: 120, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Potassium"],
    ingredients: ["apple cider", "flour", "sugar", "cinnamon", "butter"],
    energyPer100g: 370, // kcal
    totalEnergy: 444, // kcal
});

export const nutellaStuffedPancakes = () => ({
    name: "nutellaStuffedPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Nut)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Nut)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Iron"],
    ingredients: ["flour", "nutella", "milk", "eggs", "butter"],
    energyPer100g: 420, // kcal
    totalEnergy: 630, // kcal
});

export const greekYogurtParfait = () => ({
    name: "greekYogurtParfait",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Yogurt)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated fats (Yogurt)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Honey)",
    vitamins: ["Vitamin B12", "Vitamin D"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["Greek yogurt", "Granola", "Berries", "Honey"],
    energyPer100g: 120, // kcal
    totalEnergy: 300, // kcal
});

export const appleCinnamonOatmeal = () => ({
    name: "appleCinnamonOatmeal",
    type: "Main Dish",
    mealType: "Breakfast",
    quantity: 250, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Oats", "Apple", "Cinnamon", "Almonds"],
    energyPer100g: 190, // kcal
    totalEnergy: 475, // kcal
});

export const sweetPotatoPancakes = () => ({
    name: "sweetPotatoPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Sweet potato)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Sweet potato)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Sweet potato", "Flour", "Egg", "Coconut oil"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const spinachSmoothie = () => ({
    name: "spinachSmoothie",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Spinach)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 12, // grams
    glucidType: "Complex carbs (Banana)",
    vitamins: ["Vitamin K", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Spinach", "Banana", "Almond milk", "Honey"],
    energyPer100g: 80, // kcal
    totalEnergy: 200, // kcal
});

export const oatmealBreakfastCookies = () => ({
    name: "oatmealBreakfastCookies",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Oats, Sugar)",
    vitamins: ["Vitamin A", "Vitamin B6"],
    minerals: ["Magnesium", "Potassium"],
    ingredients: ["Oats", "Banana", "Coconut oil", "Honey"],
    energyPer100g: 210, // kcal
    totalEnergy: 315, // kcal
});

export const breakfastPasta = () => ({
    name: "breakfastPasta",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Pasta)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Pasta)",
    vitamins: ["Vitamin B1", "Vitamin B3"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Whole grain pasta", "Tomato sauce", "Spinach", "Parmesan cheese"],
    energyPer100g: 190, // kcal
    totalEnergy: 570, // kcal
});

export const coconutChiaPudding = () => ({
    name: "coconutChiaPudding",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Chia seeds)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Coconut milk)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Honey)",
    vitamins: ["Vitamin B1", "Vitamin C"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Chia seeds", "Coconut milk", "Honey", "Fruits"],
    energyPer100g: 210, // kcal
    totalEnergy: 525, // kcal
});

export const zucchiniFritters = () => ({
    name: "zucchiniFritters",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Zucchini)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 10, // grams
    glucidType: "Complex carbs (Flour)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Calcium"],
    ingredients: ["Zucchini", "Egg", "Flour", "Olive oil"],
    energyPer100g: 180, // kcal
    totalEnergy: 360, // kcal
});

export const quinoaBreakfastBowl = () => ({
    name: "quinoaBreakfastBowl",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin B6", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Quinoa", "Avocado", "Tomato", "Lemon juice"],
    energyPer100g: 210, // kcal
    totalEnergy: 630, // kcal
});

export const breakfastStuffedPeppers = () => ({
    name: "breakfastStuffedPeppers",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 300, // grams
    proteinsPer100g: 9, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Cheese)",
    glucidsPer100g: 12, // grams
    glucidType: "Complex carbs (Peppers)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Bell peppers", "Quinoa", "Cheese", "Herbs"],
    energyPer100g: 200, // kcal
    totalEnergy: 600, // kcal
});

export const cornmealMush = () => ({
    name: "cornmealMush",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Corn)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Cornmeal)",
    vitamins: ["Vitamin B6", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Cornmeal", "Vegetable broth", "Olive oil", "Cheese"],
    energyPer100g: 180, // kcal
    totalEnergy: 360, // kcal
});

export const granolaEnergyBites = () => ({
    name: "granolaEnergyBites",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Nuts)",
    lipidsPer100g: 10, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Calcium", "Magnesium"],
    ingredients: ["Oats", "Almonds", "Honey", "Dark chocolate"],
    energyPer100g: 290, // kcal
    totalEnergy: 435, // kcal
});

export const breakfastFruitSalad = () => ({
    name: "breakfastFruitSalad",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 1, // grams
    lipidType: "Healthy fats (Coconut)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Mixed fruits", "Coconut flakes", "Mint"],
    energyPer100g: 60, // kcal
    totalEnergy: 120, // kcal
});

export const breakfastQuiche = () => ({
    name: "breakfastQuiche",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 9, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 14, // grams
    lipidType: "Saturated fats (Cheese)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Pastry)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "Cream", "Cheese", "Pastry"],
    energyPer100g: 300, // kcal
    totalEnergy: 750, // kcal
});

export const spicyTofuScramble = () => ({
    name: "spicyTofuScramble",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 200, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Tofu)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Tofu)",
    glucidsPer100g: 5, // grams
    glucidType: "Complex carbs (Vegetables)",
    vitamins: ["Vitamin B12", "Vitamin D"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Tofu", "Spinach", "Bell peppers", "Spices"],
    energyPer100g: 130, // kcal
    totalEnergy: 260, // kcal
});

export const buckwheatPorridge = () => ({
    name: "buckwheatPorridge",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Buckwheat)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 22, // grams
    glucidType: "Complex carbs (Buckwheat)",
    vitamins: ["Vitamin B6", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Buckwheat", "Almond milk", "Fruits", "Nuts"],
    energyPer100g: 150, // kcal
    totalEnergy: 375, // kcal
});

export const savoryScones = () => ({
    name: "savoryScones",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 34, // grams
    glucidType: "Complex carbs (Flour)",
    vitamins: ["Vitamin B1", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Cheese", "Baking powder", "Butter"],
    energyPer100g: 230, // kcal
    totalEnergy: 460, // kcal
});

export const breakfastCrepes = () => ({
    name: "breakfastCrepes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 4, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Flour)",
    vitamins: ["Vitamin B2", "Vitamin A"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const baconEggBreakfastBowl = () => ({
    name: "baconEggBreakfastBowl",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 15, // grams
    proteinType: "Animal-based (Bacon, Eggs)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated fats (Bacon)",
    glucidsPer100g: 10, // grams
    glucidType: "Complex carbs (Vegetables)",
    vitamins: ["Vitamin B12", "Vitamin A"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Bacon", "Eggs", "Spinach", "Tomatoes"],
    energyPer100g: 350, // kcal
    totalEnergy: 1050, // kcal
});

export const fruitAndNutGranola = () => ({
    name: "fruitAndNutGranola",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Nuts, Seeds)",
    lipidsPer100g: 12, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 60, // grams
    glucidType: "Complex carbs (Oats, Dried fruits)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["Oats", "Mixed nuts", "Dried fruits", "Honey"],
    energyPer100g: 380, // kcal
    totalEnergy: 570, // kcal
});

export const breakfastCasserole = () => ({
    name: "breakfastCasserole",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Eggs, Sausage)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated fats (Sausage)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Bread)",
    vitamins: ["Vitamin A", "Vitamin B12"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Eggs", "Bread", "Sausage", "Cheese"],
    energyPer100g: 350, // kcal
    totalEnergy: 1050, // kcal
});

export const oatmealFruitBowl = () => ({
    name: "oatmealFruitBowl",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Oats", "Mixed fruits", "Nuts", "Honey"],
    energyPer100g: 190, // kcal
    totalEnergy: 475, // kcal
});

export const veggieBreakfastWrap = () => ({
    name: "veggieBreakfastWrap",
    type: "Main Dish",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Tofu)",
    lipidsPer100g: 9, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Wrap)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Whole grain wrap", "Tofu", "Spinach", "Tomato"],
    energyPer100g: 220, // kcal
    totalEnergy: 550, // kcal
});

export const mushroomQuinoaBreakfast = () => ({
    name: "mushroomQuinoaBreakfast",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 9, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin B6", "Vitamin C"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Quinoa", "Mushrooms", "Spinach", "Olive oil"],
    energyPer100g: 220, // kcal
    totalEnergy: 660, // kcal
});

export const savoryBreakfastPancakes = () => ({
    name: "savoryBreakfastPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Flour)",
    vitamins: ["Vitamin B2", "Vitamin A"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Milk", "Eggs", "Cheese"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const peanutButterSmoothie = () => ({
    name: "peanutButterSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Peanuts)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Peanut butter)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Banana)",
    vitamins: ["Vitamin B3", "Vitamin E"],
    minerals: ["Magnesium", "Potassium"],
    ingredients: ["Banana", "Peanut butter", "Almond milk", "Honey"],
    energyPer100g: 280, // kcal
    totalEnergy: 840, // kcal
});

export const fruitSmoothie = () => ({
    name: "fruitSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Yogurt)",
    lipidsPer100g: 3, // grams
    lipidType: "Healthy fats (Almond milk)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Banana", "Berries", "Yogurt", "Almond milk"],
    energyPer100g: 120, // kcal
    totalEnergy: 300, // kcal
});

export const eggAndSpinachWrap = () => ({
    name: "eggAndSpinachWrap",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Wrap)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Eggs", "Spinach", "Whole wheat wrap", "Feta cheese"],
    energyPer100g: 220, // kcal
    totalEnergy: 550, // kcal
});

export const mangoChiaParfait = () => ({
    name: "mangoChiaParfait",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Chia seeds)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Coconut milk)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Mango)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["Chia seeds", "Coconut milk", "Mango", "Honey"],
    energyPer100g: 250, // kcal
    totalEnergy: 625, // kcal
});

export const sweetPotatoFrittata = () => ({
    name: "sweetPotatoFrittata",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 9, // grams
    lipidType: "Saturated fats (Cheese)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Sweet potato)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Eggs", "Sweet potatoes", "Onion", "Cheddar cheese"],
    energyPer100g: 200, // kcal
    totalEnergy: 500, // kcal
});

export const nuttyGranolaBars = () => ({
    name: "nuttyGranolaBars",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Nuts)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin E", "Vitamin B1"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Oats", "Nuts", "Honey", "Peanut butter"],
    energyPer100g: 450, // kcal
    totalEnergy: 675, // kcal
});

export const appleCinnamonOvernightOats = () => ({
    name: "appleCinnamonOvernightOats",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 32, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Oats", "Apples", "Almond milk", "Cinnamon"],
    energyPer100g: 200, // kcal
    totalEnergy: 500, // kcal
});

export const spinachFetaQuiche = () => ({
    name: "spinachFetaQuiche",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 9, // grams
    proteinType: "Animal-based (Eggs, Feta)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Pastry)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Eggs", "Spinach", "Feta cheese", "Pastry crust"],
    energyPer100g: 320, // kcal
    totalEnergy: 800, // kcal
});

export const breakfastHashBowl = () => ({
    name: "breakfastHashBowl",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 11, // grams
    proteinType: "Animal-based (Sausage, Eggs)",
    lipidsPer100g: 14, // grams
    lipidType: "Saturated fats (Sausage)",
    glucidsPer100g: 25, // grams
    glucidType: "Complex carbs (Potatoes)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["Potatoes", "Sausage", "Eggs", "Bell peppers"],
    energyPer100g: 250, // kcal
    totalEnergy: 750, // kcal
});

export const tropicalFruitSalad = () => ({
    name: "tropicalFruitSalad",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 0.5, // grams
    lipidType: "Unsaturated fats (Coconut)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["Pineapple", "Mango", "Kiwi", "Coconut"],
    energyPer100g: 80, // kcal
    totalEnergy: 160, // kcal
});

export const chocolateChipMuffins = () => ({
    name: "chocolateChipMuffins",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar, Chocolate)",
    vitamins: ["Vitamin A", "Vitamin B1"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Sugar", "Butter", "Chocolate chips", "Eggs"],
    energyPer100g: 370, // kcal
    totalEnergy: 555, // kcal
});

export const coconutRicePudding = () => ({
    name: "coconutRicePudding",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Rice)",
    lipidsPer100g: 6, // grams
    lipidType: "Healthy fats (Coconut)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Rice)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Rice", "Coconut milk", "Sugar", "Vanilla"],
    energyPer100g: 200, // kcal
    totalEnergy: 400, // kcal
});

export const wholeWheatBagel = () => ({
    name: "wholeWheatBagel",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 2, // grams
    lipidType: "Unsaturated fats (Sesame seeds)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Wheat)",
    vitamins: ["Vitamin B1", "Vitamin B3"],
    minerals: ["Iron", "Zinc"],
    ingredients: ["Whole wheat flour", "Yeast", "Water", "Salt"],
    energyPer100g: 250, // kcal
    totalEnergy: 250, // kcal
});

export const savoryBreakfastBowl = () => ({
    name: "savoryBreakfastBowl",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 300, // grams
    proteinsPer100g: 11, // grams
    proteinType: "Animal-based (Eggs, Chicken)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin A", "Vitamin B6"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["Eggs", "Chicken", "Quinoa", "Spinach"],
    energyPer100g: 350, // kcal
    totalEnergy: 1050, // kcal
});

export const mixedBerryParfait = () => ({
    name: "mixedBerryParfait",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Yogurt)",
    lipidsPer100g: 2, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Berries)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Yogurt", "Mixed berries", "Honey", "Granola"],
    energyPer100g: 150, // kcal
    totalEnergy: 300, // kcal
});

export const spicyAvocadoEggToast = () => ({
    name: "spicyAvocadoEggToast",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Avocado)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Bread)",
    vitamins: ["Vitamin E", "Vitamin B6"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["Bread", "Avocado", "Egg", "Chili flakes"],
    energyPer100g: 280, // kcal
    totalEnergy: 420, // kcal
});

export const zucchiniBread = () => ({
    name: "zucchiniBread",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Zucchini)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Zucchini", "Flour", "Sugar", "Eggs", "Cinnamon"],
    energyPer100g: 270, // kcal
    totalEnergy: 540, // kcal
});

export const breakfastFriedRice = () => ({
    name: "breakfastFriedRice",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 250, // grams
    proteinsPer100g: 9, // grams
    proteinType: "Plant-based (Rice)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Peas)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Rice)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["Rice", "Eggs", "Peas", "Carrots", "Soy sauce"],
    energyPer100g: 300, // kcal
    totalEnergy: 750, // kcal
});

export const pumpkinPancakes = () => ({
    name: "pumpkinPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 6, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Pumpkin puree)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Pumpkin puree", "Milk", "Eggs", "Spices"],
    energyPer100g: 300, // kcal
    totalEnergy: 600, // kcal
});

export const berryQuinoaSalad = () => ({
    name: "berryQuinoaSalad",
    type: "Starter",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Walnuts)",
    glucidsPer100g: 25, // grams
    glucidType: "Complex carbs (Quinoa)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Quinoa", "Berries", "Walnuts", "Honey"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const oatmealFruitCups = () => ({
    name: "oatmealFruitCups",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin B1", "Vitamin B6"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Oats", "Almonds", "Honey", "Fruits"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const ricottaToastWithBerries = () => ({
    name: "ricottaToastWithBerries",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Animal-based (Ricotta)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 20, // grams
    glucidType: "Complex carbs (Bread)",
    vitamins: ["Vitamin B2", "Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["Ricotta cheese", "Bread", "Berries", "Honey"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const almondButterToast = () => ({
    name: "almondButterToast",
    type: "Starter",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Almonds)",
    lipidsPer100g: 15, // grams
    lipidType: "Healthy fats (Almond butter)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Bread)",
    vitamins: ["Vitamin E", "Vitamin B2"],
    minerals: ["Calcium", "Magnesium"],
    ingredients: ["Almond butter", "Bread", "Banana"],
    energyPer100g: 330, // kcal
    totalEnergy: 495, // kcal
});

export const eggWhiteFrittata = () => ({
    name: "eggWhiteFrittata",
    type: "Main Dish",
    mealType: "Breakfast, Brunch",
    quantity: 250, // grams
    proteinsPer100g: 12, // grams
    proteinType: "Animal-based (Egg whites)",
    lipidsPer100g: 4, // grams
    lipidType: "Unsaturated fats (Olive oil)",
    glucidsPer100g: 5, // grams
    glucidType: "Complex carbs (Vegetables)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Egg whites", "Spinach", "Tomatoes", "Onions"],
    energyPer100g: 100, // kcal
    totalEnergy: 250, // kcal
});

export const carrotZucchiniMuffins = () => ({
    name: "carrotZucchiniMuffins",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Carrots, Zucchini)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Carrots", "Zucchini", "Sugar", "Eggs"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const breakfastPitaPocket = () => ({
    name: "breakfastPitaPocket",
    type: "Main Dish",
    mealType: "Breakfast, Lunch",
    quantity: 200, // grams
    proteinsPer100g: 11, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Olive oil)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Pita bread)",
    vitamins: ["Vitamin B12", "Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Pita bread", "Eggs", "Spinach", "Feta cheese"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const orangeAlmondGranola = () => ({
    name: "orangeAlmondGranola",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 10, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Oats)",
    vitamins: ["Vitamin E", "Vitamin B6"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Oats", "Almonds", "Honey", "Orange zest"],
    energyPer100g: 300, // kcal
    totalEnergy: 600, // kcal
});

