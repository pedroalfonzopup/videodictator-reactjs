// Dejo los comentarios por defecto para entender sin revisitar Firebase



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ6iYsijN-OONjCpYC3Sct78el57_4h-8",
  authDomain: "fb-coderhouse-reactjs.firebaseapp.com",
  projectId: "fb-coderhouse-reactjs",
  storageBucket: "fb-coderhouse-reactjs.appspot.com",
  messagingSenderId: "872614812804",
  appId: "1:872614812804:web:36d3cecf394bb1381e36d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);