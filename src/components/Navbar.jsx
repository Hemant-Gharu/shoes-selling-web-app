import styles from "../styles/navbar.module.css"
import { Link } from "react-router-dom";


const Navbar = () => {
   return (
      <div className={`navbar ${styles.nav}`}>
         
      <Link to="/" className={styles.link}>Logo</Link>
      <Link to="/profile">Profile</Link>
      </div>
   )
}
export default Navbar;