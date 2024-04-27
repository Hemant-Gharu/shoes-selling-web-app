import { Link } from "react-router-dom";

const Profile = () => {

   return (
      <div className="container">
         <h1>Profile</h1>
         <Link to="/profile/productupload">upload product</Link>
      </div>
   )
}
export default Profile;