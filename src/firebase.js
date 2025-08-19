// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbWKlmNiLKQ6TsXzrI-eZ_EVJHjVWA5o4",
  authDomain: "bingeflix-9df28.firebaseapp.com",
  projectId: "bingeflix-9df28",
  storageBucket: "bingeflix-9df28.firebasestorage.app",
  messagingSenderId: "1014102715114",
  appId: "1:1014102715114:web:b79c5c2f9c899d27be4593",
  measurementId: "G-2EM52V3XE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();