import React from "react";
import { useState } from "react";
import "../style.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Credenciales falsas (ejemplo)
        if (email === "admin@admin.com" && password === "1234") {
            alert("Inicio de sesion Exitoso");
            localStorage.setItem("auth", "true");
        } else {
            setError("Credenciales incorrectas ❌");
        }
    };

    return (
        <div style={{ minHeight: '80vh', padding: '38px 0' }} className='row align-items-center'>
            <div style={{ background: '#A4E5D2', maxWidth: 950, margin: 'auto', borderRadius: 16, boxShadow: '0 5px 28px #ccb', padding: 36 }}>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center'>Iniciar Sesión</h2>

                    <input className="text-center d-grid gap-2 col-6 mx-auto Login-box" type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                    <input className="text-center d-grid gap-2 col-6 mx-auto Login-box" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button className="text-center d-grid gap-2 mx-auto login-btn" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;