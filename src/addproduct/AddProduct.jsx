import { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { ref } from "firebase/database";

const AddProduct = () => {

   const firebase = useFirebase();

   const [title, setTitle] = useState("");
   const [price, setPrice] = useState("");
   const [color, setColor] = useState("");
   const [soleMatetial, setSoleMatetial] = useState("");
   const [category, setCategory] = useState("");
   const [brand, setBrand] = useState("");
   const [gender, setGender] = useState("");
   const [rating, setRating] = useState("");
   const [image, setImage] = useState("");

   const handleSaveDetails = async (e) => {
      e.preventDefault();
      await firebase.saveProductList(title, price, color, soleMatetial, category, brand, gender, rating, image);
   }

   // const handleImageUpload = (e) => {
   //    e.preventDefault();
   //    firebase.imageUpload(image);
   // }

   // const handleImgUpload = (e)=>{
   //    const img = {
   //       preview: URL.createObjectURL(e.target.files[0]),
   //       imgName: e.target.files[0]
   //    }
   //    setImage(img);
   // }

   return (
      <form className="form">
         <div>
            <label>Title: </label>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
         </div>
         <div>
            <label>Price: </label>
            <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
         </div>
         <div>
            <label>Color: </label>
            <input type="text" placeholder="Color" onChange={(e) => setColor(e.target.value)} value={color} />
         </div>
         <div>
            <label>Sole Material: </label>
            <input type="text" placeholder="Sole Material" onChange={(e) => setSoleMatetial(e.target.value)} value={soleMatetial} />
         </div>
         <div>
            <label>Category: </label>
            <select onChange={(e) => setCategory(e.target.value)}>
               {/* {categories.map((category, idx) => (
                  <option key={idx}>{category.value}</option>
               ))} */}
               <option value="Sports">Sports</option>
               <option value="Sneakers">Sneakers</option>
               <option value="Formal">Formal</option>
               <option value="Loafer">Loafer</option>
               <option value="Boots">Boots</option>
            </select>
         </div>
         <div>
            <label>Brand: </label>
            <select onChange={(e) => setBrand(e.target.value)}>
               <option value="Puma">Puma</option>
               <option value="Adidas">Adidas</option>
               <option value="Nike">Nike</option>
               <option value="Campus">Campus</option>
               <option value="Bata">Bata</option>
               <option value="Woodland">Woodland</option>
               <option value="Reebok">Reebok</option>
               <option value="Asics">Asics</option>
            </select>
         </div>
         <div>
            <label>Gender: </label>
            <select onChange={(e) => setGender(e.target.value)}>
               <option value="Men">Men</option>
               <option value="Women">Women</option>
            </select>
         </div>
         <div>
            <label>Rating: </label>
            <select onChange={(e) => setRating(e.target.value)}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="3.5">3.5</option>
               <option value="4">4</option>
               <option value="4.5">4.5</option>
               <option value="5">5</option>
            </select>
         </div>
         <div>
            <label>Image: </label>
            <input type="file" name="file" onChange={(e) => setImage(e.target.files[0])} />
        
         </div>
         <button onClick={handleSaveDetails}>Save Details</button>
      </form>
   )
}
export default AddProduct;