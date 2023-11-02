import { useState } from "react";


function NoteList (){

    const [notes, setNotes] = useState('');

    const isEmpty = (notes) =>{
       return notes.length === 0
    }

    return (
        <div className="notas" id="">
          {isEmpty(notes) ? (
            <p>Todavía no hay nada en la lista</p>
          ) : null}
        </div>
      );
      

}

export default NoteList;