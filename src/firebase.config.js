import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo6IL-Uno4qzlSRdwfS1PmXel4Y10z5T4",
  authDomain: "house-market-place-app-fc588.firebaseapp.com",
  projectId: "house-market-place-app-fc588",
  storageBucket: "house-market-place-app-fc588.appspot.com",
  messagingSenderId: "341619172062",
  appId: "1:341619172062:web:6a0b3ac8fe917dbbd4184f"
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore()