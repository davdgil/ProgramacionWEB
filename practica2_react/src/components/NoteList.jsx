import { useState } from "react";


function NoteList (){

    const [notes, setNotes] = useState('');
    

    const isEmpty = (notes) =>{
       return notes.length === 0
    }

    const agregarNotas = (nota) =>{
      setNotes([...notes, nota])
    }
    
    return (
      <div className="notasEmpty" id="">
        {isEmpty(notes) ? (
          <p>Todavía no has creado notas</p>
        ) : (
          <div className="notasNotEmpty">
            {notes.map((note, index) => (
              <div key={index}>
                {note}
              </div>
            ))}
          </div>
        )}
      </div>
    );
    
      

}

export default NoteList;