import { useOrder } from "../global/OrderGlobal"
import Tracking from "../components/Tracking"

export default function Confirmacion() {

    const { currentOrder } = useOrder()

    if (!currentOrder) {
        return <p>No hay pedido activo</p>
    }

    return (
        <div className="confirmacion-container">

            <h2>✅ Pedido confirmado</h2>

            <Tracking estado={currentOrder.estado} />

            <p><b>ID Pedido:</b> {currentOrder.id}</p>
            <p><b>Total:</b> ${currentOrder.total}</p>
            <p><b>Pago:</b> {currentOrder.pagoMetodo}</p>
            <p><b>Envío:</b> {currentOrder.envioTipo}</p>

            {currentOrder.envioTipo === "retiro" && (
                <p>📍 Tu pedido estará listo para retiro en sucursal</p>
            )}

            {currentOrder.envioTipo === "express" && (
                <p>🚚 Llega en menos de 24 horas</p>
            )}

            {currentOrder.envioTipo === "estandar" && (
                <p>🚛 Entrega en 3 a 5 días hábiles</p>
            )}

            {currentOrder.pagoMetodo === "efectivo" && (
                <p>💵 Pagarás al momento de recibir tu pedido</p>
            )}

            {currentOrder.pagoMetodo === "credito" && (
                <p>💳 Pago realizado con tarjeta de crédito</p>
            )}

            {currentOrder.pagoMetodo === "debito" && (
                <p>💳 Pago realizado con tarjeta de débito</p>
            )}


            <button onClick={() => navigate("/")}>
                Volver al inicio
            </button>
        </div>
    )
}
