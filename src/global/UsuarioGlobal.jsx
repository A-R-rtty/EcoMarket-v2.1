import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    nombre: "Invitado",
    direccion: "",
    telefono: "",
    email: ""
  })

  // actualizar datos del perfil
  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }))
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider")
  }
  return context
}

