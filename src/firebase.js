import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  serverTimestamp, 
  query, 
  where, 
  getDocs 
} from "firebase/firestore";import { getAnalytics } from "firebase/analytics";

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
    // Validate required fields
    if (!listData?.listCode || !listData?.listType) {
      throw new Error('Missing required listCode or listType');
    }

    const { listCode, listType, items, listName } = listData;
    console.log('Saving list with code:', listCode); // Debug log

    // Check for existing list
    const listsRef = collection(db, 'lists');
    const q = query(listsRef, where('listCode', '==', listCode));
    const snapshot = await getDocs(q);

    // Get or create parent document
    const parentDocRef = snapshot.empty 
      ? await addDoc(listsRef, { listCode, createdAt: serverTimestamp() })
      : snapshot.docs[0].ref;

    // Update type subcollection
    const typeRef = doc(collection(parentDocRef, 'types'), listType);
    await setDoc(typeRef, {
      listName,
      listType,
      items,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return true;
  } catch (error) {
    console.error('Error saving list:', error);
    throw error;
  }
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

// Firestore references
export { db, auth, provider, analytics, firestore };
