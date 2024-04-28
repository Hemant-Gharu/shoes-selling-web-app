import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import styles from "../styles/cards.module.css"
import { FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Cards = ({ product }) => {
   const firebase = useFirebase();
   const navigate = useNavigate();
   const [url, setURL] = useState("");

   const { brand, title, price, imageURL } = product;

   useEffect(() => {
      firebase.getImageURL(imageURL).then((url) => setURL(url));
   }, [])
   console.log("produc", product.id );

   return (
      <div onClick={(e)=> navigate(`/productpage/:${product.id}`)} className={styles.card}>
         <div className={styles.imageContainer}>
            <img src={url} alt="Image" className={styles.productImg} />
         </div>
         <div className={styles.description}>
            <h4>{brand}</h4>
            <p className={styles.title}>{title}</p>
            <div className={styles.price}><FaRupeeSign />:  {price}.00</div>
         </div>
      </div>
   )
}
export default Cards;