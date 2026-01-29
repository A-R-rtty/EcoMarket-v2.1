import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../global/UsuarioGlobal";
import "../../Css/style.css";

function Register() {
  const navigate = useNavigate();
  const { login } = useUser();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    direccion: "",
    telefono: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.password) {
      setError("Completa los campos obligatorios ❌");
      return;
    }

    // LOGIN + GUARDAR USUARIO
    login({
      nombre: form.nombre,
      email: form.email,
      direccion: form.direccion,
      telefono: form.telefono.replace(/\D/g, "") // solo números
    });

    localStorage.setItem("auth", "true");

    alert("Registro exitoso ✅");
    navigate("/");
  };

  return (
    <div style={{ minHeight: "80vh", padding: "38px 0" }} className="row align-items-center">
      <div
        style={{
          background: "#A4E5D2",
          maxWidth: 800,
          margin: "auto",
          borderRadius: 16,
          boxShadow: "0 5px 28px #ccb",
          padding: 36
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">
            <img
              className="rounded"
              src="images/logo-oscuro.png"
              alt=""
              style={{ width: "20%" }}
            />
          </h2>

          <h2 className="text-center">Registro</h2>

          <input
            className="text-center d-grid gap-2 col-6 mx-auto Login-box"
            type="text"
            name="nombre"
            placeholder="Nombre completo *"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            className="text-center d-grid gap-2 col-6 mx-auto Login-box"
            type="email"
            name="email"
            placeholder="Correo *"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="text-center d-grid gap-2 col-6 mx-auto Login-box"
            type="password"
            name="password"
            placeholder="Contraseña *"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            className="text-center d-grid gap-2 col-6 mx-auto Login-box"
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={form.direccion}
            onChange={handleChange}
          />

          <div className="text-center d-grid gap-2 col-6 mx-auto Login-box">
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontWeight: "bold" }}>+56</span>
              <input
                type="text"
                name="telefono"
                placeholder="912345678"
                value={form.telefono}
                onChange={handleChange}
                style={{ flex: 1, border: "none", outline: "none" }}
              />
            </div>
          </div>

          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}

          <button className="text-center d-grid gap-2 mx-auto login-btn" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
