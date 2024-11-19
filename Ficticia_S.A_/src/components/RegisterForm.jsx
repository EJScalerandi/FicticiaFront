import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const { userId } = useParams(); // Recupera el userId de la URL
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    identificacion: "",
    edad: "",
    genero: "",
    estadoActivo: false,
    atributosAdicionales: "",
    maneja: false,
    usaLentes: false,
    diabetico: false,
    otraEnfermedad: "",
  });
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Asignamos valores predeterminados si los campos están vacíos
    const dataToSend = {
      Id: parseInt(userId),// Asignamos el userId al campo Id
      NombreCompleto: formData.nombreCompleto || "Sin nombre", // Si está vacío, asignamos "Sin nombre"
      Identificacion: formData.identificacion || "Sin identificación", // Si está vacío, asignamos "Sin identificación"
      Edad: formData.edad ? parseInt(formData.edad) : 0, // Si está vacío, asignamos 0
      Genero: formData.genero || "No especificado", // Si está vacío, asignamos "No especificado"
      Estado: formData.estadoActivo, // Mantiene el valor booleano
      Maneja: formData.maneja, // Mantiene el valor booleano
      UsaLentes: formData.usaLentes, // Mantiene el valor booleano
      Diabetico: formData.diabetico, // Mantiene el valor booleano
      OtraEnfermedad: formData.otraEnfermedad || "No tiene otra enfermedad", // Si está vacío, asignamos ""
      AtributosAdicionales: formData.atributosAdicionales || "Sin atributos adicionales", // Si está vacío, asignamos ""
    };

    console.log(dataToSend); // Verifica el objeto antes de enviarlo

    try {
      // Enviar el JSON con los valores predeterminados
      await axios.post(`${API_URL}/persona`, dataToSend);
      alert("Datos de la persona registrados correctamente.");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar persona:", error);
      alert("Error al registrar la persona.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Persona</h2>
      <label>
        Nombre Completo:
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Identificación:
        <input
          type="text"
          name="identificacion"
          value={formData.identificacion}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Género:
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <label>
        Estado (Activo):
        <input
          type="checkbox"
          name="estadoActivo"
          checked={formData.estadoActivo}
          onChange={handleChange}
        />
      </label>
      <label>
        Atributos adicionales:
        <input
          type="text"
          name="atributosAdicionales"
          value={formData.atributosAdicionales}
          onChange={handleChange}
        />
      </label>
      <label>
        ¿Maneja?
        <input
          type="checkbox"
          name="maneja"
          checked={formData.maneja}
          onChange={handleChange}
        />
      </label>
      <label>
        ¿Usa lentes?
        <input
          type="checkbox"
          name="usaLentes"
          checked={formData.usaLentes}
          onChange={handleChange}
        />
      </label>
      <label>
        ¿Diabético?
        <input
          type="checkbox"
          name="diabetico"
          checked={formData.diabetico}
          onChange={handleChange}
        />
      </label>
      <label>
        ¿Padece alguna otra enfermedad? ¿Cuál?
        <input
          type="text"
          name="otraEnfermedad"
          value={formData.otraEnfermedad}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default RegisterForm;
