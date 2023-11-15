import './App.css';
import { NoteList, agregarNotas } from './components/NoteList';
import { useState, useEffect  } from "react";
import NoteEditor from './components/NoteEditor';
import NoteBuscador from './components/NoteBuscador';



function App() {

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
    
    // Cargar notas desde el almacenamiento local al iniciar la aplicación
    useEffect(() => {
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      setNotes(storedNotes);
    }, []);

  const agregarNotas = (nota) => {
    const updatedNotes = [...notes, nota];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  const removeNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtrada = notes.filter((note) =>
      note.titulo.toLowerCase().startsWith(text.toLowerCase())

    );
    setFilteredNotes(filtrada);
  };
  
  

  return (
    <div className="App">
      <div className="EditorAndListContainer">
        <div className="NoteEditor">
          <NoteEditor agregarNotas={agregarNotas} />
        </div>
        <hr id="divisor"></hr>
        <div className="NoteList">
        <NoteList notes={searchText ? filteredNotes : notes} removeNote={removeNote} />
        </div>
      </div>
      <div className="Note">
        <NoteBuscador onSearch={handleSearch}></NoteBuscador>
      </div>
    </div>
  );
  

}

export default App;
