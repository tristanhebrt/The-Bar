import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, deleteDoc, serverTimestamp, updateDoc, getDoc, arrayUnion, setDoc } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcpk1mhutCfMQrvW6vBKG_7Tr53T9vnDU",
  authDomain: "the-bar-guide.firebaseapp.com",
  projectId: "the-bar-guide",
  storageBucket: "the-bar-guide.appspot.com",
  messagingSenderId: "609820773354",
  appId: "1:609820773354:web:fcce6af899b3729b11c093",
  measurementId: "G-LD01E6WK7Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const firestore = getFirestore(app);

// Function to save a list after extracting data from an imported file
export const saveListFromImportedData = async (user, listData) => {
  console.log("Current Auth User:", auth.currentUser?.uid);
  try {
    const { listCode, listType, items, listName } = listData;
    console.log("Saving list:", listData);

    // Create a new parent document in "lists" with an auto-generated ID.
    const listsCollectionRef = collection(db, "lists");
    const newListDocRef = await addDoc(listsCollectionRef, {
      listCode: listCode,
      createdAt: serverTimestamp(),
    });
    console.log("Created parent document with ID:", newListDocRef.id);

    // Create a subcollection "types" under this new document.
    const listDataRef = collection(newListDocRef, "types");
    // Use listType as the document ID for the subcollection.
    const listTypeRef = doc(listDataRef, listType);
    
    await setDoc(listTypeRef, {
      listName: listName,
      listType: listType,
      items: items,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    
    console.log(`New list created with code ${listCode} and type ${listType}`);
    return true;  // Return success
  } catch (error) {
    console.error(`Error saving list ${listData.listCode}:`, error);
    throw error;
  }
};

// Function to process and save multiple lists from an imported file
export const saveListsFromFile = async (importedFile) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    // Parse the imported file, assuming it's a JSON file
    const fileData = await importedFile.json();  // You can replace this with CSV parsing if needed

    // Assuming importedFile is an array of lists
    for (const listData of fileData) {
      const { listCode, listType, items, listName } = listData;
      
      // Save each list extracted from the file
      await saveListFromImportedData({
        listCode,
        listType,
        items,
        listName,
      });
    }
    
    console.log('All lists from the imported file saved successfully!');
  } catch (error) {
    console.error('Error saving lists from file:', error);
  }
};

export const getUserData = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No user data found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// Firestore references
export { db, auth, provider, analytics, firestore };
