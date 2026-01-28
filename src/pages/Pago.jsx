import { useState } from "react"
import { useCart } from "../global/CarritoContext"
import { useUser } from "../global/UsuarioGlobal"
import { useOrder } from "../global/OrderGlobal"
import { useNavigate } from "react-router-dom"

export default function Pago(){

    const { carrito, total, clearCarrito } = useCart()
    const { user } = useUser()
    const { order, setEnvio, setPago, avanzarEstado } = useOrder()
    const navigate = useNavigate()

    const [error, setError] = useState("")

    const MAX_EFECTIVO = 30000

    const validarPago = () => {

        if(carrito.length === 0){
            return "El carrito está vacío"
        }

        if(!order.envioTipo){
            return "Seleccione un método de envío"
        }

        if(!order.pagoMetodo){
            return "Seleccione un método de pago"
        }

        if(!user.direccion || !user.telefono){
            return "Complete su perfil con dirección y teléfono"
        }

        if(order.pagoMetodo === "efectivo" && total > MAX_EFECTIVO){
            return "El pago en efectivo no puede exceder $30.000"
        }

        return null
    }

    const handleConfirmarPago = () => {

        const errorValidacion = validarPago()

        if(errorValidacion){
            setError(errorValidacion)
            return
        }

        avanzarEstado("confirmado")
        clearCarrito()
        navigate("/confirmacion")    
    }

    return(
        <div className="pago-container">

            <h2>Pago</h2>

            <h4>Tipo de Envío</h4>

            <button onClick={() => setEnvio("express")} className={order.envioTipo === "express" ? "active" : ""}>
                🚚 Envío Express 
            </button>

            <button onClick={() => setEnvio("estandar")} className={order.envioTipo === "estandar" ? "active" : ""}>
                🚛 Envío Estándar 
            </button>

            <button onClick={() => setEnvio("retiro")} className={order.envioTipo === "retiro" ? "active" : ""}>
                🏬 Retiro en Sucursal 
            </button>

            <h4>Método de Pago</h4>

            <button onClick={() => setPago("credito")} className={order.pagoMetodo === "credito" ? "active" : ""}>
                💳 Tarjeta de Crédito
            </button>

            <button onClick={() => setPago("debito")} className={order.pagoMetodo === "debito" ? "active" : ""}>
                💳 Tarjeta de Débito
            </button>

            <button onClick={() => setPago("efectivo")} className={order.pagoMetodo === "efectivo" ? "active" : ""}>
                💵 Efectivo al recibir
            </button>
            
            <div className="pago-info">
                <p><b>Total:</b> ${total}</p>
                <p><b>Dirección:</b> {user.direccion || "No especificada"}</p>
                <p><b>Teléfono:</b> {user.telefono || "No especificado"}</p>
            </div>

            {error && <div className="pago-error">{error}</div>}

            <button onClick={handleConfirmarPago}>
                Confirmar Pago
            </button>
        </div>
    )
}
