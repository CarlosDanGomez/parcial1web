import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Saludador = () => {
  const [hor, setHor] = useState (0)
  const [horaa, setHoraa] = useState (0)
  const [nombre, setNombre] = useState ("")
  const [nombr, setNombr] = useState ("")
  const [saludo, setSaludo] = useState ("")
  const calcularSaludo = (hori, nombri) => {
    let salud
  
    if (hori >= 0 && hori < 12) {
      salud = "Buenos días, " + nombri
    } else if (hori >= 12 && hori < 19) {
      salud = "Buenas tardes, " + nombri
    } else {
      salud = "Buenas noches, " + nombri
    }
  
    console.log(salud)
    return (salud)
  };
  

  return(
<>
<h1>Tienda de minutos</h1>
<br></br>
<span>Cual es su nombre?</span>
<form>
  <input type = 'text' value={nombre} onChange={(a) => setNombre(a.target.value)}></input>
</form>
<br></br>
<br></br>
<span>Que horas son? Formato militar, solo el numero para la hora </span>
<form>
  <input type = 'number' min="0" value={horaa} onChange={(a) => setHoraa(a.target.value)}></input>
</form>
<br></br>
<input type = 'button' value='enviar' onClick={() => {setHor(horaa); setNombr(nombre); setSaludo(calcularSaludo(horaa, nombre))}}/>
<br></br>
<span>{saludo} </span>
</>
    );
}

export default Saludador;
