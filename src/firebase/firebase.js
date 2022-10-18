// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNQJHBdZV29lrgcXEnd3xBKsm5Tr0u08",
  authDomain: "atomcore-7f735.firebaseapp.com",
  projectId: "atomcore-7f735",
  storageBucket: "atomcore-7f735.appspot.com",
  messagingSenderId: "902204108279",
  appId: "1:902204108279:web:a7904f5a18957339e252f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}

//DON'T COMMIT THIS FILE