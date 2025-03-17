import React from "react";
import BeerCardDisplay from "../lists/beers/BeerCardDisplay";

import { ALORA_BEERS } from "../lists/beers/aloraBeers";

const BeerPage = () => {
    return<>
        <BeerCardDisplay mainTitle="Alora Beers" beerList={ALORA_BEERS}/>
    </>
};

export default BeerPage;
