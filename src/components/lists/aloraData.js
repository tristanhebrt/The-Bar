export const ALORA_BEERS = {
    listName: "Alora Beers",
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

export const BUBBLE_WINES = {
    listName: "Alora Bubble Wines",
    listType: "wine",
    listCode: "aloraDataList",
    items: [
    {
        title: "Prosecco - Serenissima",
        origin: "Veneto, Italy",
        price: "$60",
        tastingNotes: "Vibrant and refreshing with crisp green apple and floral hints.",
        tasteProfile: {
            body: { scale: "light - bold", value: 25 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 20 },
            acidity: { scale: "soft - acidic", value: 75 }
        },
        foodPairings: "Crispy Crab Bites, Tuna Tacos, Whipped Feta",
        servingTemperature: "6-8°C (43-46°F)",
        wineryInfo: "Serenissima combines modern techniques with traditional Venetian craftsmanship.",
        agingPotential: "Best within 2-3 years."
    },
    {
        title: "Franciacorta Brut - Corte Aura",
        origin: "Lombardia, Italy",
        price: "$90",
        tastingNotes: "Elegant bubbles with toasted almond, citrus, and brioche complexity.",
        tasteProfile: {
            body: { scale: "light - bold", value: 50 },
            tannins: { scale: "smooth - tannic", value: 10 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 80 }
        },
        foodPairings: "Bang Bang Broccoli, Crème Brûlée, Whipped Feta",
        servingTemperature: "6-8°C (43-46°F)",
        wineryInfo: "Corte Aura crafts méthode traditionnelle sparkling wines in Lombardy.",
        agingPotential: "5-7 years."
    },
    {
        title: "Crémant - Bailly Lapierre Reserve Brut",
        origin: "France",
        price: "$75",
        tastingNotes: "Dry and lively with green apple, pear, and mineral freshness.",
        tasteProfile: {
            body: { scale: "light - bold", value: 35 },
            tannins: { scale: "smooth - tannic", value: 5 },
            sweetness: { scale: "dry - sweet", value: 10 },
            acidity: { scale: "soft - acidic", value: 85 }
        },
        foodPairings: "Garlic Lobster Tail (add-on), Crispy Crab Bites, Caesar Salad",
        servingTemperature: "8-10°C (46-50°F)",
        wineryInfo: "Bailly Lapierre pioneers organic practices in Burgundian crémant.",
        agingPotential: "3-5 years."
    },
    {
        title: "Champagne - Veuve Cliquot Brut",
        origin: "France",
        price: "$220",
        tastingNotes: "Classic structure with notes of toasted bread, lemon zest, and honey.",
        tasteProfile: {
            body: { scale: "light - bold", value: 55 },
            tannins: { scale: "smooth - tannic", value: 10 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 85 }
        },
        foodPairings: "Land & Sea Board, NY Cheesecake, Beignets",
        servingTemperature: "6-8°C (43-46°F)",
        wineryInfo: "Veuve Cliquot is synonymous with luxury and consistent quality.",
        agingPotential: "10-15 years."
    },
    {
        title: "Champagne - Dom Perignon Brut",
        origin: "France",
        price: "$550",
        tastingNotes: "Complex and refined with brioche, citrus, and almond notes.",
        tasteProfile: {
            body: { scale: "light - bold", value: 60 },
            tannins: { scale: "smooth - tannic", value: 10 },
            sweetness: { scale: "dry - sweet", value: 15 },
            acidity: { scale: "soft - acidic", value: 85 }
        },
        foodPairings: "Land & Sea Board, Garlic Lobster Tail (add-on), NY Cheesecake",
        servingTemperature: "6-8°C (43-46°F)",
        wineryInfo: "Dom Perignon is one of the most prestigious Champagne houses in France.",
        agingPotential: "20+ years."
    }
]
};

export const ALORA_COCKTAILS = {
    listName: "Alora Cocktails",
    listType: "cocktail",
    listCode: "aloraDataList",
    items: [
    {
        title: "Into the Fire",
        ingredients: {
            booze: ["2 oz Prebatch"],
            syrups: ["1 oz Lime Juice", "0.5 oz Agave Syrup"],
            garnishes: ["Spicy Rim", "Lime Wheel"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Rocks glass with cracked ice.",
            "Garnish with a lime wheel."
        ],
        notes: "A spicy and tangy cocktail with a refreshing lime finish.",
        flavor: "Spicy, Tangy, Refreshing"
    },
    {
        title: "Alora OP Margarita",
        ingredients: {
            booze: ["1.5 oz Casamigos Blanco", "0.5 oz Grand Marnier"],
            syrups: ["1 oz Lime Juice", "0.5 oz Agave Syrup"],
            garnishes: ["Salt Rim", "Lime Wheel"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into glass.",
            "Rim glass with salt.",
            "Garnish with a lime wheel."
        ],
        notes: "A classic margarita with a rich and smooth flavor.",
        flavor: "Classic, Rich, Smooth"
    },
    {
        title: "Secret Rose",
        ingredients: {
            booze: ["2 oz Tequila", "0.5 oz Lillet"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Raspberry Syrup"],
            others: ["Basil Leaves", "Rose Lemonade"],
            garnishes: ["1 Flower", "Basil Bunch"]
        },
        steps: [
            "Shake all ingredients with a basil leaf and ice until well chilled.",
            "Strain into a Collins glass.",
            "Top off with rose lemonade.",
            "Garnish with a basil bunch and a flower."
        ],
        notes: "A floral and fruity cocktail with a hint of basil.",
        flavor: "Floral, Fruity, Herbal"
    },
    {
        title: "Boat Party",
        ingredients: {
            booze: ["2.25 oz Prebatch"],
            syrups: ["1 oz Lime Juice", "1 oz Banana Syrup"],
            others: ["Mint Leaves"],
            bitters: ["5 dashes Angostura Bitters"],
            garnishes: ["3 Banana Chips"]
        },
        steps: [
            "Shake the prebatch, lime juice & banana syrup with ice until well chilled.",
            "Add mint to the bottom of a Collins glass.",
            "Strain into the glass, fill with cracked ice.",
            "Top off with crushed ice, cover with Angostura Bitters. ",
            "Garnish with banana chips."
        ],
        notes: "A tropical cocktail with a refreshing mint and banana flavor.",
        flavor: "Tropical, Minty, Banana"
    },
    {
        title: "Sunset Chaser",
        ingredients: {
            booze: ["1.5 oz Tequila", "0.5 oz Grand Marnier"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Earl Grey Syrup", "1 oz Blood Orange Juice"],
            others: ["2 dashes Foamer", "Flower"],
            bitters: ["3-5 dashes Walnut Bitters"]
        },
        steps: [
            "Shake the prebatch, lemon juice, earl grey syrup, blood orange juice and foamer with ice until well chilled.",
            "Strain into a chilled Coupe glass.",
            "Garnish with walnut bitters and make a streak",
            "Add a flower to the center."
        ],
        notes: "A sophisticated cocktail with a blend of citrus and tea flavors.",
        flavor: "Citrus, Tea, Sophisticated"
    },
    {
        title: "Prime Thyme",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Thyme Syrup"],
            others: ["Cucumber Tonic Soda"],
            garnishes: ["3 Thyme Sprigs"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Collins glass.",
            "Top with cucumber tonic soda.",
            "Garnish with a thyme sprig bunch."
        ],
        notes: "A refreshing cocktail with herbal thyme and cucumber notes.",
        flavor: "Herbal, Refreshing, Cucumber"
    },
    {
        title: "Bourbon Turnover",
        ingredients: {
            booze: ["1.5 oz Bourbon Whiskey", "0.75 oz Calvados"],
            syrups: ["0.33 oz Cinnamon Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["1 Apple Wheel"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass with a large ice cube.",
            "Garnish with an apple wheel."
        ],
        notes: "A warm and spicy cocktail with a hint of apple and cinnamon.",
        flavor: "Warm, Spicy, Apple"
    },
    {
        title: "Dreamer",
        ingredients: {
            booze: ["1.5 oz Pisco", "0.5 oz Vanilla Liqueur"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Crush Syrup"],
            garnishes: ["1 Flower"]
        },
        steps: [
            "Shake the prebatch, lemon juice and crush syrup with ice until well chilled.",
            "Strain into a Coupe.",
            "Garnish with a flower."
        ],
        notes: "A light and floral cocktail with a citrusy finish.",
        flavor: "Light, Floral, Citrusy"
    },
    {
        title: "Love Note",
        ingredients: {
            booze: ["1.75 oz Gin", "0.5 oz Aperol"],
            syrups: ["1 oz Lemon Juice", "0.5 oz Simple Syrup", "0.5 oz Juice Blend"],
            garnishes: ["Love Note"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a Coupe.",
            "Garnish with a love note."
        ],
        notes: "A light and floral cocktail with a citrusy finish.",
        flavor: "Bittersweet, Floral, Citrusy"
    },
]
};

export const ALORA_APPETIZERS = {
    listName: "Alora Appetizers",
    listType: "food",
    listCode: "aloraDataList",
    items: [
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
  
  export const ALORA_MAINS = {
    listName: "Alora Mains",
    listType: "food",
    listCode: "aloraDataList",
    items: [
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
  ]
  };
  
  export const ALORA_SUSHIS = {
    listName: "Alora Sushis",
    listType: "food",
    listCode: "aloraDataList",
    items: [
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
  ]
  };
  
  export const ALORA_SALADS = {
    listName: "Alora Salads",
    listType: "food",
    listCode: "aloraDataList",
    items: [
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
  ]
  };
  
  export const ALORA_SHARING_BOARDS = {
    listName: "Alora Sharing Boards",
    listType: "food",
    listCode: "aloraDataList",
    items: [
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
  ]
  };

  export const ALORA_BAR_CLOSE_GUIDE = {
    listName: "Alora Bar Closing Guide",
    listType: "checklist",
    listCode: "aloraDataList",
    items: [
    {
        title: "Restock Fridge",
        content: {
        soda: [
            "Still water", "Sparkling water", "Redbull", "Ginger beer",
            "Cucumber tonic", "Rose lemonade", "Sunbrew Corona", "Canned sodas"
        ],
        juice: [
            "Mango juice", "Pineapple juice", "Apple juice", "Cranberry juice"
        ],
        beer: [
            "Alora Lager", "Sunsplit IPA", "Recliner Red", "Corona Extra"
        ],
        wine: [
            "Prosecco (chilled)", "Bella Terra (chilled)", "Tiefenbrunner (chilled)",
            "Crowded House (chilled)", "Masciarelli", "Thievery", "Centerstone"
        ]
        }
    },
    {
        title: "Put Away Perishables",
        content: {
            perishables: ["Basil", "Mint", "Thyme", "Flowers", "Olives", "Lime wedges", "Fruit"],
        }
    },
    {
        title: "Plastic Wrap",
        content: {
            rims: ["Caesar mix", "Spicy salt mix", "Salt", "Tajin", "Espresso Beans"],
            dry: ["Lime wheels", "Lemon wheels", "Orange wheels", "Banana chips"],
        }
    },
    {
        title: "Clean Bins",
        content: {
            center: [
                "Clean spouts",
                "Cap bottles",
                "Wipe Bottles",
                "Put juices in fridge",
                "Wipe down bottle area",
            ],
            bartop: [
                "Dissasemble bartop",
                "Wipe down",
                "Re-assemble bartop"
            ],
            booze: [
                "Clean spouts",
                "Cap bottles",
                "Wipe Bottles",
                "Wipe down bottle area",
            ],
            syrups: [
                "Wipe bottles",
                "Put in milk crate",
                "Bring to walk-in fridge"
            ],
            ice: [
                "Put away king cubes",
                "Purge ice",
                "Clean ice bin",
                "Clean sink",
            ],
            tools: [
                "Wash tools and tins",
                "Wash cutting board",
                "Put away in ice bin"
            ]
        }
    },
    {
        title: "Clean Dishwasher",
        content: {
            wash: [
                "Wash, polish & put away all glassware", 
                "Wash mats",
                "Empty ice",
            ],
            dissasemble: [
                "Turn off dishwasher",
                "Remove and clean top parts",
                "Clean top filter",
                "Clean bottom filter",
                "Remove plug (in water)",
            ]
        }
    },
    {
        title: "Final Checks",
        content: {
            floor: [
                "Take away and clean floor-mats",
                "Sweep floor",
                "Take away garbage and broken glass",
                "Put away box of empties in stairwell",
                "Put everything up on the bar",
            ],
            items: [
                "Fill wine fridge",
                "Put away candles",
                "Wipe down back of bar",
                "Wipe down front of bar",
                "Close all lights",
                "Clock out"
            ]
        }
    }
]
};

export const ALORA_BAR_OPEN_GUIDE = {
    listName: "Alora Bar Opening Guide",
    listType: "checklist",
    listCode: "aloraDataList",
    items: [
    {
        title: "Restock Fruit",
        content: {
        fruits: [
            "Cut lime wedges",
            "Fill fruit bowl",
            "Fill fruit plate",
        ]
        }
    },
    {
        title: "Restock Fridge",
        content: {
        soda: [
            "Still water", "Sparkling water", "Redbull", "Ginger beer",
            "Cucumber tonic", "Rose lemonade", "Sunbrew Corona", "Canned sodas"
        ],
        juice: [
            "Mango juice", "Pineapple juice", "Apple juice", "Cranberry juice",
            "Blood orange juice", "Lemon juice", "Lime juice", "Espresso backup"
        ],
        beer: [
            "Alora Lager", "Sunsplit IPA", "Recliner Red", "Corona Extra"
        ],
        wine: [
            "Prosecco (chilled)", "Bella Terra (chilled)", "Tiefenbrunner (chilled)",
            "Crowded House (chilled)", "Masciarelli", "Thievery", "Centerstone"
        ]
        }
    },
    {
        title: "Restock Garnishes",
        content: {
        herbs: ["Basil", "Mint", "Thyme"],
        citrus: ["Lime wheels", "Lemon wheels", "Orange wheels"],
        specialty: ["Flowers", "Espresso beans", "Love note", "Banana chips", "Olives"]
        }
    },
    {
        title: "Top off Rim Salts",
        content: {
        rims: [
            "Caesar mix", "Spicy salt mix", "Salt", "Tajin"
        ]
        }
    },
    {
        title: "Top off Prebatch",
        content: {
        Prebatch: [
            "Into the Fire (red-red)", "Margarita Mix (black-red-black)", "Boat Party (yellow-black-yellow)", 
            "Sunset Chaser (yellow-yellow)", "Dreamer (blue-blue)", "Secret Rose (green-red)", "Bourbon Turnover (red-yellow)"
        ]
        }
    },
    {
        title: "Top off Syrups",
        content: {
        Syrups: [
            "Lemon (yellow-yellow)", "Lime (green-green)", "Espresso (white-white)", "Simple (white-white)", "Agave (white-white)", "Demerara (black-black)", 
            "Strawberry (green-red)", "Thyme (black-green)", "Crush (red-red)", "Banana (yellow-black-yellow)", "Spice (yellow-yellow)", 
            "Cinnamon (red-red)", "Earl Grey (white-white)", "Olive brine (yellow-green)"
        ]
        }
    },
    {
        title: "Final Checks",
        content: {
        items: [
            "Skewers", "Paperclips", "Straws", "Napkins", "Polishing rags", "Cleaning rags",
            "Candles", "Box for empties", "Ice", "Pebble ice", "King cubes"
        ]
        }
    }
]
};