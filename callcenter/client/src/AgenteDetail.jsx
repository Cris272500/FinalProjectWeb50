import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AgenteDetail = () => {
    const { id } = useParams();
    const [agente, setAgente] = useState(null);

    useEffect(() => {
        const fetchAgente = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/nethelp/api/v1/agente/${id}`);
                setAgente(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAgente();
    }, [id]);

    if (!agente) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Bienvenido/a, {agente.username}</h1>
            <p>ID: {agente.id}</p>
            <p>Departamento: {agente.departamento}</p>
            <p>Estado: {agente.estado}</p>
            {/* Agregar más campos según tu modelo Agente */}
        </div>
    );
}

export default AgenteDetail;