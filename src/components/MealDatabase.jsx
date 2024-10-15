import React from 'react';
import { 
    acaiBowl, almondButterToast, appleCinnamonOatmeal, appleCinnamonOvernightOats, avocadoToast, baconEggBreakfastBowl, bagelWithLox, bakedEggsWithSpinach, 
    bananaPancakes, berryQuinoaSalad, berrySmoothieBowl, blueberryMuffin, breakfastBowl, breakfastBurrito, breakfastCasserole, breakfastCrepes, breakfastEggsAndSausage, 
    breakfastEggsBenedict, breakfastFriedRice, breakfastFruitSalad, breakfastGranolaBars, breakfastHashBowl, breakfastPasta, breakfastPitaPocket, breakfastQuiche, 
    breakfastQuinoa, breakfastQuinoaBowl, breakfastSandwich, breakfastSmoothie, breakfastStuffedPeppers, breakfastTacos, breakfastTofuScramble, buckwheatPorridge, 
    carrotCakeOatmeal, carrotZucchiniMuffins, chiaPudding, chiaSeedPudding, chocolateChiaPudding, chocolateChipMuffins, chocolateChipPancakes, chocolateProteinPancakes, 
    chocolateProteinShake, cinnamonRolls, coconutChiaPudding, coconutRicePudding, cornmealMush, cottageCheeseWithFruit, eggAndSpinachWrap, eggBenedict, eggsFlorentine, 
    eggWhiteFrittata, eggWhiteOmelette, frenchToast, frittata, fruitAndNutBars, fruitAndNutGranola, fruitSalad, fruitSmoothie, granola, granolaEnergyBites, 
    greekYogurtParfait, hamEggs, mangoChiaParfait, maplePecanOatmeal, mixedBerryParfait, muesli, mushroomQuinoaBreakfast, nutButterBananaToast, nutellaStuffedPancakes, 
    nuttyGranolaBars, oatmeal, oatmealBreakfastCookies, oatmealCookies, oatmealFruitBowl, oatmealFruitCups, orangeAlmondGranola, overnightOats, pancakes, 
    peanutButterBananaSmoothie, peanutButterSmoothie, poachedEggs, proteinPancakes, pumpkinPancakes, quiche, quinoaBreakfastBowl, ricePudding, ricottaToastWithBerries, 
    sausageBreakfastBowl, savoryBreakfastBowl, savoryBreakfastPancakes, savoryScones, scrambledEggs, shakshuka, smoothie, smoothieBowl, spicedAppleCiderDonuts, 
    spicyAvocadoEggToast, spicyTofuScramble, spinachAndFetaWrap, spinachFetaEggWrap, spinachFetaQuiche, spinachSmoothie, strawberryBananaSmoothie, sweetPotatoFrittata, 
    sweetPotatoHash, sweetPotatoPancakes, tropicalFruitSalad, tropicalSmoothie, veggieBreakfastWrap, veggieOmelette, wholeGrainToastWithAvocado, wholeWheatBagel, 
    yogurtParfait, zucchiniBread, zucchiniFritters
} from './BreakfastDish';
import { 
    almondMilkUnsweetened, avocadoSmoothie, blackCoffee, blueberryChiaSmoothie, carrotJuice, chiaSeedWater, coconutWater, gingerTea, greenSmoothie, honeyLemonWater, 
    mangoSmoothie, matchaLatte, oatMilkUnsweetened, orangeJuice, peppermintTea, pomegranateJuice, soyMilk, strawberrySmoothie, turmericLatte, watermelonJuice 
} from './Beverage';
import { almondMilkYogurt, asiagoCheese, blueberryYogurt, blueCheese, brieCheese, burrataCheese, cabraAlVinoCheese, camembertCheese, cantalCheese, casuMarzuCheese, chabichouCheese, 
    cheddarCheese, cheshireCheese, chevreCheese, chocolateYogurt, coconutMilkYogurt, comteCheese, cotijaCheese, cottegeCheese, crottinCheese, emmentalCheese, fetaCheese, 
    gorgonzolaCheese, goudaCheese, gruyereCheese, halloumiCheese, havartiCheese, honeyGreekYogurt, kefir, langresCheese, leerdammerCheese, limburgerCheese, livarotCheese, 
    lowFatYogurt, manchegoCheese, mangoYogurt, mimoletteCheese, mozzarellaCheese, muensterCheese, neufchâtelCheese, nevatCheese, parmesanCheese, peachYogurt, pecorinoCheese, 
    plainGreekYogurt, quarkCheese, quesoFrescoCheese, raspberryYogurt, ricottaCheese, roquefortCheese, saintNectaireCheese, smokedGouda, sourCreamCheese, soyYogurt, 
    stinkingBishopCheese, strawberryYogurt, taleggioCheese, tommeDeSavoieCheese, vacherinCheese, valdeonCheese, vanillaYogurt, wholeMilkYogurt, yorkshireBlueCheese 
} from './Cheese';
import { almondCake, almondJoyBars, appleCrisp, appleCrumble, appleOatmealPancakes, applePie, baklava, bananaBread, bananaNutBread, bananaPudding, bananaSplit, blueberryCheesecake, 
    blueberryPie, brownies, caramelAppleDumpCake, caramelFlan, caramelPopcorn, carrotCake, cheesecake, cherryAlmondGranola, cherryClafoutis, chocolateBavarianCream, 
    chocolateBrownies, chocolateCake, chocolateChipCookies, chocolateCoconutBalls, chocolateCoconutPie, chocolateCoveredStrawberries, chocolateDippedBananas, chocolateEclair, 
    chocolateFondue, chocolateFudgeCake, chocolateMilkshake, chocolateMintBrownies, chocolateMousse, chocolatePavlova, chocolatePeanutButterBars, chocolatePecanPie, 
    chocolatePudding, chocolateRaspberryTrifle, chocolateSouffle, chocolateTart, churros, coconutCreamPie, coconutMacaroons, custard, eclair, frozenYogurt, fruitTart, 
    fudgeBrownies, gelato, gingerbread, gingerbreadCookies, honeycombToffee, keyLimePie, lemonMeringuePie, macaron, matchaGreenTeaCake, matchaPancakes, moltenChocolateCake, 
    oatmealBananaCookies, oatmealRaisinCookies, orangeSorbet, orangeUpsideDownCake, pannaCotta, pannaCottaCoconut, pannaCottaVanilla, pavlova, peachCobbler, peachMelba, pecanPie, 
    profiteroles, pumpkinPie, pumpkinSpiceLatte, pumpkinSpicePancakes, quinoaFruitBowl, raspberryMousse, raspberrySorbet, redVelvetCake, redWinePoachedPears, snickerdoodleCookies, 
    stickyRiceMango, strawberryCheesecake, strawberryShortcake, sweetPotatoPie, tiramisu, tiramisuCupcakes, vanillaBeanIceCream, vanillaCupcake, vanillaIceCream, vanillaPudding, 
    whiteChocolateRaspberryCheesecake 
} from './Dessert';
import { baconCheeseburger, bakedPotato, bakedZiti, bangersAndMash, barbecueChicken, beefAndBroccoli, beefBourgignon, beefRagu, beefStroganoff, beefTacos, blackBeanTacos, 
    bltSandwich, bolognesePasta, butterChicken, butternutSquashRisotto, cabbageRolls, carrotGingerSoup, chanaMasala, chickenAdobo, chickenAlfredo, chickenAndRice, 
    chickenCaesarSalad, chickenCurry, chickenFajitas, chickenKorma, chickenNoodleSoup, chickenParmesan, chickenPotPie, chickenSchnitzel, chickenSouvlaki, chickenTikkaMasala, 
    chiliConCarne, clamChowder, coconutRice, coqAuVin, cornChowder, creamyMushroomRisotto, creamySpinachPasta, crispyDuck, curryChicken, curryTofu, eggFriedRice, eggplantParmesan, 
    eggSalad, falafelBowl, falafelWrap, fishAndChips, fishTacos, friedRice, garlicButterPasta, garlicPasta, gnocchi, gnocchiAlPesto, goulash, grilledCheeseSandwich, 
    grilledEggplantParmesan, grilledLemonChicken, grilledVegetableWrap, grilledVeggiePasta, gyros, jambalaya, jerkChicken, kebab, kimchiFriedRice, lambChops, lemonButterShrimp, 
    lemonGarlicTilapia, lobsterRoll, macaroniAndCheese, mediterraneanQuinoaBowl, misoRamen, mixedVegetableStirFry, moussaka, mushroomRisotto, padKrapowMoo, padThai, paella, 
    pestoPasta, phillyCheesesteak, pokeBowl, porkChop, pulledPorkSandwich, quesadilla, quicheLorraine, quinoaStuffedEggplant, ratatouille, risotto, risottoMushrooms, 
    roastedVegetableQuinoa, salmonFillet, salmonPasta, sausageAndMash, seafoodPaella, seafoodRisotto, shepherdsPie, shrimpFriedRice, shrimpScampi, spaghettiCarbonara, 
    spicyShrimpTacos, spicyTofuStirFry, spinachLasagna, stuffedBellPeppers, sushiRoll, sweetPotatoCasserole, sweetPotatoCurry, teriyakiChicken, teriyakiSalmon, teriyakiShrimp, 
    teriyakiTofu, turkeyChili, turkeyMeatballs, veganChili, vegetableStirFry, veggieBurger, veggieLasagna, veggieStirFry, zucchiniLasagna, zucchiniNoodles 
} from './MainDish';
import { antipastoPlatter, avocadoEggSalad, avocadoSpringRolls, baconCheddarPotatoSkins, baconWrappedAsparagus, baconWrappedDates, beetHummus, beetrootSalad, beetSalad, bruschetta, 
    bruschettaSalad, butternutSquashSoup, caponata, capreseSalad, carrotHummus, carrotSticksWithDip, cheeseAndCrackers, cheesePlatter, cheeseQuesadilla, cheeseStuffedPeppers, 
    chickenQuesadilla, chickenSatay, chickenWings, chickpeaSalad, chiliCheeseFries, coconutShrimp, cornFritters, crabCakes, crabPuffs, crabRangoon, crispyTofuBites, 
    cucumberAndHummus, deviledEggs, eggplantCaviar, falafel, fruitSkewers, garlicBread, garlicParmesanBread, garlicParmesanMushrooms, gazpacho, greekSalad, grilledVegetableSkewers, 
    lentilSalad, lentilSoup, loadedNachos, mangoSalsa, marinatedOlives, meatballs, miniPizzas, miniQuiches, onionSoup, peaSoup, potatoCroquettes, potatoSkins, prosciuttoMelon, 
    pumpkinSoup, quinoaSalad, quinoaTabbouleh, roastedGarlicBread, roastedRedPepperHummus, salmonSushi, savoryCheeseScones, shrimpCeviche, shrimpCocktail, shrimpSpringRolls, 
    shrimpTacos, smokedSalmonCanapés, spicedSweetPotatoWedges, spicyChickenWings, spicyHummus, spicyLentilSoup, spinachArtichokeDip, spinachFetaPuffs, springRolls, 
    stuffedMushrooms, stuffedPeppers, sweetCornFritters, sweetPotatoFries, tempuraVegetables, tomatoBasilSoup, tunaSalad, tunaTartare, veganStuffedMushrooms, vegetableSamosas, 
    vegetableSpringRolls, vegetableSushi, vegetableTempura, watermelonFetaSalad, wildRiceSalad 
} from './Starter';
import { asparagus, bellPepper, bitterMelon, broccoli, brusselsSprouts, butternutSquash, carrot, cauliflower, cucumber, daikon, eggplant, fennel, kale, lettuce, mustardGreens, 
    parsnip, radish, seaweed, spinach, sweetPotato, swissChard, tomato, turnip, waterSpinach, zucchini 
} from './Vegetables';
import { apple, banana, blueberry, carambola, cherries, cloudberry, custardApple, dragonFruit, feijoa, fig, grapefruit, guava, jackfruit, kiwi, kumquat, lychee, mango, mulberry, 
    orange, papaya, passionFruit, pear, persimmon, pineapple, pomegranate, rambutan, raspberries, sapodilla, starfruit, strawberry, watermelon 
} from './Fruits';

  const mealDatabase = {
    breakfast: [
        pancakes, scrambledEggs, oatmeal, avocadoToast, yogurtParfait, smoothieBowl, frenchToast, chiaPudding, breakfastBurrito,
        acaiBowl, bagelWithLox, quiche, proteinPancakes, granola, poachedEggs, breakfastQuinoa, shakshuka, breakfastTacos, muesli,
        sweetPotatoHash, nutButterBananaToast, frittata, smoothie, breakfastSandwich, ricePudding, eggBenedict, cottageCheeseWithFruit,
        berrySmoothieBowl, oatmealCookies, chiaSeedPudding, breakfastBowl, eggsFlorentine, fruitSalad, eggWhiteOmelette, cinnamonRolls,
        breakfastSmoothie, breakfastGranolaBars, peanutButterBananaSmoothie, spinachFetaEggWrap, maplePecanOatmeal, bananaPancakes,
        wholeGrainToastWithAvocado, hamEggs, tropicalSmoothie, sausageBreakfastBowl, overnightOats, spinachAndFetaWrap, veggieOmelette,
        carrotCakeOatmeal, fruitAndNutBars, chocolateProteinPancakes, chocolateChiaPudding, bakedEggsWithSpinach, strawberryBananaSmoothie,
        breakfastEggsBenedict, breakfastQuinoaBowl, chocolateProteinShake, breakfastEggsAndSausage, breakfastTofuScramble, blueberryMuffin,
        chocolateChipPancakes, spicedAppleCiderDonuts, nutellaStuffedPancakes, greekYogurtParfait, appleCinnamonOatmeal, sweetPotatoPancakes,
        spinachSmoothie, oatmealBreakfastCookies, breakfastPasta, coconutChiaPudding, zucchiniFritters, quinoaBreakfastBowl, breakfastStuffedPeppers,
        cornmealMush, granolaEnergyBites, breakfastFruitSalad, breakfastQuiche, spicyTofuScramble, buckwheatPorridge, savoryScones, breakfastCrepes,
        baconEggBreakfastBowl, fruitAndNutGranola, breakfastCasserole, oatmealFruitBowl, veggieBreakfastWrap, mushroomQuinoaBreakfast, savoryBreakfastPancakes,
        peanutButterSmoothie, fruitSmoothie, eggAndSpinachWrap, mangoChiaParfait, sweetPotatoFrittata, nuttyGranolaBars, appleCinnamonOvernightOats,
        spinachFetaQuiche, breakfastHashBowl, tropicalFruitSalad, chocolateChipMuffins, coconutRicePudding, wholeWheatBagel, savoryBreakfastBowl,
        mixedBerryParfait, spicyAvocadoEggToast, zucchiniBread, breakfastFriedRice, pumpkinPancakes, berryQuinoaSalad, oatmealFruitCups,
        ricottaToastWithBerries, almondButterToast, eggWhiteFrittata, carrotZucchiniMuffins, breakfastPitaPocket, orangeAlmondGranola
    ],
    beverages: [
        orangeJuice, almondMilkUnsweetened, greenSmoothie, chiaSeedWater, coconutWater, blackCoffee, matchaLatte, soyMilk, strawberrySmoothie,
        peppermintTea, oatMilkUnsweetened, mangoSmoothie, carrotJuice, avocadoSmoothie, watermelonJuice, blueberryChiaSmoothie, honeyLemonWater,
        turmericLatte, pomegranateJuice, gingerTea
      ],
    starters: [
        bruschetta, capreseSalad, chickenSatay, spinachArtichokeDip, stuffedMushrooms, springRolls, deviledEggs, gazpacho, shrimpCocktail,
        onionSoup, meatballs, antipastoPlatter, tempuraVegetables, cheesePlatter, chickenWings, falafel, potatoSkins, crabCakes, shrimpTacos,
        potatoCroquettes, vegetableSamosas, chickenQuesadilla, roastedRedPepperHummus, miniPizzas, zucchiniFritters, baconWrappedDates, chiliCheeseFries,
        cheeseStuffedPeppers, caponata, roastedGarlicBread, veganStuffedMushrooms, beetrootSalad, marinatedOlives, shrimpSpringRolls, crabRangoon,
        fruitSkewers, smokedSalmonCanapés, sweetPotatoFries, tunaTartare, cheeseQuesadilla, vegetableTempura, crabPuffs, beetHummus, coconutShrimp,
        pumpkinSoup, miniQuiches, eggplantCaviar, stuffedPeppers, spinachFetaPuffs, garlicParmesanMushrooms, baconWrappedAsparagus, avocadoToast,
        savoryCheeseScones, watermelonFetaSalad, cheeseAndCrackers, cornFritters, garlicBread, mangoSalsa,avocadoEggSalad, peaSoup, prosciuttoMelon,
        vegetableSpringRolls, crispyTofuBites, tomatoBasilSoup, grilledVegetableSkewers, chickpeaSalad, spicyHummus, lentilSalad, carrotSticksWithDip,
        avocadoSpringRolls, cucumberAndHummus, loadedNachos, butternutSquashSoup, lentilSoup, quinoaSalad, sweetCornFritters, bruschettaSalad,
        baconCheddarPotatoSkins, carrotHummus, vegetableSushi, shrimpCeviche, greekSalad, wildRiceSalad, spicyLentilSoup, tunaSalad, salmonSushi,
        quinoaTabbouleh, spicedSweetPotatoWedges, beetSalad, spicyChickenWings, garlicParmesanBread
     ],
    mainDishes: [
        teriyakiSalmon, spaghettiCarbonara, chickenTikkaMasala, beefStroganoff, vegetableStirFry, padThai, falafelWrap, quicheLorraine, sushiRoll,
        paella, moussaka, gnocchi, chiliConCarne, shepherdsPie, risotto, bangersAndMash, padKrapowMoo, coqAuVin, chickenAlfredo, lobsterRoll,
        ratatouille, jambalaya, bolognesePasta, chickenFajitas, pulledPorkSandwich, shakshuka, seafoodPaella, goulash, eggplantParmesan, creamyMushroomRisotto,
        quesadilla, misoRamen, beefAndBroccoli, veggieBurger, kebab, teriyakiChicken, curryChicken, cornChowder, beefTacos, spinachLasagna, chickenSouvlaki,
        sweetPotatoCasserole, chickenSchnitzel, clamChowder, chickenPotPie, blackBeanTacos, chickenCurry, teriyakiTofu, beefRagu, chickenAndRice, friedRice,
        shrimpScampi, salmonFillet, fishAndChips, eggFriedRice, bakedZiti, veggieStirFry, porkChop, garlicPasta, stuffedPeppers, grilledCheeseSandwich,
        lambChops, shrimpTacos, chickenKorma, veggieLasagna, chickenAdobo, gyros, turkeyMeatballs, salmonPasta, gnocchiAlPesto, pokeBowl, chanaMasala,
        crabCakes, beefBourgignon, risottoMushrooms, sausageAndMash, chickenCaesarSalad, butterChicken, chickenParmesan, seafoodRisotto, roastedVegetableQuinoa,
        zucchiniNoodles, lentilSoup, quinoaSalad, capreseSalad, turkeyChili, sweetPotatoCurry, veganChili, grilledVegetableWrap, mediterraneanQuinoaBowl,
        stuffedBellPeppers, chickenNoodleSoup, falafelBowl, pestoPasta, lemonGarlicTilapia, zucchiniLasagna, quinoaStuffedEggplant, spicyTofuStirFry,
        barbecueChicken, bakedPotato, crispyDuck, baconCheeseburger, jerkChicken, sweetPotatoFries, mixedVegetableStirFry, grilledLemonChicken, teriyakiShrimp,
        grilledVeggiePasta, spicyShrimpTacos, creamySpinachPasta, carrotGingerSoup, lemonButterShrimp, butternutSquashRisotto, spinachFetaQuiche, garlicButterPasta,
        grilledEggplantParmesan, shrimpFriedRice, fishTacos, mushroomRisotto, cabbageRolls, kimchiFriedRice, eggSalad, curryTofu, bltSandwich, coconutRice,
        phillyCheesesteak, macaroniAndCheese
         ],
    desserts: [
        chocolateCake, applePie, cheesecake, tiramisu, brownies, pannaCotta, fruitSalad, lemonMeringuePie, pannaCottaVanilla, carrotCake, chocolateMousse,
        fudgeBrownies, strawberryShortcake, bananaBread, ricePudding, coconutMacaroons, chocolateChipCookies, chocolateEclair, tiramisuCupcakes, pavlova,
        chocolateFudgeCake, eclair, custard, raspberrySorbet, chocolatePudding, baklava, pumpkinPie, vanillaIceCream, appleCrisp, keyLimePie, peachMelba,
        chocolateCoveredStrawberries, fruitTart, blueberryMuffin, chocolateSouffle, gelato, oatmealCookies, chocolateTart, chocolateDippedBananas, 
        snickerdoodleCookies, chocolatePecanPie, macaron, orangeSorbet, almondCake, coconutCreamPie, gingerbread, chocolateBavarianCream, moltenChocolateCake,
        chocolateBrownies, chocolateCoconutBalls, vanillaCupcake, peachCobbler, frozenYogurt, bananaSplit, fruitSmoothie, stickyRiceMango, chocolatePeanutButterBars,
        pecanPie, matchaGreenTeaCake, caramelFlan, blueberryPie, profiteroles, chocolateMintBrownies, cinnamonRolls, orangeUpsideDownCake, honeycombToffee,
        strawberryCheesecake, chocolateCoconutPie, vanillaBeanIceCream, whiteChocolateRaspberryCheesecake, gingerbreadCookies, chocolateRaspberryTrifle,
        caramelAppleDumpCake, chocolateChipPancakes, pumpkinSpiceLatte, vanillaPudding, cherryClafoutis, greekYogurtParfait, cherryAlmondGranola, berrySmoothieBowl,
        oatmealBananaCookies, pumpkinSpicePancakes, matchaPancakes, bananaNutBread, appleOatmealPancakes, quinoaFruitBowl, redVelvetCake, churros, raspberryMousse,
        sweetPotatoPie, pannaCottaCoconut, chocolateMilkshake, appleCrumble, chocolateFondue, almondJoyBars, redWinePoachedPears, chocolatePavlova,
        nutellaStuffedPancakes, blueberryCheesecake, caramelPopcorn, oatmealRaisinCookies, bananaPudding
     ],
    cheeses: [
        cheddarCheese, brieCheese, goudaCheese, fetaCheese, mozzarellaCheese, blueCheese, asiagoCheese, camembertCheese, cotijaCheese, halloumiCheese,
        limburgerCheese, manchegoCheese, muensterCheese, parmesanCheese, pecorinoCheese, ricottaCheese, smokedGouda, stinkingBishopCheese, taleggioCheese,
        vacherinCheese, yorkshireBlueCheese, gorgonzolaCheese, nevatCheese, mimoletteCheese, havartiCheese, cottegeCheese, sourCreamCheese, burrataCheese,
        quesoFrescoCheese, cheshireCheese, casuMarzuCheese, gruyereCheese, quarkCheese, neufchâtelCheese, valdeonCheese, cabraAlVinoCheese, chabichouCheese,
        leerdammerCheese, chevreCheese, roquefortCheese, crottinCheese, comteCheese, cantalCheese, emmentalCheese, langresCheese, livarotCheese,
        saintNectaireCheese, tommeDeSavoieCheese, plainGreekYogurt, lowFatYogurt, wholeMilkYogurt, strawberryYogurt, vanillaYogurt, honeyGreekYogurt,
        blueberryYogurt, coconutMilkYogurt, almondMilkYogurt, soyYogurt, mangoYogurt, raspberryYogurt, kefir, chocolateYogurt, peachYogurt
     ],
    Vegetables: [
        broccoli, carrot, spinach, bellPepper, zucchini, cucumber, tomato, eggplant, cauliflower, lettuce, sweetPotato, asparagus, brusselsSprouts,
        kale, parsnip, turnip, radish, fennel, butternutSquash, waterSpinach, mustardGreens, seaweed, daikon, swissChard, bitterMelon
    ],
    Fruits: [
        apple, banana, orange, strawberry, blueberry, mango, watermelon, pear, pineapple, kiwi, papaya, grapefruit, cherries, pomegranate,
        raspberries, passionFruit, dragonFruit, guava, lychee, fig, jackfruit, starfruit, mulberry, kumquat, cloudberry, persimmon, custardApple, 
        carambola, rambutan, sapodilla, feijoa
    ]
  };

  export default mealDatabase;