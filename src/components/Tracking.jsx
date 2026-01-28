import "../tracking.css"

export default function Tracking({ estado }) {

  const estados = [
    { key: "confirmado", label: "Confirmado" },
    { key: "preparando", label: "Preparando" },
    { key: "despachado", label: "En despacho" },
    { key: "entregado", label: "Entregado" }
  ]

  return (
    <div className="tracking-container">

      {estados.map((e, index) => {

        const activo = estados.findIndex(s => s.key === estado) >= index

        return (
          <div key={e.key} className="tracking-step">

            <div className={`tracking-circle ${activo ? "active" : ""}`}>
              {index + 1}
            </div>

            <p className={`tracking-label ${activo ? "active" : ""}`}>
              {e.label}
            </p>

            {index < estados.length - 1 && (
              <div className={`tracking-line ${activo ? "active" : ""}`} />
            )}

          </div>
        )
      })}

    </div>
  )
}
