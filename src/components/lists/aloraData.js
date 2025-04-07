export const ALORA_BEERS = {
    listName: "Aloa Beers",
    listType: "beer",
    listCode: "aloraDataList",
    items:[
        {
            title: "Alora Lager",
            type: "Classic Lager",
            origin: "Evergreen Craft Ales",
            tastingNotes: "Easy to drink, light and crushable, with a crisp finish",
            tasteProfile: {
                bitterness: { scale: "mild - bitter", value: 20 },  
                maltiness: { scale: "subtle - robust", value: 60 },
                hoppiness: { scale: "delicate - intense", value: 25 },
                carbonation: { scale: "flat - effervescent", value: 70 },
                alcohol: { scale: "sessionable - boozy", value: 35 },  
                mouthfeel: { scale: "thin - creamy", value: 50 },
                finish: { scale: "clean - lingering", value: 80 }
            },
        },
        {
            title: "Corona Extra",
            type: "Pale Lager",
            origin: "Mexico City, Mexico",
            tastingNotes: "Light, refreshing taste with subtle malt and hop notes, and a crisp finish",
            tasteProfile: {
                bitterness: { scale: "mild - bitter", value: 15 },  
                maltiness: { scale: "subtle - robust", value: 40 },
                hoppiness: { scale: "delicate - intense", value: 20 },
                carbonation: { scale: "flat - effervescent", value: 75 },
                alcohol: { scale: "sessionable - boozy", value: 30 },  
                mouthfeel: { scale: "thin - creamy", value: 40 },
                finish: { scale: "clean - lingering", value: 85 }
            },
        },
        {
            title: "Recliner Red",
            type: "Irish Red Ale",
            origin: "Evergreen Craft Ales",
            tastingNotes: "Slight malt blend, with low hops. Biscuit, toffee, and caramel flavors with a crisp finish",
            tasteProfile: {
                bitterness: { scale: "mild - bitter", value: 30 },  
                maltiness: { scale: "subtle - robust", value: 80 },
                hoppiness: { scale: "delicate - intense", value: 20 },
                carbonation: { scale: "flat - effervescent", value: 55 },
                alcohol: { scale: "sessionable - boozy", value: 45 },  
                mouthfeel: { scale: "thin - creamy", value: 70 },
                finish: { scale: "clean - lingering", value: 65 }
            },
        },
        {
            title: "Sunsplit IPA",
            type: "Hazy IPA",
            origin: "Dominion City",
            tastingNotes: "Tropical hop flavor, balanced bitterness, expressive yeast character, and a rich malt body. Pours hazy with golden highlights",
            tasteProfile: {
                bitterness: { scale: "mild - bitter", value: 70 },  
                maltiness: { scale: "subtle - robust", value: 40 },
                hoppiness: { scale: "delicate - intense", value: 90 },
                carbonation: { scale: "flat - effervescent", value: 65 },
                alcohol: { scale: "sessionable - boozy", value: 70 },  
                mouthfeel: { scale: "thin - creamy", value: 65 },
                finish: { scale: "clean - lingering", value: 75 }
            },
        },
        {
            title: "Glorious and Free IPA",
            type: "Seasonal Hazy IPA",
            origin: "Dominion City",
            tastingNotes: "Hazy IPA with a pilsner base and added hops. Made using all Canadian ingredients in partnership with 35+ breweries to support Canadian nonprofits",
            tasteProfile: {
                bitterness: { scale: "mild - bitter", value: 60 },  
                maltiness: { scale: "subtle - robust", value: 50 },
                hoppiness: { scale: "delicate - intense", value: 85 },
                carbonation: { scale: "flat - effervescent", value: 60 },
                alcohol: { scale: "sessionable - boozy", value: 65 },  
                mouthfeel: { scale: "thin - creamy", value: 70 },
                finish: { scale: "clean - lingering", value: 80 }
            },
        },
    ]
    };
    
export const WHITE_WINES = {
    listName: "Alora White Wines",
    listType: "wine",
    listCode: "aloraDataList",
    items: [
    {
        title: "Sauvignon Blanc - Crowded House",
        origin: "Marlborough, New Zealand",
        price: "$65",
        tastingNotes: "Zesty passionfruit and grapefruit with herbaceous undertones.",
        tasteProfile: {
            body: { scale: "light - bold", value: 20 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 5 },
            acidity: { scale: "soft - acidic", value: 90 }
        },
        foodPairings: "Crunchy Shrimp Roll, Seared Salmon, Chicken Harvest Salad",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Crowded House captures Marlborough’s iconic Sauvignon Blanc character.",
        agingPotential: "2-4 years."
    },
    {
        title: "Pinot Grigio - Tiefenbrunner",
        origin: "Alto Adige-Trentino, Italy",
        price: "$70",
        tastingNotes: "Crisp minerality balanced with ripe peach and almond nuances.",
        tasteProfile: {
            body: { scale: "light - bold", value: 30 },
            tannins: { scale: "smooth - tannic", value: 10 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 70 }
        },
        foodPairings: "Tuna Tacos, Chicken Harvest Salad, Gyoza",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Tiefenbrunner’s high-altitude vineyards yield precision-driven whites.",
        agingPotential: "3-5 years."
    },
    {
        title: "Riesling - Thirty Bench",
        origin: "Ontario, Canada",
        price: "$70",
        tastingNotes: "Crisp and aromatic with citrus, honey, and minerality.",
        tasteProfile: {
            body: { scale: "light - bold", value: 25 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 40 },
            acidity: { scale: "soft - acidic", value: 85 }
        },
        foodPairings: "Bang Bang Broccoli, Fried Chicken (Hot Honey), New Orleans Beignets",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Thirty Bench is renowned for producing high-quality Rieslings in Ontario.",
        agingPotential: "5-10 years."
    },
    {
        title: "Chardonnay - Bella Terra",
        origin: "Ontario, Canada",
        price: "$75",
        tastingNotes: "Balanced oak integration with baked apple and vanilla cream.",
        tasteProfile: {
            body: { scale: "light - bold", value: 60 },
            tannins: { scale: "smooth - tannic", value: 20 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 50 }
        },
        foodPairings: "Grilled Chicken, Seafood Pasta, Parmesan Fries",
        servingTemperature: "10-12°C (50-54°F)",
        wineryInfo: "Bella Terra showcases Ontario’s cool-climate Chardonnay potential.",
        agingPotential: "5-7 years."
    },
    {
        title: "Albariño - Paco and Lola",
        origin: "Salnes Valley, Spain",
        price: "$75",
        tastingNotes: "Saline-driven with white peach, lime, and sea spray freshness.",
        tasteProfile: {
            body: { scale: "light - bold", value: 25 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 80 }
        },
        foodPairings: "Crispy Crab Bites, Tuna Tacos, Crunchy Shrimp Roll",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Paco and Lola is a benchmark Albariño producer in Rías Baixas.",
        agingPotential: "3-5 years."
    },
    {
        title: "Sancerre - Daniel Chotard",
        origin: "Loire, France",
        price: "$97",
        tastingNotes: "Razor-sharp acidity with gooseberry, flint, and lemongrass.",
        tasteProfile: {
            body: { scale: "light - bold", value: 35 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 5 },
            acidity: { scale: "soft - acidic", value: 95 }
        },
        foodPairings: "Seared Salmon, Crispy Crab Bites, Caesar Salad",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Daniel Chotard’s Sancerre reflects Loire’s limestone terroir.",
        agingPotential: "4-6 years."
    },
    {
        title: "Petit Chablis - La Manufacture",
        origin: "Burgundy, France",
        price: "$105",
        tastingNotes: "Lean and vibrant with green apple, lemon, and wet stone minerality.",
        tasteProfile: {
            body: { scale: "light - bold", value: 30 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 5 },
            acidity: { scale: "soft - acidic", value: 85 }
        },
        foodPairings: "Oysters (add-on), Crunchy Shrimp Roll, Whipped Feta",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "La Manufacture emphasizes Chablis’ crisp, unoaked expression.",
        agingPotential: "3-5 years."
    },
    {
        title: "Rosé - Whispering Angel",
        origin: "Provence, France",
        price: "$90",
        tastingNotes: "Pale and dry with wild strawberry, citrus, and floral elegance.",
        tasteProfile: {
            body: { scale: "light - bold", value: 25 },
            tannins: { scale: "smooth - tannic", value: 15 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 65 }
        },
        foodPairings: "Whipped Feta, Chicken Harvest Salad, Bang Bang Broccoli",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Whispering Angel defines Provence’s modern rosé style.",
        agingPotential: "1-3 years."
    }
]
};

export const RED_WINES = {
    listName: "Alora Red Wines",
    listType: "wine",
    listCode: "aloraDataList",
    items: [
        {
        title: "Montepulciano d'Abruzzo - Masciarelli",
        origin: "Abruzzo, Italy",
        price: "$50",
        tastingNotes: "Juicy black cherry, plum, and hints of tobacco and spice.",
        tasteProfile: {
            body: { scale: "light - bold", value: 65 },
            tannins: { scale: "smooth - tannic", value: 55 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 60 }
        },
        foodPairings: "Sliders, Land & Sea Board, Parmesan Fries",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Masciarelli champions Abruzzo’s native Montepulciano grape.",
        agingPotential: "5-8 years."
    },
    {
        title: "Cabernet Sauvignon - Thievery",
        origin: "California, USA",
        price: "$55",
        tastingNotes: "Bold blackcurrant and dark chocolate with velvety tannins.",
        tasteProfile: {
            body: { scale: "light - bold", value: 85 },
            tannins: { scale: "smooth - tannic", value: 75 },
            sweetness: { scale: "dry - sweet", value: 20 },
            acidity: { scale: "soft - acidic", value: 50 }
        },
        foodPairings: "NY Striploin Steak, Half Rack Lamb, Sliders",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Thievery’s Cabernet embodies Napa Valley’s opulent style.",
        agingPotential: "6-10 years."
    },
    {
        title: "Pinot Noir - Centrestone",
        origin: "Oregon, USA",
        price: "$60",
        tastingNotes: "Silky red fruit with earthy forest floor and baking spice.",
        tasteProfile: {
            body: { scale: "light - bold", value: 45 },
            tannins: { scale: "smooth - tannic", value: 30 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 75 }
        },
        foodPairings: "Seared Salmon, Half Rack Lamb, Mushrooms (Land & Sea add-on)",
        servingTemperature: "14-16°C (57-61°F)",
        wineryInfo: "Centrestone captures Oregon’s Willamette Valley terroir.",
        agingPotential: "7-9 years."
    },
    {
        title: "Shiraz - Domaine de L'Amandine",
        origin: "Côtes du Rhône Villages, France",
        price: "$70",
        tastingNotes: "Peppery blackberry with smoky bacon and violet notes.",
        tasteProfile: {
            body: { scale: "light - bold", value: 80 },
            tannins: { scale: "smooth - tannic", value: 65 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 55 }
        },
        foodPairings: "Grilled Chicken (Harissa), Half Rack Lamb, Fried Chicken (Korean Chili)",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Domaine de L'Amandine practices organic viticulture in Rhône.",
        agingPotential: "6-8 years."
    },
    {
        title: "Zinfandel Blend - Conundrum",
        origin: "California, USA",
        price: "$72",
        tastingNotes: "Jammy blackberry, mocha, and a hint of black pepper.",
        tasteProfile: {
            body: { scale: "light - bold", value: 80 },
            tannins: { scale: "smooth - tannic", value: 60 },
            sweetness: { scale: "dry - sweet", value: 35 },
            acidity: { scale: "soft - acidic", value: 45 }
        },
        foodPairings: "Fried Chicken (Hot Honey), Sliders, NY Cheesecake",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Conundrum’s red blend showcases California’s bold fruit character.",
        agingPotential: "4-6 years."
    },
    {
        title: "Chianti Classico - Il Palei",
        origin: "Tuscany, Italy",
        price: "$75",
        tastingNotes: "Bright cherry, leather, and dried herbs with firm structure.",
        tasteProfile: {
            body: { scale: "light - bold", value: 70 },
            tannins: { scale: "smooth - tannic", value: 70 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 80 }
        },
        foodPairings: "Seafood Pasta, Land & Sea Board, Parmesan Fries",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Il Palei’s Chianti Classico hails from a historic Tuscan estate.",
        agingPotential: "8-12 years."
    },
    {
        title: "Nebbiolo d'Alba - Deltetto",
        origin: "Piedmont, Italy",
        price: "$81",
        tastingNotes: "Rose petal, tar, and red cherry with assertive tannins.",
        tasteProfile: {
            body: { scale: "light - bold", value: 75 },
            tannins: { scale: "smooth - tannic", value: 85 },
            sweetness: { scale: "dry - sweet", value: 5 },
            acidity: { scale: "soft - acidic", value: 90 }
        },
        foodPairings: "NY Striploin Steak, Half Rack Lamb, Grilled Vegetables",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Deltetto’s Nebbiolo offers approachable Barolo-like character.",
        agingPotential: "7-10 years."
    },
    {
        title: "Shiraz - Two Hands Gnarly Dudes",
        origin: "Barossa Valley, Australia",
        price: "$83",
        tastingNotes: "Powerful dark fruit, licorice, and vanilla oak intensity.",
        tasteProfile: {
            body: { scale: "light - bold", value: 95 },
            tannins: { scale: "smooth - tannic", value: 85 },
            sweetness: { scale: "dry - sweet", value: 25 },
            acidity: { scale: "soft - acidic", value: 40 }
        },
        foodPairings: "Half Rack Lamb, NY Striploin Steak, Bread & Whipped Butter",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Two Hands crafts quintessential bold Barossa Shiraz.",
        agingPotential: "8-12 years."
    },
    {
        title: "Ripasso - Zenato",
        origin: "Veneto, Italy",
        price: "$88",
        tastingNotes: "Rich raisin and fig notes with chocolate and spice complexity.",
        tasteProfile: {
            body: { scale: "light - bold", value: 75 },
            tannins: { scale: "smooth - tannic", value: 70 },
            sweetness: { scale: "dry - sweet", value: 25 },
            acidity: { scale: "soft - acidic", value: 60 }
        },
        foodPairings: "Seafood Pasta, Land & Sea Board, Crème Brûlée",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Zenato’s Ripasso gains depth from Amarone pomace refermentation.",
        agingPotential: "6-9 years."
    },
    {
        title: "Syrah/Carmenère - Emiliana Coyam Organic",
        origin: "Colchagua, Chile",
        price: "$90",
        tastingNotes: "Dark plum, black pepper, and a touch of green herbal notes.",
        tasteProfile: {
            body: { scale: "light - bold", value: 80 },
            tannins: { scale: "smooth - tannic", value: 75 },
            sweetness: { scale: "dry - sweet", value: 20 },
            acidity: { scale: "soft - acidic", value: 55 }
        },
        foodPairings: "Half Rack Lamb, Grilled Chicken (Harissa), Fried Chicken (Korean Chili)",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Emiliana pioneers organic and biodynamic wines in Chile.",
        agingPotential: "5-7 years."
    },
    {
        title: "Cabernet Sauvignon - Precision",
        origin: "Napa Valley, USA",
        price: "$120",
        tastingNotes: "Concentrated cassis, graphite, and toasted cedar nuances.",
        tasteProfile: {
            body: { scale: "light - bold", value: 95 },
            tannins: { scale: "smooth - tannic", value: 85 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 65 }
        },
        foodPairings: "NY Striploin Steak, Tomahawk Steak (Land & Sea), Bread & Whipped Butter",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Precision focuses on single-vineyard Napa Cabernet excellence.",
        agingPotential: "12-15 years."
    },
    {
        title: "Zinfandel Blend - The Prisoner",
        origin: "Napa Valley, USA",
        price: "$150",
        tastingNotes: "Opulent blackberry, espresso, and dark chocolate layers.",
        tasteProfile: {
            body: { scale: "light - bold", value: 90 },
            tannins: { scale: "smooth - tannic", value: 75 },
            sweetness: { scale: "dry - sweet", value: 40 },
            acidity: { scale: "soft - acidic", value: 50 }
        },
        foodPairings: "Land & Sea Board, Sliders, New Orleans Beignets",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "The Prisoner redefined California’s eclectic red blends.",
        agingPotential: "8-10 years."
    },
    {
        title: "Brunello di Montalcino - Castello Banfi",
        origin: "Tuscany, Italy",
        price: "$150",
        tastingNotes: "Elegant sour cherry, leather, and earthy truffle complexity.",
        tasteProfile: {
            body: { scale: "light - bold", value: 85 },
            tannins: { scale: "smooth - tannic", value: 90 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 80 }
        },
        foodPairings: "Half Rack Lamb, NY Striploin Steak, Mushrooms (Land & Sea add-on)",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Castello Banfi is a benchmark Brunello producer.",
        agingPotential: "15-20 years."
    },
    {
        title: "Barolo - Arnaldo Rivera Undicicomuni",
        origin: "Piedmont, Italy",
        price: "$170",
        tastingNotes: "Elegant and powerful with cherry, rose, and truffle notes.",
        tasteProfile: {
            body: { scale: "light - bold", value: 85 },
            tannins: { scale: "smooth - tannic", value: 95 },
            sweetness: { scale: "dry - sweet", value: 5 },
            acidity: { scale: "soft - acidic", value: 85 }
        },
        foodPairings: "Land & Sea Board, NY Striploin Steak, Grilled Vegetables",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Arnaldo Rivera is a premium Barolo producer focusing on terroir-driven wines.",
        agingPotential: "15-25 years."
    },
    {
        title: "Cabernet Sauvignon - Austin Hope",
        origin: "Napa Valley, USA",
        price: "$210",
        tastingNotes: "Luxurious blackcurrant, violet, and vanilla bean opulence.",
        tasteProfile: {
            body: { scale: "light - bold", value: 100 },
            tannins: { scale: "smooth - tannic", value: 80 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 60 }
        },
        foodPairings: "Tomahawk Steak (Land & Sea), Half Rack Lamb, NY Cheesecake",
        servingTemperature: "16-18°C (61-64°F)",
        wineryInfo: "Austin Hope delivers bold yet polished Napa Cabernet.",
        agingPotential: "12-18 years."
    }
]
};