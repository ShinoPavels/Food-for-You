// Dessert database 

export const chocolateCake = () => ({
    name: "chocolateCake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 20, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 55, // grams
    glucidType: "Complex carbs (Flour, Sugar)",
    vitamins: ["Vitamin B1", "Vitamin B2", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter", "baking powder", "milk"],
    energyPer100g: 450, // kcal
    totalEnergy: 450, // kcal
});

export const applePie = () => ({
    name: "applePie",
    type: "Dessert",
    mealType: "Lunch, Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 10, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 60, // grams
    glucidType: "Complex carbs (Apples, Sugar)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Calcium", "Potassium"],
    ingredients: ["apples", "flour", "sugar", "butter", "cinnamon", "nutmeg"],
    energyPer100g: 300, // kcal
    totalEnergy: 450, // kcal
});

export const cheesecake = () => ({
    name: "cheesecake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Animal-based (Cream Cheese)",
    lipidsPer100g: 22, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin B12"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["cream cheese", "sugar", "eggs", "vanilla extract", "graham cracker crust"],
    energyPer100g: 350, // kcal
    totalEnergy: 420, // kcal
});

export const tiramisu = () => ({
    name: "tiramisu",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Mascarpone)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar, Coffee)",
    vitamins: ["Vitamin B2", "Vitamin B5"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["mascarpone cheese", "ladyfingers", "coffee", "sugar", "cocoa powder", "eggs"],
    energyPer100g: 420, // kcal
    totalEnergy: 630, // kcal
});

export const brownies = () => ({
    name: "brownies",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin B6", "Vitamin E"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["chocolate", "butter", "sugar", "eggs", "flour", "vanilla extract"],
    energyPer100g: 450, // kcal
    totalEnergy: 450, // kcal
});

export const pannaCotta = () => ({
    name: "pannaCotta",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Animal-based (Cream)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 22, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin B2"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["heavy cream", "sugar", "gelatin", "vanilla"],
    energyPer100g: 370, // kcal
    totalEnergy: 444, // kcal
});

export const fruitSalad = () => ({
    name: "fruitSalad",
    type: "Dessert",
    mealType: "Breakfast, Lunch, Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 0.5, // grams
    lipidType: "Unsaturated Fats (Avocado, if included)",
    glucidsPer100g: 15, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["various fruits (banana, apple, berries, etc.)", "honey (optional)"],
    energyPer100g: 60, // kcal
    totalEnergy: 90, // kcal
});

export const lemonMeringuePie = () => ({
    name: "lemonMeringuePie",
    type: "Dessert",
    mealType: "Lunch, Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Animal-based (Egg Whites)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Calcium", "Potassium"],
    ingredients: ["lemon juice", "sugar", "eggs", "butter", "pie crust"],
    energyPer100g: 320, // kcal
    totalEnergy: 480, // kcal
});

export const pannaCottaVanilla = () => ({
    name: "pannaCottaVanilla",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Cream)",
    lipidsPer100g: 16, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["cream", "sugar", "gelatin", "vanilla"],
    energyPer100g: 340, // kcal
    totalEnergy: 408, // kcal
});

export const carrotCake = () => ({
    name: "carrotCake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 10, // grams
    lipidType: "Unsaturated Fats (Vegetable Oil)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Carrots, Sugar)",
    vitamins: ["Vitamin A", "Vitamin K"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["carrots", "flour", "sugar", "eggs", "vegetable oil", "baking powder", "cinnamon"],
    energyPer100g: 380, // kcal
    totalEnergy: 380, // kcal
});

export const chocolateMousse = () => ({
    name: "chocolateMousse",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 25, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin B"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["dark chocolate", "eggs", "sugar", "heavy cream"],
    energyPer100g: 450, // kcal
    totalEnergy: 540, // kcal
});

export const fudgeBrownies = () => ({
    name: "fudgeBrownies",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 55, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin E", "Vitamin B"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["butter", "sugar", "flour", "eggs", "cocoa powder"],
    energyPer100g: 480, // kcal
    totalEnergy: 480, // kcal
});

export const strawberryShortcake = () => ({
    name: "strawberryShortcake",
    type: "Dessert",
    mealType: "Lunch, Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Cream)",
    glucidsPer100g: 60, // grams
    glucidType: "Simple carbs (Sugar, Berries)",
    vitamins: ["Vitamin C"],
    minerals: ["Calcium", "Potassium"],
    ingredients: ["strawberries", "whipped cream", "sugar", "biscuits"],
    energyPer100g: 350, // kcal
    totalEnergy: 525, // kcal
});

export const bananaBread = () => ({
    name: "bananaBread",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 5, // grams
    lipidType: "Unsaturated Fats (Vegetable Oil)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Bananas, Flour)",
    vitamins: ["Vitamin B6", "Vitamin C"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["bananas", "flour", "sugar", "eggs", "baking powder"],
    energyPer100g: 220, // kcal
    totalEnergy: 220, // kcal
});

export const ricePudding = () => ({
    name: "ricePudding",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Rice)",
    lipidsPer100g: 4, // grams
    lipidType: "Saturated Fats (Milk)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Rice, Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["rice", "milk", "sugar", "cinnamon"],
    energyPer100g: 150, // kcal
    totalEnergy: 225, // kcal
});

export const coconutMacaroons = () => ({
    name: "coconutMacaroons",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Coconut)",
    lipidsPer100g: 20, // grams
    lipidType: "Saturated Fats (Coconut Oil)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B6"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["coconut", "sugar", "egg whites"],
    energyPer100g: 450, // kcal
    totalEnergy: 450, // kcal
});

export const chocolateChipCookies = () => ({
    name: "chocolateChipCookies",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar, Chocolate)",
    vitamins: ["Vitamin B2"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["flour", "butter", "sugar", "eggs", "chocolate chips"],
    energyPer100g: 480, // kcal
    totalEnergy: 480, // kcal
});

export const chocolateEclair = () => ({
    name: "chocolateEclair",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Animal-based (Cream, Eggs)",
    lipidsPer100g: 14, // grams
    lipidType: "Saturated Fats (Chocolate, Cream)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar, Flour)",
    vitamins: ["Vitamin A", "Vitamin B"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["choux pastry", "cream", "chocolate ganache"],
    energyPer100g: 350, // kcal
    totalEnergy: 350, // kcal
});

export const tiramisuCupcakes = () => ({
    name: "tiramisuCupcakes",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Mascarpone, Eggs)",
    lipidsPer100g: 16, // grams
    lipidType: "Saturated Fats (Mascarpone)",
    glucidsPer100g: 38, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["mascarpone", "coffee", "sugar", "ladyfingers", "cocoa powder"],
    energyPer100g: 410, // kcal
    totalEnergy: 492, // kcal
});

export const pavlova = () => ({
    name: "pavlova",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Egg Whites)",
    lipidsPer100g: 1, // grams
    lipidType: "Minimal Fats",
    glucidsPer100g: 80, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["egg whites", "sugar", "cornstarch", "vanilla", "whipped cream", "fruits"],
    energyPer100g: 350, // kcal
    totalEnergy: 525, // kcal
});

export const chocolateFudgeCake = () => ({
    name: "chocolateFudgeCake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 60, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin B1", "Vitamin B2"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["dark chocolate", "butter", "sugar", "eggs", "flour"],
    energyPer100g: 450, // kcal
    totalEnergy: 675, // kcal
});

export const eclair = () => ({
    name: "eclair",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs, Cream)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 38, // grams
    glucidType: "Simple carbs (Sugar, Flour)",
    vitamins: ["Vitamin A", "Vitamin D"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["choux pastry", "whipped cream", "chocolate glaze"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const custard = () => ({
    name: "custard",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Animal-based (Milk, Eggs)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Milk)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin B12"],
    minerals: ["Calcium", "Sodium"],
    ingredients: ["milk", "sugar", "egg yolks", "vanilla"],
    energyPer100g: 150, // kcal
    totalEnergy: 150, // kcal
});

export const raspberrySorbet = () => ({
    name: "raspberrySorbet",
    type: "Dessert",
    mealType: "Snack",
    quantity: 150, // grams
    proteinsPer100g: 0.5, // grams
    proteinType: "Plant-based (Fruits)",
    lipidsPer100g: 0, // grams
    lipidType: "None",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Raspberries, Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Manganese", "Magnesium"],
    ingredients: ["raspberries", "sugar", "lemon juice"],
    energyPer100g: 120, // kcal
    totalEnergy: 180, // kcal
});

export const chocolatePudding = () => ({
    name: "chocolatePudding",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Milk, Eggs)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B6"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["cocoa powder", "sugar", "milk", "cornstarch"],
    energyPer100g: 180, // kcal
    totalEnergy: 270, // kcal
});

export const baklava = () => ({
    name: "baklava",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Nuts, Wheat)",
    lipidsPer100g: 15, // grams
    lipidType: "Unsaturated Fats (Nuts)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin E", "Vitamin B1"],
    minerals: ["Calcium", "Magnesium"],
    ingredients: ["phyllo dough", "walnuts", "sugar", "butter", "honey"],
    energyPer100g: 350, // kcal
    totalEnergy: 350, // kcal
});

export const pumpkinPie = () => ({
    name: "pumpkinPie",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 10, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 35, // grams
    glucidType: "Complex carbs (Pumpkin, Sugar)",
    vitamins: ["Vitamin A", "Vitamin C"],
    minerals: ["Iron", "Potassium"],
    ingredients: ["pumpkin puree", "sugar", "eggs", "spices", "pie crust"],
    energyPer100g: 260, // kcal
    totalEnergy: 390, // kcal
});

export const vanillaIceCream = () => ({
    name: "vanillaIceCream",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 7, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["milk", "cream", "sugar", "vanilla"],
    energyPer100g: 210, // kcal
    totalEnergy: 210, // kcal
});

export const appleCrisp = () => ({
    name: "appleCrisp",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Apples, Sugar)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["apples", "sugar", "oats", "flour", "butter"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const keyLimePie = () => ({
    name: "keyLimePie",
    type: "Dessert",
    mealType: "Lunch, Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 9, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 48, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Calcium", "Potassium"],
    ingredients: ["lime juice", "sugar", "eggs", "sweetened condensed milk", "pie crust"],
    energyPer100g: 290, // kcal
    totalEnergy: 435, // kcal
});

export const peachMelba = () => ({
    name: "peachMelba",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Peaches)",
    lipidsPer100g: 5, // grams
    lipidType: "Minimal Fats",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Peaches, Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["peaches", "raspberry sauce", "ice cream"],
    energyPer100g: 130, // kcal
    totalEnergy: 156, // kcal
});

export const chocolateCoveredStrawberries = () => ({
    name: "chocolateCoveredStrawberries",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 100, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Strawberries)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar, Strawberries)",
    vitamins: ["Vitamin C"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["strawberries", "dark chocolate"],
    energyPer100g: 250, // kcal
    totalEnergy: 250, // kcal
});

export const fruitTart = () => ({
    name: "fruitTart",
    type: "Dessert",
    mealType: "Lunch, Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar, Fruits)",
    vitamins: ["Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["pie crust", "fruits", "sugar", "cream"],
    energyPer100g: 280, // kcal
    totalEnergy: 420, // kcal
});

export const blueberryMuffin = () => ({
    name: "blueberryMuffin",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 5, // grams
    lipidType: "Unsaturated Fats (Vegetable Oil)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sugar, Blueberries)",
    vitamins: ["Vitamin C"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["flour", "sugar", "blueberries", "eggs", "milk"],
    energyPer100g: 260, // kcal
    totalEnergy: 260, // kcal
});

export const chocolateSouffle = () => ({
    name: "chocolateSouffle",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs, Milk)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["dark chocolate", "eggs", "sugar", "butter"],
    energyPer100g: 300, // kcal
    totalEnergy: 450, // kcal
});

export const gelato = () => ({
    name: "gelato",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["milk", "sugar", "flavoring"],
    energyPer100g: 200, // kcal
    totalEnergy: 200, // kcal
});

export const oatmealCookies = () => ({
    name: "oatmealCookies",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats, Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Oats, Sugar)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["oats", "flour", "sugar", "butter", "raisins"],
    energyPer100g: 350, // kcal
    totalEnergy: 350, // kcal
});

export const chocolateTart = () => ({
    name: "chocolateTart",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Wheat, Cocoa)",
    lipidsPer100g: 14, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin B2"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["dark chocolate", "butter", "sugar", "eggs", "flour"],
    energyPer100g: 400, // kcal
    totalEnergy: 600, // kcal
});

export const chocolateDippedBananas = () => ({
    name: "chocolateDippedBananas",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 100, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Bananas)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Banana, Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["bananas", "dark chocolate"],
    energyPer100g: 250, // kcal
    totalEnergy: 250, // kcal
});

export const snickerdoodleCookies = () => ({
    name: "snickerdoodleCookies",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Wheat, Eggs)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Calcium", "Iron"],
    ingredients: ["flour", "sugar", "butter", "eggs", "cinnamon"],
    energyPer100g: 420, // kcal
    totalEnergy: 420, // kcal
});

export const chocolatePecanPie = () => ({
    name: "chocolatePecanPie",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Nuts)",
    lipidsPer100g: 22, // grams
    lipidType: "Unsaturated Fats (Nuts)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin E"],
    minerals: ["Calcium", "Magnesium"],
    ingredients: ["pecans", "chocolate", "sugar", "corn syrup", "pie crust"],
    energyPer100g: 400, // kcal
    totalEnergy: 600, // kcal
});

export const macaron = () => ({
    name: "macaron",
    type: "Dessert",
    mealType: "Snack",
    quantity: 50, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Almonds)",
    lipidsPer100g: 12, // grams
    lipidType: "Unsaturated Fats (Almonds)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin E"],
    minerals: ["Magnesium"],
    ingredients: ["almond flour", "egg whites", "sugar", "food coloring", "filling"],
    energyPer100g: 400, // kcal
    totalEnergy: 200, // kcal
});

export const orangeSorbet = () => ({
    name: "orangeSorbet",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Oranges)",
    lipidsPer100g: 0.2, // grams
    lipidType: "Minimal Fats",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Sugar, Oranges)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["orange juice", "sugar", "water"],
    energyPer100g: 100, // kcal
    totalEnergy: 100, // kcal
});

export const almondCake = () => ({
    name: "almondCake",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 120, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Almonds)",
    lipidsPer100g: 15, // grams
    lipidType: "Unsaturated Fats (Almonds)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin E"],
    minerals: ["Calcium", "Magnesium"],
    ingredients: ["almond flour", "sugar", "butter", "eggs", "flour"],
    energyPer100g: 350, // kcal
    totalEnergy: 420, // kcal
});

export const coconutCreamPie = () => ({
    name: "coconutCreamPie",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Coconut)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated Fats (Coconut)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Sodium"],
    ingredients: ["coconut cream", "sugar", "pie crust", "eggs"],
    energyPer100g: 400, // kcal
    totalEnergy: 600, // kcal
});

export const gingerbread = () => ({
    name: "gingerbread",
    type: "Dessert",
    mealType: "Snack, Holiday Treat",
    quantity: 70, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 65, // grams
    glucidType: "Complex carbs (Sugar, Molasses)",
    vitamins: ["Vitamin A"],
    minerals: ["Iron"],
    ingredients: ["flour", "sugar", "ginger", "spices", "molasses", "butter"],
    energyPer100g: 350, // kcal
    totalEnergy: 245, // kcal
});

export const chocolateBavarianCream = () => ({
    name: "chocolateBavarianCream",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Iron"],
    ingredients: ["chocolate", "cream", "sugar", "gelatin", "vanilla"],
    energyPer100g: 350, // kcal
    totalEnergy: 420, // kcal
});

export const moltenChocolateCake = () => ({
    name: "moltenChocolateCake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Calcium"],
    ingredients: ["dark chocolate", "butter", "eggs", "sugar", "flour"],
    energyPer100g: 500, // kcal
    totalEnergy: 500, // kcal
});

export const chocolateBrownies = () => ({
    name: "chocolateBrownies",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 100, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin B2"],
    minerals: ["Iron"],
    ingredients: ["butter", "sugar", "flour", "cocoa powder", "eggs"],
    energyPer100g: 450, // kcal
    totalEnergy: 450, // kcal
});

export const chocolateCoconutBalls = () => ({
    name: "chocolateCoconutBalls",
    type: "Dessert",
    mealType: "Snack",
    quantity: 30, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Coconut)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated Fats (Coconut)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin E"],
    minerals: ["Iron"],
    ingredients: ["coconut", "chocolate", "sugar", "butter"],
    energyPer100g: 500, // kcal
    totalEnergy: 150, // kcal
});

export const vanillaCupcake = () => ({
    name: "vanillaCupcake",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 80, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 9, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["flour", "sugar", "butter", "eggs", "vanilla"],
    energyPer100g: 400, // kcal
    totalEnergy: 320, // kcal
});

export const peachCobbler = () => ({
    name: "peachCobbler",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["peaches", "sugar", "flour", "butter"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const frozenYogurt = () => ({
    name: "frozenYogurt",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Yogurt)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated Fats (Milk)",
    glucidsPer100g: 20, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B12"],
    minerals: ["Calcium"],
    ingredients: ["yogurt", "sugar", "vanilla"],
    energyPer100g: 120, // kcal
    totalEnergy: 180, // kcal
});

export const bananaSplit = () => ({
    name: "bananaSplit",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Banana)",
    lipidsPer100g: 10, // grams
    lipidType: "Unsaturated Fats (Nuts, Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Banana, Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["banana", "ice cream", "chocolate syrup", "nuts", "whipped cream"],
    energyPer100g: 350, // kcal
    totalEnergy: 700, // kcal
});

export const fruitSmoothie = () => ({
    name: "fruitSmoothie",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Fruit)",
    lipidsPer100g: 2, // grams
    lipidType: "Unsaturated Fats (Nuts)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Fruits, Yogurt)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Potassium", "Magnesium"],
    ingredients: ["banana", "berries", "yogurt", "honey"],
    energyPer100g: 100, // kcal
    totalEnergy: 250, // kcal
});

export const stickyRiceMango = () => ({
    name: "stickyRiceMango",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Rice)",
    lipidsPer100g: 5, // grams
    lipidType: "Unsaturated Fats (Coconut Milk)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sticky Rice, Mango)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["sticky rice", "coconut milk", "mango", "sugar"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const chocolatePeanutButterBars = () => ({
    name: "chocolatePeanutButterBars",
    type: "Dessert",
    mealType: "Snack",
    quantity: 50, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Peanuts)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Chocolate)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Sugar, Oats)",
    vitamins: ["Vitamin E"],
    minerals: ["Iron"],
    ingredients: ["peanut butter", "chocolate", "oats", "sugar"],
    energyPer100g: 450, // kcal
    totalEnergy: 225, // kcal
});

export const pecanPie = () => ({
    name: "pecanPie",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Pecans)",
    lipidsPer100g: 15, // grams
    lipidType: "Unsaturated Fats (Pecans)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar, Corn Syrup)",
    vitamins: ["Vitamin E"],
    minerals: ["Magnesium"],
    ingredients: ["pecans", "sugar", "corn syrup", "eggs", "pie crust"],
    energyPer100g: 450, // kcal
    totalEnergy: 675, // kcal
});

export const matchaGreenTeaCake = () => ({
    name: "matchaGreenTeaCake",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Oil)",
    glucidsPer100g: 45, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin A"],
    minerals: ["Iron"],
    ingredients: ["matcha powder", "flour", "sugar", "eggs", "butter"],
    energyPer100g: 280, // kcal
    totalEnergy: 280, // kcal
});

export const caramelFlan = () => ({
    name: "caramelFlan",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["eggs", "milk", "sugar", "vanilla"],
    energyPer100g: 300, // kcal
    totalEnergy: 360, // kcal
});

export const blueberryPie = () => ({
    name: "blueberryPie",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Unsaturated Fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Iron"],
    ingredients: ["blueberries", "sugar", "butter", "flour", "cornstarch"],
    energyPer100g: 270, // kcal
    totalEnergy: 405, // kcal
});

export const profiteroles = () => ({
    name: "profiteroles",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar, Flour)",
    vitamins: ["Vitamin B2"],
    minerals: ["Calcium"],
    ingredients: ["choux pastry", "chocolate sauce", "cream"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const chocolateMintBrownies = () => ({
    name: "chocolateMintBrownies",
    type: "Dessert",
    mealType: "Snack, Dinner",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin B2"],
    minerals: ["Iron"],
    ingredients: ["cocoa powder", "butter", "sugar", "eggs", "mint extract"],
    energyPer100g: 460, // kcal
    totalEnergy: 460, // kcal
});

export const cinnamonRolls = () => ({
    name: "cinnamonRolls",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin B1"],
    minerals: ["Calcium"],
    ingredients: ["flour", "sugar", "cinnamon", "butter", "milk"],
    energyPer100g: 320, // kcal
    totalEnergy: 480, // kcal
});

export const orangeUpsideDownCake = () => ({
    name: "orangeUpsideDownCake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 120, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 38, // grams
    glucidType: "Complex carbs (Sugar, Flour)",
    vitamins: ["Vitamin C"],
    minerals: ["Calcium"],
    ingredients: ["oranges", "sugar", "flour", "butter", "eggs"],
    energyPer100g: 300, // kcal
    totalEnergy: 360, // kcal
});

export const honeycombToffee = () => ({
    name: "honeycombToffee",
    type: "Dessert",
    mealType: "Snack",
    quantity: 100, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Sugar)",
    lipidsPer100g: 2, // grams
    lipidType: "Minimal Fats",
    glucidsPer100g: 70, // grams
    glucidType: "Simple carbs (Sugar, Honey)",
    vitamins: ["None"],
    minerals: ["None"],
    ingredients: ["sugar", "baking soda", "honey"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const strawberryCheesecake = () => ({
    name: "strawberryCheesecake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Cream Cheese)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar, Graham Cracker)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["cream cheese", "sugar", "strawberries", "graham crackers", "butter"],
    energyPer100g: 380, // kcal
    totalEnergy: 570, // kcal
});

export const chocolateCoconutPie = () => ({
    name: "chocolateCoconutPie",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Coconut)",
    lipidsPer100g: 20, // grams
    lipidType: "Saturated Fats (Coconut)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin E"],
    minerals: ["Magnesium"],
    ingredients: ["coconut milk", "dark chocolate", "sugar", "coconut flakes"],
    energyPer100g: 450, // kcal
    totalEnergy: 450, // kcal
});

export const vanillaBeanIceCream = () => ({
    name: "vanillaBeanIceCream",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 28, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["milk", "cream", "sugar", "vanilla"],
    energyPer100g: 250, // kcal
    totalEnergy: 375, // kcal
});

export const whiteChocolateRaspberryCheesecake = () => ({
    name: "whiteChocolateRaspberryCheesecake",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Cream Cheese)",
    lipidsPer100g: 14, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 32, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["cream cheese", "white chocolate", "raspberries", "sugar", "crust"],
    energyPer100g: 400, // kcal
    totalEnergy: 600, // kcal
});

export const gingerbreadCookies = () => ({
    name: "gingerbreadCookies",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 50, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 6, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 65, // grams
    glucidType: "Complex carbs (Sugar, Molasses)",
    vitamins: ["Vitamin A"],
    minerals: ["Iron"],
    ingredients: ["ginger", "cinnamon", "molasses", "flour", "butter"],
    energyPer100g: 380, // kcal
    totalEnergy: 190, // kcal
});

export const chocolateRaspberryTrifle = () => ({
    name: "chocolateRaspberryTrifle",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Cream)",
    lipidsPer100g: 12, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["chocolate cake", "raspberries", "cream", "sugar"],
    energyPer100g: 360, // kcal
    totalEnergy: 720, // kcal
});

export const caramelAppleDumpCake = () => ({
    name: "caramelAppleDumpCake",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Apple)",
    lipidsPer100g: 7, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Iron"],
    ingredients: ["apples", "sugar", "cake mix", "butter"],
    energyPer100g: 320, // kcal
    totalEnergy: 480, // kcal
});

export const chocolateChipPancakes = () => ({
    name: "chocolateChipPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Calcium"],
    ingredients: ["flour", "sugar", "chocolate chips", "milk", "butter"],
    energyPer100g: 350, // kcal
    totalEnergy: 700, // kcal
});

export const pumpkinSpiceLatte = () => ({
    name: "pumpkinSpiceLatte",
    type: "Dessert",
    mealType: "Snack",
    quantity: 250, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Milk)",
    lipidsPer100g: 6, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 38, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["milk", "sugar", "pumpkin puree", "spices", "cream"],
    energyPer100g: 250, // kcal
    totalEnergy: 625, // kcal
});

export const vanillaPudding = () => ({
    name: "vanillaPudding",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["milk", "sugar", "vanilla", "cornstarch"],
    energyPer100g: 200, // kcal
    totalEnergy: 300, // kcal
});

export const cherryClafoutis = () => ({
    name: "cherryClafoutis",
    type: "Dessert",
    mealType: "Dinner, Snack",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["cherries", "flour", "sugar", "milk", "eggs"],
    energyPer100g: 240, // kcal
    totalEnergy: 360, // kcal
});

export const greekYogurtParfait = () => ({
    name: "greekYogurtParfait",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Animal-based (Yogurt)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated fats (Yogurt)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Honey, Fruits)",
    vitamins: ["Vitamin B2", "Vitamin D"],
    minerals: ["Calcium", "Phosphorus"],
    ingredients: ["Greek yogurt", "Honey", "Granola", "Berries"],
    energyPer100g: 120, // kcal
    totalEnergy: 360, // kcal
});

export const cherryAlmondGranola = () => ({
    name: "cherryAlmondGranola",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 8, // grams
    proteinType: "Plant-based (Nuts)",
    lipidsPer100g: 12, // grams
    lipidType: "Healthy fats (Almonds)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Honey)",
    vitamins: ["Vitamin E", "Vitamin B1"],
    minerals: ["Magnesium", "Iron"],
    ingredients: ["Oats", "Almonds", "Dried cherries", "Honey"],
    energyPer100g: 400, // kcal
    totalEnergy: 400, // kcal
});

export const berrySmoothieBowl = () => ({
    name: "berrySmoothieBowl",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 300, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Yogurt, Fruits)",
    lipidsPer100g: 4, // grams
    lipidType: "Minimal (Fruits)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Calcium", "Potassium"],
    ingredients: ["Frozen berries", "Yogurt", "Banana", "Granola"],
    energyPer100g: 150, // kcal
    totalEnergy: 450, // kcal
});

export const oatmealBananaCookies = () => ({
    name: "oatmealBananaCookies",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 3, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Banana)",
    vitamins: ["Vitamin A", "Vitamin B6"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Oats", "Banana", "Coconut oil", "Chocolate chips"],
    energyPer100g: 200, // kcal
    totalEnergy: 200, // kcal
});

export const pumpkinSpicePancakes = () => ({
    name: "pumpkinSpicePancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin B1"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Flour", "Pumpkin puree", "Egg", "Sugar", "Spices"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const matchaPancakes = () => ({
    name: "matchaPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 5, // grams
    lipidType: "Healthy fats (Coconut oil)",
    glucidsPer100g: 30, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1", "Vitamin E"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Flour", "Matcha powder", "Egg", "Sugar"],
    energyPer100g: 220, // kcal
    totalEnergy: 440, // kcal
});

export const bananaNutBread = () => ({
    name: "bananaNutBread",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Flour)",
    lipidsPer100g: 8, // grams
    lipidType: "Healthy fats (Walnuts)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar, Banana)",
    vitamins: ["Vitamin B6", "Vitamin E"],
    minerals: ["Magnesium", "Potassium"],
    ingredients: ["Flour", "Banana", "Walnuts", "Sugar", "Egg"],
    energyPer100g: 270, // kcal
    totalEnergy: 405, // kcal
});

export const appleOatmealPancakes = () => ({
    name: "appleOatmealPancakes",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 4, // grams
    lipidType: "Healthy fats (Butter)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A", "Vitamin B1"],
    minerals: ["Iron", "Calcium"],
    ingredients: ["Oats", "Apple", "Egg", "Butter", "Sugar"],
    energyPer100g: 250, // kcal
    totalEnergy: 500, // kcal
});

export const quinoaFruitBowl = () => ({
    name: "quinoaFruitBowl",
    type: "Dessert",
    mealType: "Breakfast, Snack",
    quantity: 250, // grams
    proteinsPer100g: 10, // grams
    proteinType: "Plant-based (Quinoa)",
    lipidsPer100g: 7, // grams
    lipidType: "Healthy fats (Nuts)",
    glucidsPer100g: 30, // grams
    glucidType: "Complex carbs (Fruits)",
    vitamins: ["Vitamin C", "Vitamin A"],
    minerals: ["Iron", "Magnesium"],
    ingredients: ["Quinoa", "Mixed fruits", "Honey"],
    energyPer100g: 200, // kcal
    totalEnergy: 500, // kcal
});

export const redVelvetCake = () => ({
    name: "redVelvetCake",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 6, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Iron"],
    ingredients: ["red cocoa powder", "buttermilk", "sugar", "butter", "cream cheese frosting"],
    energyPer100g: 420, // kcal
    totalEnergy: 840, // kcal
});

export const churros = () => ({
    name: "churros",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 100, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Oil)",
    glucidsPer100g: 60, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Iron"],
    ingredients: ["flour", "sugar", "water", "cinnamon", "oil"],
    energyPer100g: 370, // kcal
    totalEnergy: 370, // kcal
});

export const raspberryMousse = () => ({
    name: "raspberryMousse",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Fruit)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Iron"],
    ingredients: ["raspberries", "cream", "sugar", "gelatin"],
    energyPer100g: 230, // kcal
    totalEnergy: 345, // kcal
});

export const sweetPotatoPie = () => ({
    name: "sweetPotatoPie",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Vegetable)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Potassium"],
    ingredients: ["sweet potatoes", "sugar", "flour", "butter", "eggs"],
    energyPer100g: 290, // kcal
    totalEnergy: 580, // kcal
});

export const pannaCottaCoconut = () => ({
    name: "pannaCottaCoconut",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Plant-based (Coconut)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Coconut Cream)",
    glucidsPer100g: 18, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Calcium"],
    ingredients: ["coconut milk", "gelatin", "sugar", "vanilla"],
    energyPer100g: 290, // kcal
    totalEnergy: 435, // kcal
});

export const chocolateMilkshake = () => ({
    name: "chocolateMilkshake",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 250, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 6, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 25, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B12"],
    minerals: ["Calcium"],
    ingredients: ["milk", "chocolate syrup", "ice cream"],
    energyPer100g: 170, // kcal
    totalEnergy: 425, // kcal
});

export const appleCrumble = () => ({
    name: "appleCrumble",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 2, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 50, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["apples", "sugar", "flour", "butter", "oats"],
    energyPer100g: 320, // kcal
    totalEnergy: 640, // kcal
});

export const chocolateFondue = () => ({
    name: "chocolateFondue",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Cocoa)",
    lipidsPer100g: 20, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 45, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Iron"],
    ingredients: ["dark chocolate", "cream", "sugar"],
    energyPer100g: 540, // kcal
    totalEnergy: 1080, // kcal
});

export const almondJoyBars = () => ({
    name: "almondJoyBars",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Almonds)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated Fats (Coconut Oil)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin E"],
    minerals: ["Magnesium"],
    ingredients: ["almonds", "coconut", "chocolate", "sugar"],
    energyPer100g: 470, // kcal
    totalEnergy: 705, // kcal
});

export const redWinePoachedPears = () => ({
    name: "redWinePoachedPears",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 1, // grams
    proteinType: "Plant-based (Fruit)",
    lipidsPer100g: 0, // grams
    lipidType: "N/A",
    glucidsPer100g: 15, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin C"],
    minerals: ["Potassium"],
    ingredients: ["pears", "red wine", "sugar", "spices"],
    energyPer100g: 80, // kcal
    totalEnergy: 160, // kcal
});

export const chocolatePavlova = () => ({
    name: "chocolatePavlova",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 150, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Animal-based (Eggs)",
    lipidsPer100g: 8, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B2"],
    minerals: ["Calcium"],
    ingredients: ["egg whites", "sugar", "cocoa powder", "cream", "berries"],
    energyPer100g: 320, // kcal
    totalEnergy: 480, // kcal
});

export const nutellaStuffedPancakes = () => ({
    name: "nutellaStuffedPancakes",
    type: "Dessert",
    mealType: "Snack, Breakfast",
    quantity: 200, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Wheat)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Nutella)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Iron"],
    ingredients: ["flour", "nutella", "milk", "sugar", "eggs"],
    energyPer100g: 350, // kcal
    totalEnergy: 700, // kcal
});

export const blueberryCheesecake = () => ({
    name: "blueberryCheesecake",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 7, // grams
    proteinType: "Animal-based (Cream Cheese)",
    lipidsPer100g: 18, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 40, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["cream cheese", "blueberries", "sugar", "graham cracker crust"],
    energyPer100g: 420, // kcal
    totalEnergy: 840, // kcal
});

export const caramelPopcorn = () => ({
    name: "caramelPopcorn",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 100, // grams
    proteinsPer100g: 4, // grams
    proteinType: "Plant-based (Corn)",
    lipidsPer100g: 15, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 60, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Iron"],
    ingredients: ["popcorn", "sugar", "butter"],
    energyPer100g: 500, // kcal
    totalEnergy: 500, // kcal
});

export const oatmealRaisinCookies = () => ({
    name: "oatmealRaisinCookies",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 100, // grams
    proteinsPer100g: 5, // grams
    proteinType: "Plant-based (Oats)",
    lipidsPer100g: 10, // grams
    lipidType: "Saturated Fats (Butter)",
    glucidsPer100g: 55, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin B1"],
    minerals: ["Iron"],
    ingredients: ["oats", "sugar", "butter", "raisins", "flour"],
    energyPer100g: 410, // kcal
    totalEnergy: 410, // kcal
});

export const bananaPudding = () => ({
    name: "bananaPudding",
    type: "Dessert",
    mealType: "Snack, Dessert",
    quantity: 200, // grams
    proteinsPer100g: 3, // grams
    proteinType: "Animal-based (Milk)",
    lipidsPer100g: 5, // grams
    lipidType: "Saturated Fats (Cream)",
    glucidsPer100g: 35, // grams
    glucidType: "Simple carbs (Sugar)",
    vitamins: ["Vitamin A"],
    minerals: ["Calcium"],
    ingredients: ["bananas", "milk", "sugar", "vanilla", "pudding mix"],
    energyPer100g: 200, // kcal
    totalEnergy: 400, // kcal
});