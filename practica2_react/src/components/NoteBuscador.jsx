import {NoteList, agregarNotas} from "./NoteList";
import '../styles/noteBuscador.css'; 
import { useState } from "react";

function NoteBuscador({ notes, onSearch }) {
    const [buscador, setBuscador] = useState('');
  
    const handleSearch = (e) => {
      const searchTerm = e.target.value;
      setBuscador(searchTerm);
      onSearch(searchTerm);
    };
  
    return (
      <div className="notaSingle">
        <h1>Buscador de Notas</h1>
        <div className="buscador">
          <input
            type="text"
            value={buscador}
            onChange={handleSearch}
            placeholder="Buscar notas por título..."
          />
        </div>
      </div>
    );
  }
  
  export default NoteBuscador;