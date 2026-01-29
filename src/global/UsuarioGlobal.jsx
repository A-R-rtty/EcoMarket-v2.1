import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    telefono: ""
  });

  const [isLogged, setIsLogged] = useState(false);

  // LOGIN
  const login = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
    setIsLogged(true);
  };

  // LOGOUT
  const logout = () => {
    setUser({
      nombre: "",
      apellido: "",
      email: "",
      direccion: "",
      telefono: ""
    });
    setIsLogged(false);
    localStorage.removeItem("auth");
  };

  // ACTUALIZAR PERFIL
  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        login,
        logout,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};
