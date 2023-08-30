import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Tienda = () => {
  const [min, setMin] = useState (0)
  const [minut, setMinut] = useState (0)
  const [precioF, setPrecioF] = useState (0)
  const calcularPrecio = (minuto) => {
    let precio
    if (minuto<=3){
      precio = 100
    }
    else {
      precio = ((minuto-3)*50) + 100
    }

    console.log ("Precio: $" + precio)
    return(precio)
  }
  

  return(
<>
<h1>Tienda de minutos</h1>
<br></br>
<span>Cuantos minutos duró la llamada?</span>
<form>
  <input type = 'number' min="0" value={min} onChange={(a) => setMin(a.target.value)}></input>
  <input type = 'button' value='precio?' onClick={() => {setMinut(min); setPrecioF(calcularPrecio(min))}}/>
</form>
<br></br>
<span> Minutos usados: {minut} </span>
<br></br>
<span> Precio: {precioF} </span>
</>
    );
}

export default Tienda;
