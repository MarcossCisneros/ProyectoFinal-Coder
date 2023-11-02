// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZe2y94aBXHV7_Gx4A_joY37LO5lUwDQg",
  authDomain: "reactjs-coder-dd256.firebaseapp.com",
  projectId: "reactjs-coder-dd256",
  storageBucket: "reactjs-coder-dd256.appspot.com",
  messagingSenderId: "51174834510",
  appId: "1:51174834510:web:88b4735b896adec97b5e1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
