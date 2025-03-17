import React, { useState } from "react";
import Checklist from "../lists/prep/Checklist";

import { PREP_STEPS } from "../lists/prep/prepGuide";
import { CLOSE_STEPS } from "../lists/prep/closeGuide";

const PrepPage = () => {
    const [expandedChecklist, setExpandedChecklist] = useState(null); // Track which one is open

    return (
        <>
            <Checklist 
                dataList={PREP_STEPS} 
                checklistTitle="Bar Preparation Guide" 
                isExpanded={expandedChecklist === "Bar Preparation Guide"}
                setIsExpanded={setExpandedChecklist}
            />
            <Checklist 
                dataList={CLOSE_STEPS} 
                checklistTitle="Bar Closing Guide" 
                isExpanded={expandedChecklist === "Bar Closing Guide"}
                setIsExpanded={setExpandedChecklist}
            />
        </>
    );
};

export default PrepPage;
