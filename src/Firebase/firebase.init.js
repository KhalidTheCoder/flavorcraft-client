// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6LSGZ1_MZgCdO2jj_TRMwBLrcTp8dg5U",
  authDomain: "flavor-craft-27690.firebaseapp.com",
  projectId: "flavor-craft-27690",
  storageBucket: "flavor-craft-27690.firebasestorage.app",
  messagingSenderId: "92044694521",
  appId: "1:92044694521:web:6472982135b9896b846328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
