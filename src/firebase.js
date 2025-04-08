import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { 
  getFirestore, 
  writeBatch,
  collection, 
  addDoc, 
  doc, 
  getDoc,
  setDoc, 
  serverTimestamp, 
  query, 
  where, 
  getDocs 
} from "firebase/firestore";
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
export const saveListFromImportedData = async (listData) => {
  try {
    const { listCode, listType, listName, items } = listData;

    // 1. Create or update list document with listCode as ID
    const listsRef = collection(db, 'lists');
    const listRef = doc(listsRef, listCode);
    
    await setDoc(listRef, {
      listCode,
      ownerId: auth.currentUser.uid,
      createdAt: serverTimestamp()  // Timestamp for the list itself
    }, { merge: true });

    // 2. Create the 'types' collection and add the listName document under it
    const typesRef = collection(listRef, 'types');
    const listNameDocRef = doc(typesRef, listName);
    
    // 3. Save the listName document with items field containing an array (without timestamps)
    await setDoc(listNameDocRef, {
      listType,
      listName,
      createdAt: serverTimestamp(),  // Timestamp for the listName document
      items: items // Store items array directly (without timestamps)
    }, { merge: true });

    return true;

  } catch (error) {
    console.error("Error saving list:", error);
    throw error;
  }
};

// Helper function to create valid Firestore IDs
const sanitizeId = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
    .replace(/\s+/g, '_')        // Replace spaces with underscores
    .replace(/-+/g, '_')         // Replace dashes with underscores
    .substring(0, 1500);         // Truncate to Firestore's max ID length
};

// Updated file processing function
export const saveListsFromFile = async (importedFile) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    const fileData = await importedFile.json();
    
    for (const listData of fileData) {
      await saveListFromImportedData(listData);
    }
    
    console.log('All lists processed successfully');
  } catch (error) {
    console.error('Error processing file:', error);
    throw error;
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

export const updateUserPermissions = async (userId, newAllowedLists) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      allowedLists: newAllowedLists
    }, { merge: true });
    return true;
  } catch (error) {
    console.error("Error updating permissions:", error);
    throw error;
  }
};

// Firestore references
export { db, auth, provider, analytics, firestore };
