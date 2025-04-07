import React, { useState, useEffect } from "react";
import Checklist from "../lists/prep/Checklist";
import { PREP_STEPS } from "../lists/prep/prepGuide";
import { CLOSE_STEPS } from "../lists/prep/closeGuide";

// Firebase imports
import { firestore } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const ChecklistPage = () => {
  const [expandedChecklist, setExpandedChecklist] = useState(null);
  const [importedChecklists, setImportedChecklists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const colRef = collection(firestore, "checklists");

    // Real-time listener for checklists collection
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const lists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImportedChecklists(lists);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching checklists");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const renderChecklist = (dataList, checklistTitle) => (
    <Checklist
      key={checklistTitle}
      dataList={dataList}
      checklistTitle={checklistTitle}
      isExpanded={expandedChecklist === checklistTitle}
      setIsExpanded={setExpandedChecklist}
    />
  );

  return (
    <>
      {loading && <p>Loading checklists...</p>}
      {error && <p>{error}</p>}

      {renderChecklist(PREP_STEPS, "Bar Preparation Guide")}
      {renderChecklist(CLOSE_STEPS, "Bar Closing Guide")}

      {importedChecklists.map((list) => (
        <Checklist
          key={list.id}
          dataList={list.items || []}
          checklistTitle={list.listName}
          isExpanded={expandedChecklist === list.listName}
          setIsExpanded={setExpandedChecklist}
        />
      ))}
    </>
  );
};

export default ChecklistPage;
