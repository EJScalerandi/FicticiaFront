import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import { validateFields, validatePasswordLength } from "../assets/Validation";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn, setIsLoggedIn, handleLogout }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();  

    const API_URL = import.meta.env.VITE_API_URL;

    const handleAccess = async () => {
        let errorMsg = validateFields(username, password);
        if (!errorMsg) {
            errorMsg = validatePasswordLength(password);
        }
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
    
        try {
            // Hacer la petición a la API de login
            const response = await axios.post(`${API_URL}/users/login`, { 
                username, 
                password 
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const { userId } = response.data;
    
            // Guardar el userId en localStorage
            localStorage.setItem('userId', userId);
    
            setIsLoggedIn(true);
            alert("Acceso concedido");
            navigate('/');
    
        } catch (error) {
            console.error("Error en el login:", error);
            setError("Error al iniciar sesión. Verifica tus credenciales.");
        }
    };

    return (
        <div className="container">
            {isLoggedIn ? (
                <div className="loggedInContainer">
                    <p className="welcomeText">Bienvenido, {username}</p>
                    <div className="buttonsContainer">
                        <button className="button" onClick={handleLogout}>Desconectar</button>
                        <Link to="/update-form">
                            <button className="button">Actualizar Datos</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="formContainer">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                    {error && <p className="error">{error}</p>}
                    <button onClick={handleAccess} className="button">Accede</button>
                    <p>Si no tienes cuenta aún, registrate en el siguiente botón</p>
                    <Link to="/user-register">
                        <button className="button">Registrate</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
