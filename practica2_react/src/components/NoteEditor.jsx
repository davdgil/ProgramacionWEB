import { useState } from "react";
import '../styles/editorStyles.css'; 

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

const checkFields = () =>{
    if(titulo.trim() === ''){
        alert('Campo de titulo vacio');
    }else if(contenido.trim() === ''){
        alert('Campo de contenido vacio')
    }else{
        saveData()
    }
}


return(
    
    <div className="saveNote">
        <div className="title">
            <input type="text" placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div className="content">
            <textarea value={contenido} placeholder="Contenido" onChange={(e) => setContenido(e.target.value)} />
        </div>
        <div className="saveButton">
            <button className ='button' onClick={checkFields}>Guardar</button>
        </div>
        
    </div>

)

}

export default NoteEditor