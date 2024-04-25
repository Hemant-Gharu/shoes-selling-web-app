import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useContext } from "react";

const firebaseConfig = {
   apiKey: "AIzaSyC0BCck8m2EYs6iSkFS4ATVXSyUeE1c4pM",
   authDomain: "shoes-selling-web-app.firebaseapp.com",
   projectId: "shoes-selling-web-app",
   storageBucket: "shoes-selling-web-app.appspot.com",
   messagingSenderId: "246208767366",
   appId: "1:246208767366:web:bd799b2014ba1fa7cc3807"
};
const firebaseApp = initializeApp(firebaseConfig);

//create context
const FirebaseContext = createContext(null);
// create custom useFirebase hook
export const useFirebase = ()=> useContext(FirebaseContext);

export const FirebaseProvider = ({children})=>{
   //create instances
   const firebaseAuth = getAuth(firebaseApp);

   //create signup
   const handleSignup = (email, password)=>{
      createUserWithEmailAndPassword(firebaseAuth, email, password);
   }

   return(
      <FirebaseContext.Provider value={handleSignup}>{children}</FirebaseContext.Provider>
   )
}