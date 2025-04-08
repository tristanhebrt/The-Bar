import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../firebase"; // Assuming you're using Firestore and Firebase Authentication
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import BeerCardDisplay from "../lists/beers/BeerCardDisplay.jsx"; // Assuming this component is for displaying each beer list
import { onAuthStateChanged } from "firebase/auth";

const BeerPage = () => {
  const [beerLists, setBeerLists] = useState([]);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for authentication state change
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is authenticated, fetch the user data
        try {
          const userRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            setError("User data not found.");
          }
        } catch (err) {
          setError("Error fetching user data: " + err.message);
        }
      } else {
        // User is not authenticated
        setError("User not authenticated.");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("User Data:", userData); // Debugging line
  
    if (!userData) return;
  
    const fetchBeerLists = async () => {
      if (!userData) return;
    
      try {
        const beerListData = [];
    
        for (const openedList of userData.allowedLists) {
          const listCode = typeof openedList === "string" ? openedList : openedList.listCode;
    
          if (!listCode) {
            console.error("Invalid listCode:", openedList);
            continue;
          }
    
          console.log("Checking listCode:", listCode);
    
          const typeRef = collection(firestore, `lists/${listCode}/types`);
          const typeSnapshot = await getDocs(typeRef);
    
          console.log("Fetched documents for list:", listCode, typeSnapshot.docs.length);
    
          typeSnapshot.forEach((typeDoc) => {
            const typeData = typeDoc.data();
            const typeId = typeDoc.id; // This is the unique document ID
    
            console.log("Type Data:", typeData, "Type ID:", typeId);
    
            // 🔴 New check: Ensure `typeId` exists in `openedLists`
            const isOpened = userData.openedLists.includes(typeId) || 
                             userData.openedLists.some(opened => opened.typeId === typeId);
            
            if (!isOpened) {
              console.log(`Skipping typeId ${typeId}, not in openedLists`);
              return; // Skip this type
            }
    
            if (typeData.listType === "beer") {
              beerListData.push({
                listName: typeData.listName,
                listCode: listCode,
                typeId: typeId,
                items: typeData.items || [],
              });
    
              console.log("Beer List Added:", typeData.listName);
            }
          });
        }
    
        setBeerLists(beerListData);
        console.log("Final Beer List Data:", beerListData);
      } catch (error) {
        console.error("Error fetching beer lists:", error);
        setError("Error fetching beer lists.");
      }
    };
    
    
  
    fetchBeerLists();
  }, [userData]);
  
  
  const handleRemove = async (listCode, typeId) => {
    try {
      if (!userData) {
        throw new Error("User not authenticated.");
      }
  
      console.log(`Removing typeId: ${typeId} from openedLists`);
  
      // 🔴 Filter out only the specific typeId from openedLists
      const updatedOpenedLists = userData.openedLists.filter(opened => opened !== typeId);
  
      // 🔴 Update Firestore
      const userRef = doc(firestore, "users", userData.uid);
      await updateDoc(userRef, {
        openedLists: updatedOpenedLists,
      });
  
      console.log("Updated openedLists:", updatedOpenedLists);
  
      // 🔴 Update local state for immediate UI feedback
      setUserData(prevUserData => ({
        ...prevUserData,
        openedLists: updatedOpenedLists
      }));
  
      setBeerLists(prevLists => prevLists.filter(list => list.typeId !== typeId));
  
      alert("List removed successfully!");
    } catch (error) {
      console.error("Error removing list:", error);
      setError("Error removing the list.");
    }
  };
  

  return (
    <div>
      {error && <p>{error}</p>}
      {beerLists.length === 0 && <p>No beer lists found.</p>}

      {beerLists.map((list) => (
        <div key={list.typeId}>
          <BeerCardDisplay
            mainTitle={list.listName}
            beerList={list.items}
          />
          <button
            onClick={() => handleRemove(list.listCode, list.typeId)}
            style={{ color: "red", backgroundColor: "transparent", border: "none", cursor: "pointer" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default BeerPage;
