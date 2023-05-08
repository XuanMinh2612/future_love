// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firestore from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLnQze3KxNacrJkge2NFSCmehzJr7yteQ",
  authDomain: "future-love-281ec.firebaseapp.com",
  projectId: "future-love-281ec",
  storageBucket: "future-love-281ec.appspot.com",
  messagingSenderId: "151469165743",
  appId: "1:151469165743:web:1f65757304779cbefad85a",
  measurementId: "G-SBT5XSWHQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firestore;
const analytics = getAnalytics(app);
export { db };
