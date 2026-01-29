import './Css/App.css'
import './Css/style.css'

import { Routes, Route } from "react-router-dom"

import NavBarPrincipal from './organismos/navbar'
import Footer from './organismos/footer'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import Nosotros from './pages/Nosotros'
import Producto from './pages/Producto'
import Checkout from './pages/Checkout'
import Pago from './pages/Pago'
import Confirmacion from './pages/Confirmacion'
import Perfil from './pages/Auth/Perfil'
import Historial from './pages/Historial'
import Login from './pages/Auth/Login'
import Register from "./pages/Auth/Register";

function App() {
  return (
    <div className="app-layout">

      <NavBarPrincipal />

      {/* RUTAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/nosotros" element={<Nosotros />} />

        {/* FLUJO DE COMPRA */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/confirmacion" element={<Confirmacion />} />

        {/* USUARIO */}
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registro" element={<Register />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
