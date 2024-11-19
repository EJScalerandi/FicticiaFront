import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Asegúrate de importar axios
import './Forms.css';

function UpDateForm({ setUserData }) {
    const [updatedUserData, setUpdatedUserData] = useState({
        username: "",
        identification: "",
        age: "",
        gender: "",
        status: "",
        additionalAttributes: "",
        drives: "",
        wearsGlasses: "",
        diabetic: "",
        otherConditions: "",
    });
    const navigate = useNavigate();

    // Obtener el userId desde localStorage
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            alert("No se encontró el ID del usuario.");
            navigate("/"); // Redirigir a la página principal si no se encuentra el userId
        } else {
            // Si el userId está presente, hacemos una llamada para obtener los datos del usuario
            axios.get(`http://localhost:5051/api/persona/${userId}`).then((response) => {
                setUpdatedUserData(response.data);
            }).catch(error => {
                console.error("Error al obtener los datos del usuario:", error);
                alert("Hubo un error al obtener los datos.");
            });
        }
    }, [userId, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData({
            ...updatedUserData,
            [name]: value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Asignar valores predeterminados si no se ingresan
            const data = {
                Id: userId, // Usamos el userId que viene desde localStorage
                NombreCompleto: updatedUserData.username || "Nombre No Proporcionado",
                Identificacion: updatedUserData.identification || "",
                Edad: updatedUserData.age || 0,
                Genero: updatedUserData.gender || "No Especificado",
                Estado: updatedUserData.status === "activo" ? true : false,
                Maneja: updatedUserData.drives === "si" ? true : false,
                UsaLentes: updatedUserData.wearsGlasses === "si" ? true : false,
                Diabetico: updatedUserData.diabetic === "si" ? true : false,
                OtraEnfermedad: updatedUserData.otherConditions || "",
                AtributosAdicionales: updatedUserData.additionalAttributes || "",
            };
            console.log(data)
            console.log(userId)

            // Enviar los datos con PUT
            const response = await axios.put(
                `http://localhost:5051/api/persona/${userId}`,
                data
            );

            console.log("Datos actualizados:", response.data);
            setUserData(updatedUserData); // Actualiza el estado local si es necesario
            alert("Datos actualizados correctamente.");
            navigate("/"); // Redirige al usuario después de la actualización

        } catch (error) {
            console.error("Error al actualizar los datos:", error);
            alert("Hubo un error al actualizar los datos.");
        }
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
