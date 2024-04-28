import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL  } from "firebase/storage";
import { createContext, useContext } from "react";

const firebaseConfig = {
   apiKey: "AIzaSyC0BCck8m2EYs6iSkFS4ATVXSyUeE1c4pM",
   authDomain: "shoes-selling-web-app.firebaseapp.com",
   projectId: "shoes-selling-web-app",
   storageBucket: "shoes-selling-web-app.appspot.com",
   messagingSenderId: "246208767366",
   appId: "1:246208767366:web:bd799b2014ba1fa7cc3807"
};

//create context
const FirebaseContext = createContext(null);

// create custom useFirebase hook
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
   //create instances
   const firebaseApp = initializeApp(firebaseConfig);
   const firebaseAuth = getAuth(firebaseApp);
   const storage = getStorage(firebaseApp);
   const firestore = getFirestore(firebaseApp);

   //create signup
   const handleSignup = (email, password) => {
      createUserWithEmailAndPassword(firebaseAuth, email, password);
   }

   //save product details
   const saveProductList = async (title, price, color, category, brand, gender, rating, image) => {
      const imgRef = ref(storage, `Productimages/${Date.now()}-${image.name}`);
      const saveImg = await uploadBytes(imgRef, image);
      return await addDoc(collection(firestore, "productdetails"), {
         title, price: Number(price), color, category, brand, gender, rating,
         imageURL: saveImg.ref.fullPath
      })
   }

   //retrieve products data 
   const allProductsDetails = ()=>{
      return getDocs(collection(firestore, "productdetails"));
   }
   //get image 
   const getImageURL = (path)=>{
      return getDownloadURL(ref(storage, path));
   }
   

   return (
      <FirebaseContext.Provider value={{ handleSignup, saveProductList, allProductsDetails, getImageURL }}>{children}</FirebaseContext.Provider>
   )
}