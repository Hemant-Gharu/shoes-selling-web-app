import { useFirebase } from "../context/Firebase";
import Home from "./Home";

const Logo = () => {
   const firebase = useFirebase();
   const handleClick = () => {
      firebase.click();
   }

   return (
      <>
         <Home/>
      </>
   )
}
export default Logo;