// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQSDnKKSAcP68HynwMEf4XsFdhdezow-Y",
  authDomain: "pokedex-cf89e.firebaseapp.com",
  projectId: "pokedex-cf89e",
  storageBucket: "pokedex-cf89e.appspot.com",
  messagingSenderId: "177123126775",
  appId: "1:177123126775:web:025afd43f3019fb0e312f2",
  measurementId: "G-N4BHWP79PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);