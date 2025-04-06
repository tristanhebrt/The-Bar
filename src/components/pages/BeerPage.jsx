import React, { useState, useEffect } from "react";
import BeerCardDisplay from "../lists/beers/BeerCardDisplay";
import { ALORA_BEERS } from "../lists/beers/aloraBeers";
import DeleteList from "../utils/DeleteList";

// Firebase imports
import { firestore, deleteBeerList } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const BeerPage = () => {
    const [importedBeers, setImportedBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const colRef = collection(firestore, "beerLists");

        // Real-time listener for beerLists collection
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const lists = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setImportedBeers(lists);
                setLoading(false);
            },
            (err) => {
                setError("Error fetching beer lists");
                setLoading(false);
            }
        );

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    const handleDelete = async (listId) => {
        try {
          await deleteBeerList(listId);
          setImportedBeers((prevFoods) =>
            prevFoods.filter((list) => list.id !== listId)
          );
        } catch (err) {
          console.error("Error deleting food list:", err);
        }
      };

    const allBeers = [
        ...ALORA_BEERS,
        ...importedBeers.flatMap((list) => list.items || [])
    ];

    return (
        <>
            {loading && <p>Loading beers...</p>}
            {error && <p>{error}</p>}
            
            <BeerCardDisplay mainTitle="All Beers" beerList={allBeers} />
            <BeerCardDisplay mainTitle="Alora Beers" beerList={ALORA_BEERS} />
            
            {importedBeers.map((list) => (
            <div key={list.id} style={{ position: "relative" }}>
                <BeerCardDisplay mainTitle={list.listName} beerList={list.items || []} />
                <DeleteList listId={list.id} onDelete={() => handleDelete(list.id)} />
            </div>
))}
        </>
    );
};

export default BeerPage;
