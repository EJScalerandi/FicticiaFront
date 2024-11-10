
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellido: "",
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí va el POST a la URL
      // const response = await axios.post("TU_URL_AQUI", formData);
      console.log("Datos enviados:", formData);
      alert("Datos cargados correctamente.");
      
     
      navigate("/"); 
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombres:
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
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
        <select name="genero" value={formData.genero} onChange={handleChange} required>
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
