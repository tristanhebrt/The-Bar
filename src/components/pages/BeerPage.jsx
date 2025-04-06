import React, { useState, useEffect } from "react";
import BeerCardDisplay from "../lists/beers/BeerCardDisplay";
import { ALORA_BEERS } from "../lists/beers/aloraBeers";

// Firebase imports
import { firestore } from "../../firebase";
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
                <BeerCardDisplay key={list.id} mainTitle={list.listName} beerList={list.items || []} />
            ))}
        </>
    );
};

export default BeerPage;
