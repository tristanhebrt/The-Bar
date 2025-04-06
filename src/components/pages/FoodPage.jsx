import React, { useState, useEffect } from "react";
import FoodCardDisplay from "../lists/foods/FoodCardDisplay";
import { 
  ALORA_APPETIZERS, 
  ALORA_SUSHIS, 
  ALORA_SALADS, 
  ALORA_SHARING_BOARDS, 
  ALORA_MAINS 
} from "../lists/foods/aloraFoods";
import DeleteList from "../utils/DeleteList";

// Import Firestore and the modular functions
import { firestore, deleteFoodList } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const FoodPage = () => {
  const [importedFoods, setImportedFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real-time listener for foodLists collection using modular API
  useEffect(() => {
    const colRef = collection(firestore, "foodLists");
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const lists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImportedFoods(lists);
        setLoading(false);
      },
      (err) => {
        setError("Error fetching food lists");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleDelete = async (listId) => {
    try {
      await deleteFoodList(listId);
      setImportedFoods((prevFoods) =>
        prevFoods.filter((list) => list.id !== listId)
      );
    } catch (err) {
      console.error("Error deleting food list:", err);
    }
  };

  const allFoods = [
    ...ALORA_APPETIZERS,
    ...ALORA_SUSHIS,
    ...ALORA_SALADS,
    ...ALORA_SHARING_BOARDS,
    ...ALORA_MAINS,
    ...importedFoods.flatMap((list) => list.items || []),
  ];

  return (
    <>
      {loading && <p>Loading foods...</p>}
      {error && <p>{error}</p>}

      <FoodCardDisplay mainTitle="All Dishes" foodList={allFoods} />
      <FoodCardDisplay mainTitle="Appetizers" foodList={ALORA_APPETIZERS} />
      <FoodCardDisplay mainTitle="Sushi" foodList={ALORA_SUSHIS} />
      <FoodCardDisplay mainTitle="Salads" foodList={ALORA_SALADS} />
      <FoodCardDisplay mainTitle="Sharing Boards" foodList={ALORA_SHARING_BOARDS} />
      <FoodCardDisplay mainTitle="Mains" foodList={ALORA_MAINS} />

      {importedFoods.length > 0 &&
        importedFoods.map((list) => (
          <div key={list.id} style={{ position: "relative" }}>
            <FoodCardDisplay mainTitle={list.listName} foodList={list.items || []} />
            <DeleteList listId={list.id} onDelete={() => handleDelete(list.id)} />
          </div>
        ))}
    </>
  );
};

export default FoodPage;
