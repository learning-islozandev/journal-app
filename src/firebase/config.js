// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH0-ckTMzGziQlBG0QYag3FAI8Md0Ah0s",
    authDomain: "react-app-journal-3566b.firebaseapp.com",
    projectId: "react-app-journal-3566b",
    storageBucket: "react-app-journal-3566b.firebasestorage.app",
    messagingSenderId: "961737012711",
    appId: "1:961737012711:web:124e9724ab21d32720b942"
};

// Initialize Firebase
export const FirebaseApp    = initializeApp(firebaseConfig);
export const FirebaseAuth   = getAuth(FirebaseApp);
export const FirebaseDB     = getFirestore(FirebaseApp);
