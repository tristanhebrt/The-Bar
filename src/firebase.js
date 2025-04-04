// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcpk1mhutCfMQrvW6vBKG_7Tr53T9vnDU",
  authDomain: "the-bar-guide.firebaseapp.com",
  projectId: "the-bar-guide",
  storageBucket: "the-bar-guide.appspot.com",
  messagingSenderId: "609820773354",
  appId: "1:609820773354:web:fcce6af899b3729b11c093",
  measurementId: "G-LD01E6WK7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, analytics };
