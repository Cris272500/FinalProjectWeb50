const API_URL = import.meta.env.VITE_API_URL

export const fetchLogin = async (data) => {
    const response = await fetch(`${API_URL}/agente/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data }),
    });

    const dataResponse = await response.json();
    return dataResponse
}
export const fetchRegister = async (data) => {
    const response = await fetch(`${API_URL}/register_client/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data }),
    });

    const dataResponse = await response.json();
    return dataResponse
}