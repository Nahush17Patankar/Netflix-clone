// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyChOlVgK_wIS-urjQdbQHNiMe1lTsvKXL8",
    authDomain: "netflix-clone-34b55.firebaseapp.com",
    projectId: "netflix-clone-34b55",
    storageBucket: "netflix-clone-34b55.appspot.com",
    messagingSenderId: "119023454702",
    appId: "1:119023454702:web:c488788049bf4bdb5de6ff",
    measurementId: "G-XJS9H2PKZE"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;


