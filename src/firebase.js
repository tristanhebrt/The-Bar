import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
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

// Updated cocktail list saving with proper structure
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

// Wine list saving (unchanged)
export const saveWineList = async (wineList) => {
  try {
    const winesRef = collection(db, "wines");
    for (const wine of wineList) {
      await addDoc(winesRef, wine);
    }
    console.log("Wine list saved successfully.");
  } catch (error) {
    console.error("Error saving wine list:", error);
    throw error;
  }
};

// Food list saving (unchanged)
export const saveFoodList = async (foodList) => {
  try {
    const foodRef = collection(db, "foods");
    for (const food of foodList) {
      await addDoc(foodRef, food);
    }
    console.log("Food list saved successfully.");
  } catch (error) {
    console.error("Error saving food list:", error);
    throw error;
  }
};

export { auth, provider, db, analytics };