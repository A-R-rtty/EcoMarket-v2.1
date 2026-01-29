import { useOrder } from "../global/OrderGlobal"
import Tracking from "../components/Tracking"
import { useNavigate } from "react-router-dom"
import "../Css/Confirmacion.css"

export default function Confirmacion() {
    const { currentOrder, limpiarOrdenActual, resetOrder } = useOrder()
    const navigate = useNavigate()

    if (!currentOrder) {
        return <p>No hay pedido activo</p>
    }

    const volverInicio = () => {
        limpiarOrdenActual()
        resetOrder()
        navigate("/")
    }


    return (
        <div className="confirmacion-container">
            <h2 className="confirmacion-title">
                <i className="bi bi-check-circle-fill"></i>
                Pedido confirmado
            </h2>

            <Tracking
                estado={currentOrder.estado}
                envioTipo={currentOrder.envioTipo}
            />
            <div className="boleta">

                <h3>🧾 Boleta</h3>

                <p><b>N° Pedido:</b> {currentOrder.id}</p>
                <p><b>Fecha:</b> {new Date(currentOrder.fecha).toLocaleString()}</p>
                <p><b>Cliente:</b> {currentOrder.userEmail}</p>

                <hr />

                <ul className="boleta-productos">
                    {currentOrder.productos.map(p => (
                        <li key={p.id}>
                            {p.nombre} x {p.cantidad} — ${p.precio * p.cantidad}
                        </li>
                    ))}
                </ul>

                <hr />

                <p><b>Método de pago:</b> {currentOrder.pagoMetodo}</p>
                <p><b>Tipo de envío:</b> {currentOrder.envioTipo}</p>

                <h4>Total: ${currentOrder.total}</h4>
            </div>

            <div className="confirmacion-card">
                <p><i className="bi bi-hash"></i> <b>ID Pedido:</b> {currentOrder.id}</p>
                <p><i className="bi bi-cash-stack"></i> <b>Total:</b> ${currentOrder.total}</p>
                <p><i className="bi bi-credit-card"></i> <b>Pago:</b> {currentOrder.pagoMetodo}</p>
                <p><i className="bi bi-truck"></i> <b>Envío:</b> {currentOrder.envioTipo}</p>
            </div>

            <div className="confirmacion-info">
                {currentOrder.envioTipo === "retiro" && (
                    <p>🏬 Pedido reservado para retiro en sucursal</p>
                )}

                {currentOrder.pagoMetodo === "debito" && (
                    <p><i className="bi bi-check2-circle"></i> Pago realizado con tarjeta de débito</p>
                )}
            </div>

            <button className="btn-volver" onClick={volverInicio}>
                <i className="bi bi-house"></i> Volver al inicio
            </button>
        </div>
    )
}
