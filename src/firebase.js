import firebase from 'firebase/compat/app';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/firestore';
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpbGegQqZTWrJDq7ovKDrSt_w4ZZ57-ag",
    authDomain: "clone-dd7e2.firebaseapp.com",
    projectId: "clone-dd7e2",
    storageBucket: "clone-dd7e2.appspot.com",
    messagingSenderId: "130241376937",
    appId: "1:130241376937:web:b6d99dd073ed18902d6fb8",
    measurementId: "G-KE8RSRP04H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = getAuth(firebaseApp);

export { db,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword };