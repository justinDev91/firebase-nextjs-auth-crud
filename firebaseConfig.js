

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
//config firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQlQBU8mM8BvM2Le4ES9aHO0Nc4m9O8eQ",
  authDomain: "get-stared-jdev-2202-90-71.firebaseapp.com",
  projectId: "get-stared-jdev-2202-90-71",
  storageBucket: "get-stared-jdev-2202-90-71.appspot.com",
  messagingSenderId: "980532167485",
  appId: "1:980532167485:web:126e0534acb9aff780fb54",
  measurementId: "G-YNS6XPK3XB"
};
//Ini Firebase
export const app = initializeApp(firebaseConfig);
//Init firestore
export const database = getFirestore(app);