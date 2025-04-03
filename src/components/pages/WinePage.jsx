import React from "react";
import WineCardDisplay from "../lists/wines/WineCardDisplay";

import { WHITE_WINES, RED_WINES, BUBBLE_WINES } from "../lists/wines/aloraWines";

const allWines = [...WHITE_WINES, ...RED_WINES, ...BUBBLE_WINES];
const WinePage = () => {
    return<>
        <WineCardDisplay mainTitle="All Wines" recipes={allWines} />
        <WineCardDisplay mainTitle="White Wines" recipes={WHITE_WINES} />
        <WineCardDisplay mainTitle="Red Wines" recipes={RED_WINES} />
        <WineCardDisplay mainTitle="Sparkling Wines" recipes={BUBBLE_WINES} />
    </>
};

export default WinePage;
