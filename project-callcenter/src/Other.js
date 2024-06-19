import React from "react";

function Content() {
    const numeros = [];

    for(let i = 1; i <= 5; i++) {
        numeros.push(
        <div key={i}>
            Numero: {i}
        </div>
        )
    }

    return (
        <div>
            {numeros}
        </div>
    )
}

function Usuarios() {

    const usuarios = [
        {'id':1, 'name':"Cris"},
        {'id':2 , 'name': "Jahzeel"},
        {'id':3, 'name': "Ete sech"}, 
        {'id':4, 'name': "Pessi"}
    ]

  return (
    <ul>
        {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.name}</li>
        ))}
    </ul>
  )
}

function Navbar() {

    return (
        <nav>
            <div className="navbar-brand">
                Aplicacion
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Register</a>
                </li>
                <li className="nav-item">
                    <a href="#">Login</a>
                </li>

            </ul>
        </nav>
    );
}

export { Content, Usuarios, Navbar };