

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH6-i92QHFQam7UDQY5kDwL9PgkJoRPWw",
  authDomain: "bakery-react.firebaseapp.com",
  projectId: "bakery-react",
  storageBucket: "bakery-react.appspot.com",
  messagingSenderId: "1012010239972",
  appId: "1:1012010239972:web:2aaac0bd2b3a68174429f1",
  measurementId: "G-LMSPRZNWD4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
