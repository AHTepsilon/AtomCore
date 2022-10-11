import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

export const useProductsStore = defineStore("products", {
  state: () => ({
      products: [],
  }),

  getters: {
      getProducts: (state) => [...state.products],
  },

  actions: {
    SignIn(email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
            },
  }
})
