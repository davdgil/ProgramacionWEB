import React from 'react';
import '../styles/note.css'

function Note({ index, titulo, contenido, removeNote }) {
  return (
    <div className="notas" >
      <h2>Nota {index}</h2>  
      {titulo} <br />
      {contenido}
      <button onClick={removeNote}>Eliminar</button>
    </div>
  );
}

export default Note;
