import { Header, Sidebar } from "../components"
import { fetchTicketId, fetchTickets, fetchNumeroCuenta } from "../helpers/api"
import { useState, useEffect } from "react"

export const TicketsList = () => {

    const [tickets, setTickets] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [customerAccount, setCustomerAccount] = useState('');
    const [ticketId, setTicketId] = useState("");

    useEffect(() => {
        filterTickets("all", "");
    }, []);

    const handleFilterOptionChange = (event) => {
        setFilterOption(event.target.value);
        if (event.target.value === "id") {
            setTicketId("");
        } else if (event.target.value === "account") {
            setCustomerAccount("");
        }
        filterTickets(event.target.value, event.target.value === "account" ? customerAccount : ticketId);
    };

    const handleTicketIdChange = (event) => {
        setTicketId(event.target.value);
        filterTickets(filterOption, event.target.value);
    };

    const handleCustomerAccountChange = (event) => {
        setCustomerAccount(event.target.value);
        filterTickets(filterOption, event.target.value);
    };
    
    const filterTickets = async (option, value) => {
        if (option === "all") {
            const data = await fetchTickets();
            setFilteredTickets(data);
        } else if (option === "id") {
            if (value) {
                console.log("Valor: ", value);
                const data = await fetchTicketId(value);
                setFilteredTickets([data]);
            } else {
                setFilteredTickets([]);
            }
        } else if (option === "account") {
            if (value) {
                const data = await fetchNumeroCuenta(value);
                console.log("Cuenta: ", data);
                setFilteredTickets(data);
            } else {
                setFilteredTickets([]);
            }
        }
    }

    useEffect(() => {
        console.log("Filtered Tickets:", filteredTickets);
    }, [filteredTickets]);

    return (
        <>
            <div className="page-wrapper">
                <div className="main-container">

                    <div className="content-wrapper-scroll">

                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Filtros de busqueda</div>
                                        </div>
                                        <div className="card-body">
                                            {/* Todos */}
                                            <div className="form-check">
                                                <input className="form-check-input" 
                                                name="flexRadioDefault"
                                                type="radio"
                                                id="flexRadioDefault1"
                                                value="all"
                                                checked={filterOption === "all"}
                                                onChange={handleFilterOptionChange}

                                                />
                                                <label className="form-check-label" for="flexRadioDefault1">Todos</label>
                                            </div>
                                            {/* Id ticket */}
                                            <div className="form-check">
                                                <input className="form-check-input" 
                                                type="radio" 
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault1"
                                                value="id"
                                                checked={filterOption === "id"}
                                                onChange={handleFilterOptionChange}
                                                />
                                                <label className="form-check-label" for="flexRadioDefault1">Id ticket</label>
                                            </div>

                                            { filterOption === "id" && (
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Ingresa el Id del ticket"
                                                value={ticketId}
                                                onChange={handleTicketIdChange}
                                                />
                                            )}

                                            {/* Cuenta cliente */}
                                            <div className="form-check">
                                                <input className="form-check-input" 
                                                type="radio" 
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault1"
                                                value="account"
                                                checked={filterOption === "account"}
                                                onChange={handleFilterOptionChange}/>
                                                <label className="form-check-label" for="flexRadioDefault1">Numero cuenta cliente</label>
                                            </div>

                                            { filterOption === "account" && (
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Ingresa el numero de cuenta"
                                                value={customerAccount}
                                                onChange={handleCustomerAccountChange}
                                                />
                                            )}

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label className="form-check-label" for="flexRadioDefault1">Estado</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label className="form-check-label" for="flexRadioDefault1">Id agente</label>
                                            </div>


                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-12">

                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Tickets</div>
                                        </div>

                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table id="basicExample" className="table custom-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Asunto</th>
                                                            <th>Estado</th>
                                                            <th>Fecha Creacion</th>
                                                            <th>Agente</th>
                                                            <th>Usuario</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredTickets.map((ticket) => (
                                                            <tr key={ticket.id}>
                                                            <td>{ticket.id}</td>
                                                            <td>{ticket.asunto}</td>
                                                            <td>
                                                                {ticket.estado === 'Abierto' ? (
                                                                    <span className="badge shade-green">{ticket.estado}</span>
                                                                ) : (
                                                                    <span className="badge shade-red">{ticket.estado}</span>
                                                                )}
                                                            </td>
                                                            <td>{ticket.fecha_creacion}</td>
                                                            <td>{ticket.agente_nombre}</td>
                                                            <td>{ticket.cliente_nombre}</td>
                                                        </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="app-footer">
                            <span>© Arise admin 2023</span>
                        </div>

                    </div>

                </div>
        
            </div>
        
        </>
    )
}