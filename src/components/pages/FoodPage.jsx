import React from "react";
import FoodCardDisplay from "../lists/foods/FoodCardDisplay";

import { ALORA_APPETIZERS, ALORA_SUSHIS, ALORA_SALADS, ALORA_SHARING_BOARDS, ALORA_MAINS } from "../lists/foods/aloraFoods";


const FoodPage = () => {
    return <>
        <FoodCardDisplay mainTitle="Appetizers" foodList={ALORA_APPETIZERS} />
        <FoodCardDisplay mainTitle="Sushi" foodList={ALORA_SUSHIS} />
        <FoodCardDisplay mainTitle="Salads" foodList={ALORA_SALADS} />
        <FoodCardDisplay mainTitle="Sharing Boards" foodList={ALORA_SHARING_BOARDS} />
        <FoodCardDisplay mainTitle="Mains" foodList={ALORA_MAINS} />
    </>
};

export default FoodPage;
