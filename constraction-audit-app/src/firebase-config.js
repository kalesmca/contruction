// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBxjeb87mHrMaBt8NpJO2H4VUPmg3lVp0",
  authDomain: "mkw-construction-audit.firebaseapp.com",
  projectId: "mkw-construction-audit",
  storageBucket: "mkw-construction-audit.appspot.com",
  messagingSenderId: "362498039376",
  appId: "1:362498039376:web:3bd50185e83bdf16f7bb55",
  measurementId: "G-C8FP3H9233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCBxjeb87mHrMaBt8NpJO2H4VUPmg3lVp0",
//   authDomain: "mkw-construction-audit.firebaseapp.com",
//   projectId: "mkw-construction-audit",
//   storageBucket: "mkw-construction-audit.appspot.com",
//   messagingSenderId: "362498039376",
//   appId: "1:362498039376:web:3bd50185e83bdf16f7bb55",
//   measurementId: "G-C8FP3H9233"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);