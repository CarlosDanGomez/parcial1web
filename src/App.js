import logo from './logo.svg';
import './App.css';
import React from 'react';
import Timer from './Timer'
import Tienda from './TiendaMin';
import Saludador from './Saludador';

function App() {
  return (
    <div className="App">
<React.StrictMode>
  <Timer/>
</React.StrictMode>
<React.StrictMode>
  <Tienda/>
</React.StrictMode>
<React.StrictMode>
  <Saludador/>
</React.StrictMode>
    </div>
  );
}

export default App;
