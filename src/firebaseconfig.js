// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGlyxLk3aLGlkxaiJtg4j4mN2tQtkv4Rg",
    authDomain: "helpme-27445.firebaseapp.com",
    projectId: "helpme-27445",
    storageBucket: "helpme-27445.appspot.com",
    messagingSenderId: "291785609164",
    appId: "1:291785609164:web:d2018e1e56d4fce1c01769",
    measurementId: "G-12L3CCKBMM"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
