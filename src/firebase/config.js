// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG5-LY5LMy8u-276y-Gswvmny6aCtfui8",
  authDomain: "ecommerce-campomanes.firebaseapp.com",
  projectId: "ecommerce-campomanes",
  storageBucket: "ecommerce-campomanes.appspot.com",
  messagingSenderId: "135289164763",
  appId: "1:135289164763:web:122537b0538a0f68558dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)