import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Logo from './components/Logo';
import AddProduct from './addproduct/AddProduct';

function App() {

   return (
      <div className="container">
         <Navbar />
         <Routes>
            <Route path="/" element={<Logo/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/profile/productupload" element={<AddProduct/>} />
         </Routes>
      </div>
   )
}

export default App;
