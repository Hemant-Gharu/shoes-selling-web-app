import { useFirebase } from "../context/Firebase";

const Logo = () => {
   const firebase = useFirebase();
   const handleClick = () => {
      firebase.click();
   }

   return (
      <>
         <h1>Logo</h1>
      </>
   )
}
export default Logo;