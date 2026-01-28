import React from "react";
import '../components/ProductoCard'


function agregarCarrito() {
    var botonCarrito = document.getElementById("boton-carrito");
    var cantidadCarrito = parseInt(document.getElementById("cantidadCarrito").textContent);
    
    if(botonCarrito) {
        cantidadCarrito = parseInt(cantidadCarrito) + 1;
        document.getElementById("cantidadCarrito").textContent = cantidadCarrito;
        document.getElementById("boton-carrito").innerHTML = "<i class=\"fas fa-check\"></i> Añadido";
        document.getElementById("boton-carrito").innerHTML = "<i class=\"fas fa-check\"></i> Añadido";
        
        setTimeout(() => {
            document.getElementById("boton-carrito").innerHTML = "<i class=\"fas fa-shopping-cart\"></i> Añadir al carrito";
        }, 2000);


    }
}

export default agregarCarrito();