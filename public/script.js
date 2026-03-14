const TituloPagina = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "¡Vuelve a EcoMarket 😢!";
    } else {
        document.title = TituloPagina;
    }
});

//Filtro de Productos
function filtrarProductos(categoria, boton) {
    document.querySelectorAll('.btn-categoria')
      .forEach(btn => btn.classList.remove('active'));
  
    if (boton) boton.classList.add('active');
  
    document.querySelectorAll('.producto').forEach(producto => {
      if (categoria === 'todos' || producto.dataset.categoria === categoria) {
        producto.classList.remove('d-none');
      } else {
        producto.classList.add('d-none');
      }
    });
  }

// Ordenar Productos por Precios
function ordenarPorPrecio(orden) {
    const contenedor = document.querySelector('.row');
    const productos = Array.from(document.querySelectorAll('.producto'));

    productos.sort((a, b) => {
        const precioA = parseInt(a.dataset.precio);
        const precioB = parseInt(b.dataset.precio);

        if (orden === 'asc') return precioA - precioB;
        if (orden === 'desc') return precioB - precioA;
    });

    productos.forEach(producto => contenedor.appendChild(producto));
}

//agregar al carrito (falta hacer que se confirme con todos los botones D:)
function agregarCarrito() {
    var botonCarrito = document.getElementsByClassName("btn-carrito");
    var cantidadCarrito = parseInt(document.getElementById("cantidadCarrito").textContent);
    
    if(botonCarrito) {
        cantidadCarrito = parseInt(cantidadCarrito) + 1;
        document.getElementById("cantidadCarrito").textContent = cantidadCarrito;
        document.getElementById("botonCarrito").innerHTML = "<i class=\"fas fa-check\"></i> Añadido";
        document.getElementsByClassName("btn-carrito").innerHTML = "<i class=\"fas fa-check\"></i> Añadido";
        
        setTimeout(() => {
            document.getElementById("botonCarrito").innerHTML = "<i class=\"fas fa-shopping-cart\"></i> Añadir al carrito";
        }, 2000);


    }
}