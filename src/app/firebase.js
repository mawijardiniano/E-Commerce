// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqWPLWFs0zNLhlar1v2-mfsjvrCU_uv38",
  authDomain: "e-commerce-6d61d.firebaseapp.com",
  projectId: "e-commerce-6d61d",
  storageBucket: "e-commerce-6d61d.firebasestorage.app",
  messagingSenderId: "370489923188",
  appId: "1:370489923188:web:b6e0a926df1b75fad1e321",
  measurementId: "G-H5RPLLFNMQ",
};

// Initialize Firebase first
const app = initializeApp(firebaseConfig);

// Initialize Firebase services after initializing app
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Optional: Initialize analytics if you plan to use it
const analytics = getAnalytics(app);
