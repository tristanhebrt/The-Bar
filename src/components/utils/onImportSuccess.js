import { getUserData, firestore } from '../../firebase'; 
import { updateDoc, doc, getDoc, getDocs, collection } from 'firebase/firestore'; 

export const onImportSuccess = async (importedList, userId) => {
  try {
    // Ensure userId is present
    if (!userId) {
      throw new Error("User ID is required to update user data.");
    }

    // Fetch user data
    const userData = await getUserData(userId);
    if (!userData) {
      console.error("User data not found.");
      return;
    }

    const openedLists = userData.openedLists || [];
    console.log("Current openedLists:", openedLists);

    // Reference to the imported list in the Firestore 'lists' collection
    const listRef = doc(firestore, "lists", importedList.listCode);
    const listDoc = await getDoc(listRef);

    if (!listDoc.exists()) {
      console.log("List not found.");
      return;
    }

    // Reference to the 'types' subcollection inside the list document
    const typesRef = collection(firestore, `lists/${importedList.listCode}/types`);
    const typesSnapshot = await getDocs(typesRef);

    // Get the types from the subcollection and map them to their document IDs
    const typesIds = typesSnapshot.docs.map((doc) => doc.id);
    console.log("Imported List Types (Document IDs):", typesIds);

    // Filter out document IDs that are already in openedLists
    const uniqueTypesIds = typesIds.filter((typeId) => !openedLists.includes(typeId));
    console.log("Unique Document IDs to add:", uniqueTypesIds);

    // If there are any new unique types, update openedLists with the new document IDs
    if (uniqueTypesIds.length > 0) {
      const newOpenedLists = [
        ...openedLists,
        ...uniqueTypesIds,  // Use only unique document IDs
      ];

      console.log("Updated openedLists:", newOpenedLists);

      // Update the user's openedLists in Firestore
      const userRef = doc(firestore, "users", userId);
      await updateDoc(userRef, {
        openedLists: newOpenedLists,
      });

      // Optionally, show a success notification
      alert(`List "${importedList.listName}" imported successfully!`);
      console.log("Imported list details:", importedList);
    } else {
      console.log("No new unique document IDs to add.");
    }
  } catch (error) {
    console.error("Error handling imported list:", error);
  }
};
