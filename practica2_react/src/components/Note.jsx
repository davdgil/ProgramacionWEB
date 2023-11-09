import {NoteList, agregarNotas} from "./NoteList";
import '../styles/noteStyles.css'; 

function Note({id, titulo, contenido}){

    return (

        <div className="notaSingle">
            <h1>Buscador de Notas</h1>
            <div className="buscador">
                <input type="text"  />
             </div>
        </div>
    )
}

export default Note