import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import Cards from "./Cards";
import styles from '../styles/home.module.css';

const Home = () => {
   const firebase = useFirebase();
   const [productDetails, setProductDetails] = useState([]);

   useEffect(() => {
      firebase.allProductsDetails().then((data) => setProductDetails(data.docs));
   }, [])
   return (
      <div className={`container ${styles.cards}`}>
            {productDetails.map((product) => (
               <Cards key={product.id} product={product.data()} id={product.id} />
            ))}
      </div>
   )
}
export default Home;