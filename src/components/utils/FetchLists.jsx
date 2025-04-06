import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const fetchLists = async (collectionName) => {
  const db = getFirestore();
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    if (querySnapshot.empty) {
      return []; // Return an empty array if no documents are found
    }

    // Map over the documents to extract and return the data
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching lists:', error);
    return []; // Return an empty array in case of an error
  }
};
