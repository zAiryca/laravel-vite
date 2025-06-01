// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXhvaRB7hK-Q8Nqczl5ipBDBO4ZEgPu0o",
  authDomain: "practice-be884.firebaseapp.com",
  projectId: "practice-be884",
  storageBucket: "practice-be884.firebasestorage.app",
  messagingSenderId: "736637902525",
  appId: "1:736637902525:web:fae710020302c59374a1d4",
  measurementId: "G-SLS793NFNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
