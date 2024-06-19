import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { Content, Usuarios, Navbar } from './Other';
import React, {useState} from 'react';
import './Test.css';

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
  return (
    <div>
      <Navbar/>
      <Button onClick={handleClick}/>
      <p>Numero de veces clickeado: {count}</p>
      <Usuarios/>
    </div>
  );
}

export default App;
