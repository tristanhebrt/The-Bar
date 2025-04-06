// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";  // Import doc and deleteDoc here
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

// Save lists to Firestore
export const saveCocktailList = async (listData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    const listRef = collection(db, "cocktailLists");
    await addDoc(listRef, {
      ...listData,
      userId: user.uid,
      createdAt: serverTimestamp()
    });
    console.log("Cocktail list saved successfully");
  } catch (error) {
    console.error("Error saving cocktail list:", error);
    throw error;
  }
};

export const saveFoodList = async (listData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    const listRef = collection(db, "foodLists");
    await addDoc(listRef, {
      ...listData,
      userId: user.uid,
      createdAt: serverTimestamp()
    });
    console.log("Food list saved successfully");
  } catch (error) {
    console.error("Error saving food list:", error);
    throw error;
  }
};

export const saveWineList = async (listData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    const listRef = collection(db, "wineLists");
    await addDoc(listRef, {
      ...listData,
      userId: user.uid,
      createdAt: serverTimestamp()
    });
    console.log("Wine list saved successfully");
  } catch (error) {
    console.error("Error saving wine list:", error);
    throw error;
  }
};

export const saveBeerList = async (listData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    const listRef = collection(db, "beerLists");
    await addDoc(listRef, {
      ...listData,
      userId: user.uid,
      createdAt: serverTimestamp()
    });
    console.log("Beer list saved successfully");
  } catch (error) {
    console.error("Error saving beer list:", error);
    throw error;
  }
};

export const saveChecklist = async (listData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");

    const listRef = collection(db, "checklists");
    await addDoc(listRef, {
      ...listData,
      userId: user.uid,
      createdAt: serverTimestamp()
    });
    console.log("Checklist saved successfully");
  } catch (error) {
    console.error("Error saving checklist:", error);
    throw error;
  }
};

// Delete lists to Firestore
export const deleteFoodList = async (listId) => {
  try {
    const listRef = doc(db, "foodLists", listId);
    await deleteDoc(listRef);
    console.log("Food list deleted successfully");
  } catch (error) {
    console.error("Error deleting food list:", error);
    throw error;
  }
};

export const deleteWineList = async (listId) => {
  try {
    const listRef = doc(db, "wineLists", listId);
    await deleteDoc(listRef);
    console.log("Wine list deleted successfully");
  } catch (error) {
    console.error("Error deleting wine list:", error);
    throw error;
  }
};

export const deleteBeerList = async (listId) => {
  try {
    const listRef = doc(db, "beerLists", listId);
    await deleteDoc(listRef);
    console.log("Beer list deleted successfully");
  } catch (error) {
    console.error("Error deleting beer list:", error);
    throw error;
  }
};

export const deleteChecklist = async (listId) => {
  try {
    const listRef = doc(db, "checklists", listId);
    await deleteDoc(listRef);
    console.log("Checklist deleted successfully");
  } catch (error) {
    console.error("Error deleting checklist:", error);
    throw error;
  }
};

export const deleteCocktailList = async (listId) => {
  try {
    const listRef = doc(db, "cocktailLists", listId);
    await deleteDoc(listRef);
    console.log("Cocktail list deleted successfully");
  } catch (error) {
    console.error("Error deleting cocktail list:", error);
    throw error;
  }
};

const firestore = getFirestore(app);
export { firestore };

export { auth, provider, db, analytics };