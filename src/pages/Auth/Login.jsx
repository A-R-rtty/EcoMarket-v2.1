import React, { useState } from "react";
import "../../Css/style.css";
import { useUser } from "../../global/UsuarioGlobal";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Credenciales falsas (ejemplo)
        if (email === "admin@admin.com" && password === "1234") {

            login({
                nombre: "Admin",
                email: email
            });

            // opcional: persistir sesión
            localStorage.setItem("auth", "true");

            navigate("/"); // o "/perfil"
        } else {
            setError("Credenciales incorrectas ❌");
        }
    };

    return (
        <div style={{ minHeight: '80vh', padding: '38px 0' }} className='row align-items-center'>
            <div
                style={{
                    background: '#A4E5D2',
                    maxWidth: 800,
                    margin: 'auto',
                    borderRadius: 16,
                    boxShadow: '0 5px 28px #ccb',
                    padding: 36
                }}
            >
                <form onSubmit={handleSubmit}>

                    <h2 className='text-center'>
                        <img
                            className="rounded"
                            src="/images/logo-oscuro.png"
                            alt="Logo"
                            style={{ width: '20%' }}
                        />
                    </h2>

                    <h2 className='text-center'>Iniciar Sesión</h2>
                    <br />

                    <input
                        className="text-center d-grid gap-2 col-6 mx-auto Login-box"
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="text-center d-grid gap-2 col-6 mx-auto Login-box"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-center mt-2" style={{ color: "red" }}>
                            {error}
                        </p>
                    )}

                    <br />

                    <button
                        className="text-center d-grid gap-2 mx-auto login-btn"
                        type="submit"
                    >
                        Entrar
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;
