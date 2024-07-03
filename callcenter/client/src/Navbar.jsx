import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
    <Navbar className="navbar-custom" expand="lg" >
        <Navbar.Brand as={Link} to="/" >Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            <Nav.Link as={Link} to="/cliente">Cliente</Nav.Link>
            <Nav.Link as={Link} to="/agente">Agente</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>

            {/* 
                <NavDropdown title="Desplegable" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Otra acción</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Algo más</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separado</NavDropdown.Item>
                </NavDropdown>
            */}
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    );
}

export default MyNavbar;