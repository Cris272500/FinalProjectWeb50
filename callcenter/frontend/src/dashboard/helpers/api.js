const API_URL = import.meta.env.VITE_API_URL

export const fetchServicios = async () => {
    const response = await fetch(`${API_URL}/servicios`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const dataResponse = await response.json()
    return dataResponse
}