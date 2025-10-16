// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLKDQxM7y02kPZr2iX2ARy8pMGUM_xDpg",
  authDomain: "react-dashboard-5da69.firebaseapp.com",
  projectId: "react-dashboard-5da69",
  storageBucket: "react-dashboard-5da69.firebasestorage.app",
  messagingSenderId: "691888704733",
  appId: "1:691888704733:web:68b972d95af932d0461f34",
  measurementId: "G-17RFGZK6RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)