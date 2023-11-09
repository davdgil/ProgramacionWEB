import '../styles/noteList.css';


function NoteList ( {notes} ){
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
              </div>
            ))}
          </div>
        )}
      </div>
    );
    
      

}

export { NoteList}