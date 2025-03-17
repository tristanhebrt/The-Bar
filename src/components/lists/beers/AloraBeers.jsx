import React from "react";
import BeerCardDisplay from "./BeerCardDisplay";

const beers = [
    {
        title: "Alora Lager",
        type: "Light Lager",
        origin: "House Beer",
        tastingNotes: "Toasted malt character with a floral hop finish",
        tasteProfile: {
            bitterness: { scale: "mild - bitter", value: 25 },  // ~20 IBU
            maltiness: { scale: "subtle - robust", value: 70 },
            hoppiness: { scale: "delicate - intense", value: 30 },
            carbonation: { scale: "flat - effervescent", value: 60 },
            alcohol: { scale: "sessionable - boozy", value: 35 },  // 5.2% ABV
            mouthfeel: { scale: "thin - creamy", value: 55 },
            finish: { scale: "clean - lingering", value: 75 }
        },
    },
    {
        title: "Corona Extra",
        type: "Pale Lager",
        origin: "Mexico City, Mexico",
        tastingNotes: "Crisp grain notes with a light corn sweetness",
        tasteProfile: {
            bitterness: { scale: "mild - bitter", value: 15 },  // ~10 IBU
            maltiness: { scale: "subtle - robust", value: 40 },
            hoppiness: { scale: "delicate - intense", value: 20 },
            carbonation: { scale: "flat - effervescent", value: 75 },
            alcohol: { scale: "sessionable - boozy", value: 30 },  // 4.6% ABV
            mouthfeel: { scale: "thin - creamy", value: 40 },
            finish: { scale: "clean - lingering", value: 85 }
        },
    },
    {
        title: "Recliner Red",
        type: "Irish Red Ale",
        origin: "Dublin, Ireland",
        tastingNotes: "Caramel malt sweetness with a nutty, biscuity finish",
        tasteProfile: {
            bitterness: { scale: "mild - bitter", value: 35 },  // ~28 IBU
            maltiness: { scale: "subtle - robust", value: 80 },
            hoppiness: { scale: "delicate - intense", value: 25 },
            carbonation: { scale: "flat - effervescent", value: 55 },
            alcohol: { scale: "sessionable - boozy", value: 45 },  // 5.8% ABV
            mouthfeel: { scale: "thin - creamy", value: 70 },
            finish: { scale: "clean - lingering", value: 65 }
        },
    },
    {
        title: "Sunsplit IPA",
        type: "West Coast IPA",
        origin: "San Diego, USA",
        tastingNotes: "Resinous pine and grapefruit notes with a dry finish",
        tasteProfile: {
            bitterness: { scale: "mild - bitter", value: 80 },  // ~70 IBU
            maltiness: { scale: "subtle - robust", value: 30 },
            hoppiness: { scale: "delicate - intense", value: 90 },
            carbonation: { scale: "flat - effervescent", value: 65 },
            alcohol: { scale: "sessionable - boozy", value: 70 },  // 7.2% ABV
            mouthfeel: { scale: "thin - creamy", value: 60 },
            finish: { scale: "clean - lingering", value: 75 }
        },
    },
];

const AloraBeers = () => {
    return (
        <>
            <BeerCardDisplay mainTitle="All Beers" recipes={beers} />

        </>
    );
};

export default AloraBeers;