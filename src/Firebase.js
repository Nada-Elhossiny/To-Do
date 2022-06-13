// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_aImTLUmjkzHZuZYUpFlrtvHgJZKFr2U",
  authDomain: "todo-app-a5bf9.firebaseapp.com",
  projectId: "todo-app-a5bf9",
  storageBucket: "todo-app-a5bf9.appspot.com",
  messagingSenderId: "794369376788",
  appId: "1:794369376788:web:045341062cc892b840dd01"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase 