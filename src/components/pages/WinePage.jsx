import React, { useState, useEffect } from "react";
import WineCardDisplay from "../lists/wines/WineCardDisplay";

// Wine lists
import { WHITE_WINES, RED_WINES, BUBBLE_WINES } from "../lists/wines/aloraWines";
import DeleteList from "../utils/DeleteList";

// Import Firestore instance and necessary functions from Firebase v9
import { firestore, deleteWineList } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const WinePage = () => {
  const [importedWines, setImportedWines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real-time listener for wineLists collection
  useEffect(() => {
    const colRef = collection(firestore, "wineLists");
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const winesList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImportedWines(winesList);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching lists");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Handle deleting a wine list
  const handleDelete = async (listId) => {
    try {
      await deleteWineList(listId); // Delete the wine list from Firebase
      setImportedWines((prevWines) =>
        prevWines.filter((list) => list.id !== listId)
      );
    } catch (err) {
      console.error("Error deleting wine list:", err);
    }
  };

  const allWines = [
    ...WHITE_WINES,
    ...RED_WINES,
    ...BUBBLE_WINES,
    ...importedWines.flatMap((list) => list.items || []),
  ];

  return (
    <>
      {loading && <p>Loading wines...</p>}
      {error && <p>{error}</p>}

      {/* Display All Wines */}
      <WineCardDisplay mainTitle="All Wines" recipes={allWines} />

      {/* Display Static Wine Categories */}
      <WineCardDisplay mainTitle="White Wines" recipes={WHITE_WINES} />
      <WineCardDisplay mainTitle="Red Wines" recipes={RED_WINES} />
      <WineCardDisplay mainTitle="Sparkling Wines" recipes={BUBBLE_WINES} />

      {/* Display Imported Wine Lists with delete button */}
      {importedWines.length > 0 &&
        importedWines.map((list) => (
          <div key={list.id} style={{ position: "relative" }}>
            <WineCardDisplay
              mainTitle={list.listName}
              recipes={list.items || []}
            />
            <DeleteList
              listId={list.id}
              onDelete={() => handleDelete(list.id)}
            />
          </div>
        ))}
    </>
  );
};

export default WinePage;
