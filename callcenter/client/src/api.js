const apiUrl = 'http://localhost:8000/nethelp/api/v1/'
const apiUrlAgente = 'http://localhost:8000/api'

export const login_agente = async (formData) => {
    try {
        const response = await fetch(`${apiUrlAgente}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Usuario autenticado: ", data)
            return data
        } else {
            console.log("Fallo al auntetitcar al usuario");
            return null;
        }
    } catch (error) {
        console.error("Error al enviar datos de inicio de sesión:", error);
        throw error;
    }
}