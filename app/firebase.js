// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHppAtdYfgDdwp7x56KpkDIYbBV24e7-w",
  authDomain: "engr-adnan.firebaseapp.com",
  projectId: "engr-adnan",
  storageBucket: "engr-adnan.appspot.com",
  messagingSenderId: "444419968220",
  appId: "1:444419968220:web:2d726319fdce8675efb819",
  measurementId: "G-3G1WBFZK44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);