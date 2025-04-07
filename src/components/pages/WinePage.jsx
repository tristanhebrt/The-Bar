import React, { useState, useEffect } from "react";
import WineCardDisplay from "../lists/wines/WineCardDisplay";

// Wine lists
import { WHITE_WINES, RED_WINES, BUBBLE_WINES } from "../lists/wines/aloraWines";

// Firebase imports
import { firestore } from "../../firebase";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const WinePage = () => {
  const [importedWines, setImportedWines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAllowedLists, setUserAllowedLists] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch current user data
  useEffect(() => {
    const currentUser = getAuth().currentUser;
    if (currentUser) {
      setUser(currentUser);
      fetchUserAllowedLists(currentUser.uid);
    }
  }, []);

  // Fetch allowed wine lists for the user
  const fetchUserAllowedLists = async (userId) => {
    try {
      const userDocRef = doc(firestore, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const allowedLists = userDoc.data().allowedLists || [];
        setUserAllowedLists(allowedLists);
      }
    } catch (err) {
      setError("Error fetching user allowed lists");
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user) return;

    const colRef = collection(firestore, "wineLists");

    // Real-time listener for wineLists collection
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const lists = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((list) => userAllowedLists.includes(list.id)); // Filter lists the user is allowed to see

        setImportedWines(lists);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching wine lists");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, [user, userAllowedLists]); // Re-run when user or allowed lists change

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

      {/* Display Imported Wine Lists */}
      {importedWines.length > 0 &&
        importedWines.map((list) => (
          <div key={list.id}>
            <WineCardDisplay mainTitle={list.listName} recipes={list.items || []} />
          </div>
        ))}
    </>
  );
};

export default WinePage;
