import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({

  }),

  getters: {

  },

  actions: {
    SignIn(email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

            console.log("Logged In")
            alert("Logged in Succesfully")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage);

            alert("Email or password are incorrect, please try again");
        });
    },

    SignUp(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          console.log("User created");
          alert("User Created Succesfully");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorMessage);
          // ..
        });
    },

    signOut(){
        signOut(auth).then(()=>{
            console.log("Logged out");
            alert("Logged out");
        }).catch((error) => {
            console.log(error);
        });
    },

    validate(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },
  }
})
