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
  apiKey: "AIzaSyBjbyf_gd0S4iIr8u8nQZMe4KzKGgV2PlE",
  authDomain: "construction-1beca.firebaseapp.com",
  projectId: "construction-1beca",
  storageBucket: "construction-1beca.appspot.com",
  messagingSenderId: "920486412122",
  appId: "1:920486412122:web:df9212b775eb2f45bafd63",
  measurementId: "G-J909S3VTRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
