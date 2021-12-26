import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbMB54QWwqqYJaGq4SswAeT5dk13en2Cs",
  authDomain: "crud-react-94987.firebaseapp.com",
  projectId: "crud-react-94987",
  storageBucket: "crud-react-94987.appspot.com",
  messagingSenderId: "746713242296",
  appId: "1:746713242296:web:5223ea9ee7d72fd589724d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
