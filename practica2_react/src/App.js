import logo from './logo.svg';
import './App.css';
import { NoteList, agregarNotas } from './components/NoteList';
import { useState } from "react";
import NoteEditor from './components/NoteEditor';
import Note from './components/Note';


function App() {

  const [notes, setNotes] = useState([]);
    
  const agregarNotas = (nota) => {
    const updatedNotes = [...notes, nota];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }


  return (
    <div className="App">
      <div className="EditorAndListContainer">
        <div className="NoteEditor">
          <NoteEditor agregarNotas={agregarNotas} />
        </div>
        <hr id="divisor"></hr>
        <div className="NoteList">
          <NoteList notes={notes} />
        </div>
      </div>
      <div className="Note">
        <Note></Note>
      </div>
    </div>
  );
  
  
  
  
  
  
}

export default App;
