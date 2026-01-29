import { useOrder } from "../global/OrderGlobal"
import Tracking from "../components/Tracking"
import Boleta from "../components/Boleta"
import { useNavigate } from "react-router-dom"

export default function Confirmacion() {

    const { currentOrder, limpiarOrdenActual } = useOrder()
    const navigate = useNavigate()

    if (!currentOrder) return <p>No hay pedido activo</p>

    const volverInicio = () => {
        limpiarOrdenActual()
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

            {/* ✅ BOLETA UNA SOLA VEZ */}
            <Boleta order={currentOrder} />

            <div className="confirmacion-card">
                <p><b>ID Pedido:</b> {currentOrder.id}</p>
                <p><b>Total:</b> ${currentOrder.total}</p>
                <p><b>Pago:</b> {currentOrder.pagoMetodo}</p>
                <p><b>Envío:</b> {currentOrder.envioTipo}</p>
            </div>

            <div className="confirmacion-info">
                {currentOrder.envioTipo === "retiro" && (
                    <p>🏬 Pedido reservado para retiro en sucursal</p>
                )}

                {currentOrder.pagoMetodo === "debito" && (
                    <p>💳 Pago realizado con tarjeta de débito</p>
                )}
            </div>

            <button onClick={volverInicio}>
                Volver al inicio
            </button>

        </div>
    )
}