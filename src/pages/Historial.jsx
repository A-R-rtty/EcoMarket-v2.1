import { useOrder } from "../global/OrderGlobal"
import { useNavigate } from "react-router-dom"
import { useUser } from "../global/UsuarioGlobal"


export default function Historial() {

  const { orders, crearOrden } = useOrder()
  const { user } = useUser()
  const navigate = useNavigate()

  const misOrdenes = orders.filter(
    o => o.userEmail === user.email
  )

  if (misOrdenes.length === 0) {
  return <p>No hay compras registradas</p>
}

  const repetirCompra = (order) => {
    crearOrden({
      productos: order.productos,
      total: order.total,
      envioTipo: order.envioTipo,
      pagoMetodo: order.pagoMetodo,
      direccion: order.direccion,
      telefono: order.telefono
    })

    navigate("/confirmacion")
  }

  return (
    <div className="historial-container">

      <h2>🧾 Historial de compras</h2>

      {misOrdenes.map(order => (
        <div key={order.id}>
          <p>ID: {order.id}</p>

          <div className="historial-header">
            <span><b>ID:</b> {order.id}</span>
            <span><b>Estado:</b> {order.estado}</span>
          </div>

          <p><b>Fecha:</b> {new Date(order.fecha).toLocaleString()}</p>
          <p><b>Total:</b> ${order.total}</p>
          <p><b>Pago:</b> {order.pagoMetodo}</p>
          <p><b>Envío:</b> {order.envioTipo}</p>

          <div className="historial-actions">
            <button onClick={() => navigate(`/boleta/${order.id}`)}>
            Ver boleta
          </button>

          <button onClick={() => repetirCompra(order)}>
            Repetir compra
          </button>

          </div>

        </div>
      ))}

    </div>
  )
}
