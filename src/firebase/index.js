import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt8XmTerh-aVyYiquKaxdIQnf5Je9eEfA",
  authDomain: "universitytech-2627.firebaseapp.com",
  projectId: "universitytech-2627",
  storageBucket: "universitytech-2627.appspot.com",
  messagingSenderId: "883931808318",
  appId: "1:883931808318:web:7594e6a379987bdf4d076f"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new EmailAuthProvider();

export { db, auth, provider };
export default app;