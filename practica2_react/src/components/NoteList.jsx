import '../styles/noteList.css';


function NoteList ( {notes, removeNote} ){
  const isEmpty = (notes) =>{
    return notes.length === 0
 }
 
 
    return (
        
      <div className="notasEmpty">
        {isEmpty(notes) ? (
          <p>Todavía no has creado notas</p>
        ) : (
          <div className="notasNotEmpty">
            <br />
            {notes.map((note, index) => (
              <div key={index}>
                <h3>Nota {index}</h3>
                {note.titulo} <br />
                {note.contenido}

                <div className='eliminarNota'>
                  <button onClick={()=>removeNote(index)}>Eliminar</button>
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    );
    
}

const notaFiltrada = (notaFiltrada) =>{

}

export { NoteList}