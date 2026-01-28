import React, { useState } from "react";
import ProductoCard from "../components/ProductoCard";
import productos from "../data/productos";
import { useCart } from "../global/CarritoContext";
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
];

export default function Catalogo() {

  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const { addToCart } = useCart();

  const productosFiltrados =
    categoriaActiva === "todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="catalogo-layout">

      {/* BOTÓN FILTROS MOBILE */}
      <button
        className="btn btn-success filtro-toggle"
        onClick={() => setFiltrosAbiertos(prev => !prev)}
      >
        ☰ Filtros
      </button>

      {/* ASIDE FILTROS */}
      <aside className={`catalogo-filtros ${filtrosAbiertos ? "open" : "closed"}`}>

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
                setCategoriaActiva(cat);
                setFiltrosAbiertos(false);
              }}
            >
              {cat}
            </button>
          ))}

          <button
            className={`filtro-btn ${categoriaActiva === "todos" ? "active" : ""}`}
            onClick={() => {
              setCategoriaActiva("todos");
              setFiltrosAbiertos(false);
            }}
          >
            Ver todos
          </button>
        </div>
      </aside>

      {/* PRODUCTOS */}
      <section className="catalogo-productos">
        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>

    </div>
  );
}
