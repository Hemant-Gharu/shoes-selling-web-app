import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Logo from './components/Logo';
import AddProduct from './addproduct/AddProduct';
import ProductPage from './pages/ProductPage';

function App() {

   return (
      <div className="container">
         <Navbar />
         <Routes>
            <Route path="/" element={<Logo/>} />
            <Route path="/productpage/:bookId" element={<ProductPage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/profile/productupload" element={<AddProduct/>} />
         </Routes>
      </div>
   )
}

export default App;
