import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { Content, Usuarios, Navbar } from './Other';
import React, {useState} from 'react';

function App() {

  //const titulo = "Suma: ";
  //let suma = 2 + 2; # se pueden pasar variables

  // en return muestra un contenido HTML
  // antes del Button iba <Content/>
  const [count, setCount] = useState(0);

  //const numeros = [1, 2, 3, 4, 5].join(', ');

  const handleClick = () => {
    setCount(count + 1);
  }
  /* Debajo del Navbar iba eso
  <Button onClick={handleClick}/>
  <Usuarios/>
  <p>Numero de veces clickeado: {count}</p>
  */
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
