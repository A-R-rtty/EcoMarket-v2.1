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

            <Tracking estado={currentOrder.estado} />

            <div className="confirmacion-card">
                <p><i className="bi bi-hash"></i> <b>ID Pedido:</b> {currentOrder.id}</p>
                <p><i className="bi bi-cash-stack"></i> <b>Total:</b> ${currentOrder.total}</p>
                <p><i className="bi bi-credit-card"></i> <b>Pago:</b> {currentOrder.pagoMetodo}</p>
                <p><i className="bi bi-truck"></i> <b>Envío:</b> {currentOrder.envioTipo}</p>
            </div>

            <div className="confirmacion-info">
                {currentOrder.envioTipo === "estandar" && (
                    <p><i className="bi bi-clock"></i> Entrega en 3 a 5 días hábiles</p>
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
