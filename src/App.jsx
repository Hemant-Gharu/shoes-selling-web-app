import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Logo from './components/Logo';

function App() {

   return (
      <div className="container">
         <Navbar />
         <Routes>
            <Route path="/" element={<Logo/>} />
            <Route path="/profile" element={<Profile/>} />
         </Routes>
      </div>
   )
}

export default App;
