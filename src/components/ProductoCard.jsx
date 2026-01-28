import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "../Catalogo.css";

export default function ProductCard({ producto }) {
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className="producto-card d-flex">
      <div className="card h-100 w-100 shadow-sm border-0 d-flex flex-column">
  
        <img 
          src={producto.imagen} 
          className="card-img-top" 
          alt={producto.nombre} 
        />
  
        <div className="card-body d-flex flex-column">
  
          <h6 className="fw-bold">
            <Link 
              to={`/producto/${producto.id}`} 
              className="text-decoration-none text-dark"
            >
              {producto.nombre}
            </Link>
          </h6>
  
          <span className="text-muted small">{producto.categoria}</span>
          <span className="h6 mt-2">${producto.precio}</span>
          <span className="small text-muted">
            Stock: {producto.stock}
          </span>
  
          <div className="d-flex align-items-center gap-2 mt-2">
            <button className="btn btn-outline-success btn-sm">-</button>
            <span>{cantidad}</span>
            <button className="btn btn-outline-success btn-sm">+</button>
          </div>
  
          <button className="btn btn-success btn-sm mt-auto">
            🛒 Agregar al carrito
          </button>
  
        </div>
      </div>
    </div>
  )
}