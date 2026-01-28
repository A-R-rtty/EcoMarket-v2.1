import { createContext, useContext, useState } from "react"

const CartContext = createContext()

//El Carritocontext es el cerebon del carrito de compras, el createcontext crea el canal global de todo el proyecto, de ahi la parte de "global" en la ruta del archivo
// en CartProvider se le hace referencia a que el carrito va a entregar a todos los componentes hijos (children) que esten dentro del CartProvider en el index.js
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // Agregar producto
  const addToCart = (producto) => {
    setCart(prev => {
      const existe = prev.find(p => p.id === producto.id)

      if (existe) {
        return prev.map(p =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      }
      // addToCart agrega el producto al carrito con cantidad 1 si no existe, sirve para evitar que se agreguen productos duplicados
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  // Quitar producto completo
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  //  Cambiar cantidad
  const updateCantidad = (id, cantidad) => {
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, cantidad } : p
      )
    )
  }

  // Vaciar carrito
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateCantidad,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider")
  }
  return context
}