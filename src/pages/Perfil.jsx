import { useUser } from "../global/UsuarioGlobal"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Perfil() {
  const { user, updateUser } = useUser()
  const navigate = useNavigate()

  const [form, setForm] = useState(user)

  const handleSave = () => {
    updateUser(form)
    navigate(-1) // vuelve a donde estaba (pago/checkout)
  }

  return (
    <div>
      <h2>Mi Perfil</h2>

      <input
        placeholder="Dirección"
        value={form.direccion}
        onChange={e => setForm({ ...form, direccion: e.target.value })}
      />

      <input
        placeholder="Teléfono"
        value={form.telefono}
        onChange={e => setForm({ ...form, telefono: e.target.value })}
      />

      <button onClick={handleSave}>
        Guardar datos
      </button>
    </div>
  )
}
