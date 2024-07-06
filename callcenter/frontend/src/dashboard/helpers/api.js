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

export const fetchCreateTicket = async (data) => {
    console.log(data);
    try {
        const response = await fetch(`${API_URL}/tickets/create/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ ...data }),
        })
        if (!response.ok) {
            throw new Error('Error al crear el ticket');
        }
        
    } catch (error) {
        //console.log(dataResponse)
        console.error("Error al crear el ticket:", error);
        throw error;
    }
}

// fetchs para los inputs
export const fetchClientes = async () => {
    try {
        const response = await fetch(`${API_URL}/tickets/clientes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const dataResponse = await response.json()
        return dataResponse
    } catch (error) {
        console.error("Error al obtener los clientes:", error);
        throw error;
    }
}

export const fetchAgentes = async () => {
    try {
        const response = await fetch(`${API_URL}/tickets/agentes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const dataResponse = await response.json()
        return dataResponse
    } catch (error) {
        console.error("Error al obtener los agentes:", error);
        throw error;
    }
}

export const fetchAreas = async () => {
    try {
        const response = await fetch(`${API_URL}/tickets/areas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const dataResponse = await response.json()
        return dataResponse
    } catch (error) {
        console.error("Error al obtener las areas:", error);
        throw error;
    }
}

export const fetchSubservicios = async () => {
    try {
        const response = await fetch(`${API_URL}/tickets/subservicios`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const dataResponse = await response.json()
        return dataResponse
    } catch (error) {
        console.error("Error al obtener los subservicios:", error);
        throw error;
    }
}

