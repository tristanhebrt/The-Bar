import React from "react";
import styled from "styled-components";
import Checklist from "../lists/prep/Checklist";
import { PREP_STEPS } from '../lists/prep/checklistData';
import { CLOSE_STEPS } from '../lists/prep/closeChecklistData';

const PrepPage = () => {
    return<>
        <Checklist dataList={PREP_STEPS} checklistTitle="Bar Preparation Guide" />
        <Checklist dataList={CLOSE_STEPS} checklistTitle="Bar Closing Guide" />
    </>
};

export default PrepPage;