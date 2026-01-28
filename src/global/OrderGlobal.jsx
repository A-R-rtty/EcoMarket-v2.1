import { createContext, useContext, useState, useEffect } from "react"

const OrderContext = createContext()

export function OrderProvider({ children }) {

    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem("orders")
        return saved ? JSON.parse(saved) : []
    })

    const [currentOrder, setCurrentOrder] = useState(() => {
        const saved = localStorage.getItem("currentOrder")
        return saved ? JSON.parse(saved) : null
    })


    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders))
    }, [orders])

    useEffect(() => {
        localStorage.setItem("currentOrder", JSON.stringify(currentOrder))
    }, [currentOrder])


    function crearOrden(data) {

        const nuevaOrden = {
            id: Date.now(),
            productos: data.productos,
            total: data.total,
            envioTipo: data.envioTipo,
            pagoMetodo: data.pagoMetodo,
            direccion: data.direccion,
            telefono: data.telefono,
            estado: "confirmado",
            fecha: new Date().toISOString()
        }

        setOrders(prev => [...prev, nuevaOrden])
        setCurrentOrder(nuevaOrden)

        simularFlujo(nuevaOrden.id)
    }

    function actualizarEstado(id, nuevoEstado) {

        setOrders(prev =>
            prev.map(o =>
                o.id === id ? { ...o, estado: nuevoEstado } : o
            )
        )

        setCurrentOrder(prev =>
            prev && prev.id === id
                ? { ...prev, estado: nuevoEstado }
                : prev
        )
    }


    function simularFlujo(id) {

        setTimeout(() => {
            actualizarEstado(id, "preparando")
        }, 2000)

        setTimeout(() => {
            actualizarEstado(id, "despachado")
        }, 5000)

        setTimeout(() => {
            actualizarEstado(id, "entregado")
        }, 9000)
    }


    function limpiarOrdenActual(){
        setCurrentOrder(null)
        localStorage.removeItem("currentOrder")
    }

    return (
        <OrderContext.Provider value={{
            orders,
            currentOrder,
            crearOrden,
            actualizarEstado,
            limpiarOrdenActual
        }}>
            {children}
        </OrderContext.Provider>
    )
}

export function useOrder() {
    return useContext(OrderContext)
}
