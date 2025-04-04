export const ALORA_APPETIZERS = [
    {
      title: "Whipped Feta",
      price: "$23",
      ingredients: "Ricotta, feta, blistered tomatoes, herbs, pesto, pistachios, flatbread",
      description:
        "A Mediterranean-inspired medley of creamy ricotta, salty feta, sweet blistered tomatoes, fragrant herbs, fresh pesto, and crunchy pistachios served with warm grilled flatbread.",
      allergens: {
        vegan: "N/P",       // Contains dairy/nuts
        vegetarian: "Good", // Confirmed vegetarian
        dairy: "N/P",
        glutenCeliac: "Sub Vegetables", // Gluten noted (sub veg)
        nut: "Mod Pistachios",
        halal: "Good",      // No conflicting ingredients
        sesame: "N/P"
      }
    },
    {
      title: "Parm Fries",
      price: "$15",
      ingredients: "Sweet potato fries, regular fries, parmesan, dill, lemon garlic aioli",
      description:
        "A mix of sweet potato and crispy fries topped with freshly grated parmesan, dill, and a lemon garlic aioli for dipping.",
      allergens: {
        vegan: "No Parm",   // Contains dairy
        vegetarian: "Good", // Vegetarian-friendly
        dairy: "Mod Parm & Sub Garlic Aioli",
        glutenCeliac: "Sub Garlic Aioli", // Original note
        nut: "May Contain Peanuts",       // New note
        halal: "N/P",       // Shellfish cross-contact?
        sesame: "Good"  
      },
      winePairings: [
        "Prosecco, Serenissima",
        "Shiraz, Two Hands Gnarly Dudes",
        "Montepulciano d’Abruzzo, Masciarelli"
      ]
    },
    {
      title: "Crispy Crab Bites",
      price: "$26",
      ingredients: "Crab, crispy rice, avocado mousse, spicy mayo, serrano peppers, red chili",
      description:
        "Five pieces of succulent crab (real not imitation) served on top of crispy rice, complemented by creamy avocado mousse, spicy mayo, hint of red chili, topped with serrano peppers.",
      allergens: {
        vegan: "N/P",       // Contains seafood/eggs
        vegetarian: "N/P",  // Confirmed non-vegetarian
        dairy: "Good",      // No dairy mentioned
        glutenCeliac: "N/P", // Contains gluten
        nut: "Good",    // Explicitly stated
        halal: "Good",      // Halal confirmed
        sesame: "N/P"
      },
      winePairings: [
        "Prosecco, Serenissima",
        "Franciacorta Brut, Corte Aura"
      ]
    },
    {
      title: "Bang Bang Broccoli",
      price: "$19",
      ingredients: "Broccoli, panko, Thai chili sauce, peanut sauce, sesame",
      description:
        "Panko-crusted broccoli drizzled with toasted sesame and served with bold Thai chili and a peanut sauce.",
      allergens: {
        vegan: "Good",      // Explicitly marked vegan
        vegetarian: "Good", // Vegetarian-friendly
        dairy: "Good",      // No dairy
        glutenCeliac: "N/P", // Panko crust
        nut: "Sub Peanut Sauce",
        halal: "Good",      // Confirmed
        sesame: "Sub Sesame"
        },
      winePairings: ["Prosecco, Serenissima"]
    },
    {
      title: "Sliders",
      price: "$22",
      ingredients: "Angus beef, brioche buns, caramelized onions, bacon, cheddar, burger sauce",
      description:
        "Three mini burgers featuring Angus beef, caramelized onions, crispy bacon, cheddar, and burger sauce on toasted brioche buns.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "N/P", // Cheddar/burger sauce
        glutenCeliac: "Sub Lettuce Wrap",
        nut: "Good",
        halal: "Mod Bacon",       // Explicit note
        sesame: "Good"
      },
      winePairings: [
        "Pinot Noir, Centrestone",
        "Shiraz, Two Hands Gnarly Dudes"
      ]
    },
    {
      title: "Gyoza",
      price: "$18",
      ingredients: "Beef filling, dumpling wrappers, sesame chili oil, green onions, ponzu",
      description:
        "Five juicy beef-filled dumplings drizzled with sesame chili oil, garnished with fresh green onions, and served with ponzu.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",       // Beef filling
        dairy: "Good",           // No dairy
        glutenCeliac: "N/P", // Wrappers
        nut: "Sub Peanut Sauce", // Original note
        halal: "N/P",            // Not Halal
        sesame: "N/P"
      },
      winePairings: [
        "Sauvignon Blanc, Crowded House",
        "Thirty Bench Riesling"
      ]
    },
    {
      title: "Tuna Tacos",
      price: "$25",
      ingredients: "Chili-soy-marinated tuna, crispy wonton shells, avocado, cucumber, sesame, ponzu sauce",
      description:
        "Three chili-soy-marinated tuna tacos served in crispy wonton shells with creamy avocado, cucumber, sesame, and ponzu sauce.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "Good",           // No dairy
        glutenCeliac: "N/P", // Wonton shells
        nut: "Good",
        halal: "Good",           // No bacon
        sesame: "N/P"
      },
      winePairings: [
        "Pinot Grigio, Tiefenbrunner",
        "Prosecco, Serenissima",
        "Thirty Bench Riesling"
      ]
    },
    {
      title: "Korean Chili Fried Chicken",
      price: "$23",
      ingredients: "Chicken, Korean chili sauce, sesame seeds",
      description:
        "Crispy, hand-breaded chicken topped with a bold Korean chili sauce and sesame seeds for a tangy, spicy flavor.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "N/P", // Batter/sauce
        glutenCeliac: "N/P",     // Contains gluten
        nut: "Sub Peanut Sauce", // Original note
        halal: "N/P",            // Explicit
        sesame: "N/P"
      }
    },
    {
      title: "Hot Honey Fried Chicken",
      price: "$23",
      ingredients: "Chicken, hot honey, basil aioli",
      description:
        "Hand-breaded chicken drizzled with sweet and spicy hot honey and paired with basil aioli for a rich, flavorful bite.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "N/P", // Aioli
        glutenCeliac: "N/P",     // Contains gluten
        nut: "Good",
        halal: "N/P",
        sesame: "N/P"  
      }
    }
  ];
  
  export const ALORA_MAINS = [
    {
      title: "NY Striploin Steak",
      price: "$57",
      ingredients:
        "Prime striploin, seasonal vegetables, herb butter, fingerling potatoes, bordelaise sauce",
      description:
        "Juicy prime striploin served with seasonal vegetables, herb buttered fingerling potatoes, and savory bordelaise sauce.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "Mod Herb Butter", // Herb butter
        glutenCeliac: "Good",
        nut: "Good",
        halal: "N/P",
        sesame: "Good"  
      },
      winePairings: [
        "Chardonnay, Bella Terra",
        "Cabernet Sauvignon, Thievery",
        "Ripasso, Zenato"
      ]
    },
    {
      title: "Seared Salmon",
      price: "$43",
      ingredients:
        "Salmon filet, lemon garlic, zucchini, leeks, herb butter, Dijon cream sauce",
      description:
        "Lemon garlic salmon filet served with zucchini, leeks, herb butter fingerling potatoes, and a tangy Dijon cream sauce.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "Sub Hollandaise & Mod Butter",
        glutenCeliac: "Good",
        nut: "Good",
        halal: "Good",
        sesame: "Good"
      },
      winePairings: [
        "Sauvignon Blanc, Crowded House",
        "Sancerre, Daniel Chotard"
      ]
    },
    {
      title: "Seafood Pasta",
      price: "$58",
      ingredients:
        "Fettuccine, garlic lobster tail, grilled shrimp, basil cream sauce, cherry tomatoes, sesame chili oil, breadcrumbs",
      description:
        "Fettuccine with garlic lobster tail and grilled shrimp, tossed in a rich basil cream sauce with blistered cherry tomatoes, sesame chili oil, and breadcrumbs.",
      allergens: {
        vegan: "Ask Chef",       // Possible substitutions?
        vegetarian: "N/P",       // Contains seafood
        dairy: "Mod Butter", 
        glutenCeliac: "N/P",     // Contains gluten
        nut: "Ask Chef",         // Possible cross-contact
        halal: "N/P (wine)",    
        sesame: "N/P"
      },
      winePairings: [
        "Chardonnay, Bella Terra",
        "Champagne, Veuve Cliquot Brut",
        "Zinfandel/Cabernet Sauvignon, Prisoner"
      ]
    },
    {
      title: "Grilled Lamb",
      price: "$49",
      ingredients:
        "Lamb chops, rosemary, pistachio crust, mashed potatoes, Swiss chard, bordelaise sauce",
      description:
        "Rosemary pistachio-crusted lamb chops served with roasted garlic mashed potatoes, rainbow Swiss chard, and bordelaise sauce.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "Sub Fingerling & Mod Butter", // Original note
        glutenCeliac: "Good",    // Gluten-free
        nut: "Mod Pistachios",
        halal: "Mod Bordelaise",   // Original note
        sesame: "Good"    
      },
      winePairings: [
        "Pinot Noir, Centrestone",
        "Shiraz, Two Hands Gnarly Dudes",
        "Ripasso, Zenato",
        "Barolo, Arnaldo Rivera ‘Undicicomuni’"
      ]
    },
    {
      title: "Grilled Chicken",
      price: "$46",
      ingredients:
        "Half chicken, harissa marinade, seasonal vegetables, herb butter, fingerling potatoes",
      description:
        "Harissa-marinated half chicken served with seasonal vegetables and herb butter fingerling potatoes.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "Mod Butter",
        glutenCeliac: "Good",
        nut: "Good",
        halal: "N/P",
        sesame: "Good"
      },
      winePairings: [
        "Sauvignon Blanc, Crowded House",
        "Montepulciano d’Abruzzo, Masciarelli",
        "Ripasso, Zenato"
      ]
    }
  ];
  
  export const ALORA_SUSHIS = [
    {
      title: "Crunchy Shrimp Roll",
      price: "$22",
      ingredients:
        "Shrimp, sushi rice, spicy chili mayo, avocado, cucumber, green onion",
      description:
        "A sushi roll featuring crispy shrimp, spicy chili mayo, creamy avocado, refreshing cucumber, and green onion.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "N/P",
        glutenCeliac: "N/P",     // No explicit gluten
        nut: "N/P",
        halal: "N/P",
        sesame: "N/P" 
      }
    },
    {
      title: "Sesame Tuna Roll",
      price: "$24",
      ingredients:
        "Tuna, sesame seeds, crispy leeks, avocado, Thai basil, citrus chili soy sauce",
      description:
        "This sushi roll features seared tuna, sesame seeds, crispy leeks, avocado, and Thai basil, all brought together by a vibrant citrus chili soy sauce.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "N/P",
        glutenCeliac: "N/P",
        nut: "N/P",
        halal: "N/P",
        sesame: "N/P"
      }
    }
  ];
  
  export const ALORA_SALADS = [
    {
      title: "Caesar Salad",
      price: "$20",
      ingredients:
        "Romaine lettuce, parmesan, bacon, garlic croutons, grilled lemon",
      description:
        "Classic Caesar with fresh romaine, parmesan, crispy bacon, crunchy garlic croutons, and a grilled lemon wedge for added zest.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",       // Bacon
        dairy: "No Parm",        // Explicit
        glutenCeliac: "No Croutons",
        nut: "Good",
        halal: "No Bacon",       // Explicit
        sesame: "Good"
      },
      winePairings: ["Prosecco, Serenissima"]
    },
    {
      title: "Chicken Harvest Salad",
      price: "$28",
      ingredients:
        "Arugula, butternut squash, cucumbers, apples, walnuts, cranberries, shallots, goat cheese, orange-fennel vinaigrette",
      options: "Crispy or grilled chicken",
      description:
        "Arugula topped with maple-roasted butternut squash, crisp cucumbers, apples, walnuts, pickled cranberries, and shallots, finished with goat cheese and an orange-fennel vinaigrette.",
      allergens: {
        vegan: "N/P",            // Chicken/goat cheese
        vegetarian: "N/P",       // Chicken
        dairy: "Sub Goat Cheese", 
        glutenCeliac: "Good",    // Gluten-free
        nut: "Sub Walnuts",   
        halal: "Good",           // No bacon
        sesame: "Sub Sesame"  
      },
      winePairings: [
        "Pinot Grigio, Tiefenbrunner",
        "Sancerre, Daniel Chotard"
      ]
    }
  ];
  
  export const ALORA_SHARING_BOARDS = [
    {
      title: "Land & Sea Board",
      price: "$285",
      ingredients:
        "Tomahawk steak, lobster tails, grilled shrimp, mushrooms, vegetables, potatoes, baguette, bordelaise sauce, garlic aioli, whipped butter",
      description:
        "A luxurious spread featuring a 48 oz, bone-in Tomahawk steak, two garlic lobster tails, grilled shrimp, button mushrooms, market vegetables, fingerling potatoes, and baguette. Comes with bordelaise sauce, garlic aioli, and whipped butter.",
      allergens: {
        vegan: "N/P",
        vegetarian: "N/P",
        dairy: "Mod Butter & Mod Garlic Aioli",
        glutenCeliac: "Mod Bread/Focaccia",
        nut: "Good",
        halal: "N/P",            // Contains seafood
        sesame: "Good"
      },
      winePairings: [
        "Pinot Noir, Centrestone",
        "Zinfandel/Cabernet Sauvignon, Prisoner"
      ]
    }
  ];
  