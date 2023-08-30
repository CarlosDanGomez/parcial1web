import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Timer = () => {
  const [segundos, setSegundos] = useState (0)
  const [segund, setSegund] = useState (0)
  const [Horas, setHoras] = useState(0)
  const [Minutos, setMinutos] = useState(0)
  const [Segs, setSegs] = useState(0)
  const calcularTiempo = (seg) => {
    let h, m ,s
  h = Math.floor(seg/3600);
  m = Math.floor((seg - (h*3600))/60);
  s = seg - (h*3600) - (m*60);
  setHoras(h)
  setMinutos(m)
  setSegs(s)

  console.log("Hora: "+h+":"+m+":"+s)
  }
  

  return(
<>
<h1>Timer</h1>
<br></br>
<form>
  <input type = 'number' min="0" value={segundos} onChange={(a) => setSegundos(a.target.value)}></input>
  <input type = 'button' value='enviar' onClick={() => {setSegund(segundos); calcularTiempo(segundos)}}/>
</form>
<br></br>
<span> Hora en segundos: {segund} </span>
<br></br>
<span> Horas/Minutos/Segundos: {Horas}:{Minutos}:{Segs} </span>
</>
    );
}

export default Timer;
