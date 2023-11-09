import { useState } from "react";
import { NoteList} from './NoteList';
import '../styles/editorStyles.css'; // Asegúrate de proporcionar la ruta correcta al archivo CSS si no está en la misma carpeta



function NoteEditor ( {agregarNotas} ){

const [titulo, setTitulo]= useState('')
const [contenido, setContenido] = useState('')


const saveData = () =>{

    const nuevaNota = {
        titulo: titulo,
        contenido: contenido,
    };

    agregarNotas(nuevaNota)

    setTitulo('');
    setContenido('');
    
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
            <button className ='button' onClick={saveData}>Guardar</button>
        </div>
        
    </div>

)

}

export default NoteEditor