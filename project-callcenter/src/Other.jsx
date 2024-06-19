import React from "react";
import styles from './Navbar.module.css';

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
        <nav className={styles.navbar}>
            
            <ul className={`${styles.menu}`}>
                <a href="#" className={`${styles.nav_link} ${styles.welcome_message}`}>NetHelp Connect</a>
                <li className={styles.nav_item}>
                    <a href="#" className={styles.nav_link}>Agent</a>
                </li>
                <li className={styles.nav_item}>
                    <a href="#" className={styles.nav_link}>Customer</a>
                </li>
                <li className={styles.nav_item}>
                    <a href="#" className={styles.nav_link}>Admin</a>
                </li>

            </ul>
        </nav>
        
    );
}

export { Content, Usuarios, Navbar };