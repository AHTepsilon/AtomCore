import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
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
  }
})
