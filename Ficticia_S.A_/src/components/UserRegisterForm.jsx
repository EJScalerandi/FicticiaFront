import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserRegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/users/register`, {
        username,
        password,
      });

      const { userId } = response.data;

      // Navega a RegisterForm pasando el userId
      navigate(`/register-persona/${userId}`);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError("Error al registrar. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro de Usuario</h2>
      <label>
        Usuario:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default UserRegisterForm;
