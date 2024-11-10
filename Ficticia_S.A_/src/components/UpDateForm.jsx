import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUser } from "../assets/MoksData"; 
import './Forms.css';  // Asegúrate de importar el CSS

function UpDateForm({ setUserData }) {
    const [updatedUserData, setUpdatedUserData] = useState(mockUser); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData({
            ...updatedUserData,
            [name]: value,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Formulario enviado", updatedUserData); 
        setUserData(updatedUserData); 
        alert("Datos actualizados correctamente.");
        navigate("/"); 
    };

    return (
        <div className="update-form">
            <h1>Actualiza tus Datos</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="username"
                        value={updatedUserData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Identificación:</label>
                    <input
                        type="text"
                        name="identification"
                        value={updatedUserData.identification || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="age"
                        value={updatedUserData.age || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Género:</label>
                    <select
                        name="gender"
                        value={updatedUserData.gender || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div>
                    <label>Estado:</label>
                    <select
                        name="status"
                        value={updatedUserData.status || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
                <div>
                    <label>Atributos adicionales:</label>
                    <input
                        type="text"
                        name="additionalAttributes"
                        value={updatedUserData.additionalAttributes || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>¿Maneja?</label>
                    <select
                        name="drives"
                        value={updatedUserData.drives || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label>¿Usa lentes?</label>
                    <select
                        name="wearsGlasses"
                        value={updatedUserData.wearsGlasses || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label>¿Es diabético?</label>
                    <select
                        name="diabetic"
                        value={updatedUserData.diabetic || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label>¿Padece alguna otra enfermedad? ¿Cuál?</label>
                    <input
                        type="text"
                        name="otherConditions"
                        value={updatedUserData.otherConditions || ""}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}

export default UpDateForm;
