import '../styles/noteList.css';
import Note from './Note';

function NoteList ( {notes, removeNote, searchText} ){
 
  const isEmpty = (notes) =>{
    return notes.length === 0
 }

 
 
return (
  <div className="notasEmpty">
    {isEmpty(notes) ? (
      <p>No se han encontrado notas</p>
    ) : (
      <div className="notasNotEmpty">
        <br />
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            titulo={note.titulo}
            contenido={note.contenido}
            removeNote={() => removeNote(index)}
          />
        ))}
      </div>
    )}
  </div>
);
}

export  { NoteList };