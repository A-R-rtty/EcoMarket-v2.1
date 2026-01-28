import React from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default function Producto() {
  const { id } = useParams()
  const producto = productos.find(p => p.id === parseInt(id))

  if (!producto) return <p>Producto no encontrado</p>

  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-md-5">
          <img 
            src={producto.imagen} 
            className="img-fluid rounded shadow-sm" 
          />
        </div>

        <div className="col-md-7">
          <h2>{producto.nombre}</h2>
          <h4 className="text-success">${producto.precio}</h4>
          <p className="text-muted">{producto.descripcion}</p>

          <p><strong>Stock:</strong> {producto.stock}</p>

          <h6>Beneficios:</h6>
          <ul>
            {producto.beneficios.map((b,i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <button className="btn btn-success">
            <FontAwesomeIcon icon={faCartArrowDown} /> Agregar al carrito
          </button>
        </div>

      </div>
    </div>
  )
}
