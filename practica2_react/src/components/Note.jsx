import {NoteList, agregarNotas} from "./NoteList";
import '../styles/noteStyles.css'; 
import { useState } from "react";

function Note({notes}){

    const [buscador, setBuscador] = useState('');

    return (

        <div className="notaSingle">
            <h1>Buscador de Notas</h1>
            <div className="buscador">
                <input type="text"  value={buscador} onChange={(e)=> setBuscador(e.target.value)}/>
             </div>
        </div>
    )
}

export default Note