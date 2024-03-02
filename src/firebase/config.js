import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzVeOu_2sUOlCSu6g6RqlpQHiRCjmKDCM",
  authDomain: "olxsample-e3c46.firebaseapp.com",
  projectId: "olxsample-e3c46",
  storageBucket: "olxsample-e3c46.appspot.com",
  messagingSenderId: "689421516833",
  appId: "1:689421516833:web:6fdf5e26dc1674b6256360",
  measurementId: "G-NC24ET7GSK"
};
export default firebase.initializeApp(firebaseConfig)