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