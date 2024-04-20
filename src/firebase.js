// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzaHJU8Zd6oIC6Y7T4dhSsQ9OXQJHryAA",
  authDomain: "notes-app-98297.firebaseapp.com",
  projectId: "notes-app-98297",
  storageBucket: "notes-app-98297.appspot.com",
  messagingSenderId: "1009274665374",
  appId: "1:1009274665374:web:04d1ed1e360ee7b25e7e8f",
  measurementId: "G-QB6SBBMWB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");