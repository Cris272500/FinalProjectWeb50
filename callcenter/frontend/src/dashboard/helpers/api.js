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

export const fetchTickets = async () => {
    const response = await fetch(`${API_URL}/tickets`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const dataResponse = await response.json()
    return dataResponse
}

export const fetchTicketId = async (id) => {
    const response = await fetch(`${API_URL}/tickets/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const dataResponse = await response.json()
    console.log("dataResponse", dataResponse)
    return dataResponse
}

export const fetchNumeroCuenta = async (numero_cuenta) => {
    const response = await fetch(`${API_URL}/tickets/cliente/${numero_cuenta}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const dataResponse = await response.json()
    console.log("Data cuenta", dataResponse)
    return dataResponse
}