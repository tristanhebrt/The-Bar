import React from "react";
import WineCardDisplay from "../lists/wines/WineCardDisplay";

import { ALL_WINES, WHITE_WINES, RED_WINES, BUBBLE_WINES } from "../lists/wines/aloraWines";

const WinePage = () => {
    return<>
            <WineCardDisplay mainTitle="All Wines" recipes={ALL_WINES} />
            <WineCardDisplay mainTitle="White Wines" recipes={WHITE_WINES} />
            <WineCardDisplay mainTitle="Red Wines" recipes={RED_WINES} />
            <WineCardDisplay mainTitle="Sparkling Wines" recipes={BUBBLE_WINES} />
    </>
};

export default WinePage;
