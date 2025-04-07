import React, { useState, useEffect } from "react";
import BeerCardDisplay from "../lists/beers/BeerCardDisplay";
import { ALORA_BEERS } from "../lists/beers/aloraBeers";

// Firebase imports
import { firestore } from "../../firebase";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const BeerPage = () => {
  const [importedBeers, setImportedBeers] = useState([]);
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

  // Fetch the list of allowed beer lists for the user
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

    const colRef = collection(firestore, "beerLists");

    // Real-time listener for beerLists collection
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const lists = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((list) => userAllowedLists.includes(list.id)); // Filter out lists the user is not allowed to see

        setImportedBeers(lists);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching beer lists");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, [user, userAllowedLists]); // Re-run effect when user or allowedLists change

  const allBeers = [
    ...ALORA_BEERS,
    ...importedBeers.flatMap((list) => list.items || []),
  ];

  return (
    <>
      {loading && <p>Loading beers...</p>}
      {error && <p>{error}</p>}

      <BeerCardDisplay mainTitle="All Beers" beerList={allBeers} />
      <BeerCardDisplay mainTitle="Alora Beers" beerList={ALORA_BEERS} />

      {importedBeers.map((list) => (
        <div key={list.id}>
          <BeerCardDisplay mainTitle={list.listName} beerList={list.items || []} />
        </div>
      ))}
    </>
  );
};

export default BeerPage;
