import { useUser } from "../global/UsuarioGlobal"
import { useOrder } from "../global/OrderGlobal"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Checkout() {
    const { user } = useUser()
    const { avanzarEstado, setEnvio } = useOrder()   // 👈 ahora sí usamos setEnvio
    const navigate = useNavigate()

    const [envio, setEnvioLocal] = useState(null)     // 👈 estado local real

    const handleIrAPago = () => {

        // validar perfil
        if (!user.direccion || !user.telefono) {

            const irPerfil = window.confirm(
                "Para continuar necesitas completar tu dirección y teléfono.\n\n¿Quieres ir a tu perfil ahora?"
            )

            if (irPerfil) {
                navigate("/perfil")
            }

            return
        }

        // validar envío
        if (!envio) {
            alert("Debes seleccionar un tipo de envío")
            return
        }

        avanzarEstado("pago")
        navigate("/pago")
    }

    return (
        <div>
            <h2>Checkout</h2>
            <h3>Tipo de envío</h3>

            <label>
                <input
                    type="radio"
                    name="envio"
                    value="estandar"
                    onChange={() => {
                        setEnvioLocal("estandar")   // local
                        setEnvio("estandar")        // global
                    }}
                />
                Envío estándar (3-5 días)
            </label>

            <label>
                <input
                    type="radio"
                    name="envio"
                    value="express"
                    onChange={() => {
                        setEnvioLocal("express")
                        setEnvio("express")
                    }}
                />
                Envío express (24 hrs)
            </label>

            <label>
                <input
                    type="radio"
                    name="envio"
                    value="retiro"
                    onChange={() => {
                        setEnvioLocal("retiro")
                        setEnvio("retiro")
                    }}
                />
                Retiro en sucursal
            </label>

            <button onClick={handleIrAPago}>
                Ir a pagar
            </button>
        </div>
    )
}
