import { defineStore } from 'pinia';
import _, { map } from 'underscore';
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from '../firebase/firebase';
import { setDoc, doc } from "firebase/firestore";

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    userId: null
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

    
    async addUserToDatabase(db, userId, userInfo){
      try{
        await setDoc(doc(db, "users", userId), userInfo);
        alert("User created");
      }

      catch(error){
        console.log(error);
      }
    },

    async SignUp(email, password){

      let newUser = {email, password}

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          this.addUserToDatabase(db, user.uid, newUser)

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
              const user = auth.currentUser;
              this.userId = user.uid;
            } else {
              console.log("User is not signed in");
            }
          });

    },
  }
})
