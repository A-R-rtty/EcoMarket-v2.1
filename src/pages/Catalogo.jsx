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
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(true);

  const productosFiltrados =
    categoriaActiva === "todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="catalogo-layout">

      {/* BOTÓN MOBILE */}
      <button 
        className="btn btn-success filtro-toggle"
        onClick={() => setFiltrosAbiertos(!filtrosAbiertos)}
      >
        ☰ Filtros
      </button>

      {/* FILTROS */}
      <aside className={`catalogo-filtros ${filtrosAbiertos ? "open" : "closed"}`}>
        <h5 className="filtro-title">Categorías</h5>

        <div className="filtro-categorias">
          {categorias.map(cat => (
            <button
              key={cat}
              className={`filtro-btn ${
                categoriaActiva === cat ? "active" : ""
              }`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
            </button>
          ))}

          <button
            className={`filtro-btn ${
              categoriaActiva === "todos" ? "active" : ""
            }`}
            onClick={() => setCategoriaActiva("todos")}
          >
            Ver todos
          </button>
        </div>
      </aside>

      {/* PRODUCTOS */}
      <section className="catalogo-productos">
        <div className="row g-3">
          {productosFiltrados.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

    </div>
  );
}
