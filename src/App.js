import './App.css';
import './style.css';

import { Routes, Route } from "react-router-dom";

import NavBarPrincipal from './components/navbar';
import Footer from './components/footer';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Carrito from './pages/Carrito';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Producto from './pages/Producto';


function App() {

  return (
    <div>
      <NavBarPrincipal />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
