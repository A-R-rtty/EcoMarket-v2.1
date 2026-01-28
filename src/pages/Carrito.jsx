import { Link } from "react-router-dom"
import { useCart } from "../global/CarritoContext"

export default function Carrito() {
  const { cart, removeFromCart, updateCantidad, clearCart } = useCart()

  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0)

  return (
    <div className="container py-4">

      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map(p => (
            <div key={p.id} className="d-flex align-items-center border-bottom py-2">

              <img src={p.imagen} width="60" />

              <div className="ms-3 flex-grow-1">
                <h6>{p.nombre}</h6>
                <p>${p.precio}</p>
              </div>

              <input 
                type="number"
                min="1"
                value={p.cantidad}
                onChange={e => updateCantidad(p.id, Number(e.target.value))}
                style={{ width: "60px" }}
              />

              <button 
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(p.id)}
              >
                X
              </button>

            </div>
          ))}

          <div className="mt-4">
            <h4>Total: ${total}</h4>

            <button className="btn btn-warning me-2" onClick={clearCart}>
              Vaciar carrito
            </button>

            <button className="btn btn-success">
              <Link to="/pago">Pagar</Link>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
