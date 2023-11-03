import { useState } from "react";
import NoteList from "./NoteList";

function NoteEditor ({addNote}){

const [titulo, setTitulo]= useState('')
const [contenido, setContenido] = useState('')


const saveData = () =>{
    const nuevaNota = {
        titulo: titulo,
        contenido: contenido,
    };
}


return(
    
    <div className="saveNote">
        <div className="title">
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div className="content">
            <textarea value={contenido} onChange={(e) => setContenido(e.target.value)} />
        </div>
        <div className="saveButton">
            <button onClick={saveData}>Guardar</button>
        </div>
        
    </div>


)




}

export default NoteEditor