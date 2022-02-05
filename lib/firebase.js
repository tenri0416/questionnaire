//import { initializeApp } from "firebase/app";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
  apiKey: "AIzaSyBqTNZSVEHxwYWfjwNIvyJOPf66JUUQ5vw",
  authDomain: "questionnaire-d9d5d.firebaseapp.com",
  projectId: "questionnaire-d9d5d",
  storageBucket: "questionnaire-d9d5d.appspot.com",
  messagingSenderId: "564314984088",
  appId: "1:564314984088:web:a4f9a6dced1326d879caed"
};


initializeApp(firebaseConfig)


export const db = getFirestore();
