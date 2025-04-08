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
    
]
};