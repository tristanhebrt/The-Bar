export const ALORA_APPETIZERS = {
    listName: "My Snacks",
    listType: "food",
    items : [
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
  ]
};
  
  