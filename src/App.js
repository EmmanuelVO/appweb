import React from 'react';
//import analyzeimage from './analyzeimage';

function App() {
  const title = 'checar';
  
  return (

    <div>
      <h1>{title}</h1>
      <input type="text" />
      <button onClick={() => analyzeimage()}>Analizar</button>
      <button>Generar</button>

      
    </div>
  );


}

export default App;
