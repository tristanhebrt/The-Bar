import React, { useState, useEffect } from "react";
import BeerCardDisplay from "../lists/beers/BeerCardDisplay.jsx";
import { db } from "../../firebase"; // Assuming this is where your Firestore instance is exported
import { collection, getDocs, doc } from "firebase/firestore"; // Firestore methods

const BeerPage = () => {
  const [beerLists, setBeerLists] = useState([]);

  useEffect(() => {
    // Fetch the beer lists from Firestore when the component mounts.
    const fetchBeerLists = async () => {
      try {
        // Assuming the structure is like: lists/{listCode}/types/{listType}/beer/{beerItemId}
        const listsRef = collection(db, "lists"); // The "lists" collection
        const listsSnapshot = await getDocs(listsRef);
        const listsData = [];

        for (const listDoc of listsSnapshot.docs) {
          const listData = listDoc.data();
          const typesRef = collection(listDoc.ref, "types"); // Accessing the "types" collection within each list

          const typesSnapshot = await getDocs(typesRef);
          for (const typeDoc of typesSnapshot.docs) {
            const typeData = typeDoc.data();
            if (typeData.listType === "beer") { // We are only interested in "beer" types
              const beerRef = collection(typeDoc.ref, "beer"); // Accessing the "beer" collection within each type

              const beerSnapshot = await getDocs(beerRef);
              const beerItems = beerSnapshot.docs.map(beerDoc => beerDoc.data()); // Get all the beer items

              listsData.push({
                listName: listData.listName,
                beerItems: beerItems, // Store the beer items for this list
              });
            }
          }
        }

        setBeerLists(listsData); // Set the beer lists state
      } catch (error) {
        console.error("Error fetching beer lists:", error);
      }
    };

    fetchBeerLists(); // Call the fetch function

  }, []); // Empty dependency array to fetch data once when component mounts

  return (
    <div>
      {beerLists.length > 0 ? (
        beerLists.map((list, index) => (
          <BeerCardDisplay
            key={index}
            mainTitle={list.listName}
            beerList={list.beerItems || []} // Display beer items
          />
        ))
      ) : (
        <p>No beer lists found.</p> // Display a message if no lists are available
      )}
    </div>
  );
};

export default BeerPage;
