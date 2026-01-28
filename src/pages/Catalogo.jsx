import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductoCard from "../components/ProductoCard";
import productos from "../data/productos";
import "../Catalogo.css";


const categorias = [
  "Shampoo",
  "Acondicionador",
  "Crema de manos",
  "Protector solar",
  "Hidratante corporal",
  "Hidratante facial",
  "Humectante",
  "Parche",
  "Perfume Árabe",
  "Sérum"
]

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);

  const productosFiltrados =
    categoriaActiva === "todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="catalogo-layout">

  <button
    className="btn btn-success filtro-toggle"
    onClick={() => setFiltrosAbiertos(prev => !prev)}
  >
    ☰ Filtros
  </button>

  <aside className={`catalogo-filtros ${filtrosAbiertos ? "open" : "closed"}`}>
    
    {/* Botón cerrar SOLO mobile */}
    <button
      className="btn btn-outline-success filtro-close"
      onClick={() => setFiltrosAbiertos(false)}
    >
      ✕ Cerrar
    </button>

    <h5 className="filtro-title">Categorías</h5>

    <div className="filtro-categorias">
      {categorias.map(cat => (
        <button
          key={cat}
          className={`filtro-btn ${categoriaActiva === cat ? "active" : ""}`}
          onClick={() => {
            setCategoriaActiva(cat)
            setFiltrosAbiertos(false) // UX 👍
          }}
        >
          {cat}
        </button>
      ))}

      <button
        className={`filtro-btn ${categoriaActiva === "todos" ? "active" : ""}`}
        onClick={() => {
          setCategoriaActiva("todos")
          setFiltrosAbiertos(false)
        }}
      >
        Ver todos
      </button>
    </div>
  </aside>

  <section className="catalogo-productos">
    {productosFiltrados.map(producto => (
      <ProductoCard key={producto.id} producto={producto} />
    ))}
  </section>

</div>

  );
}
