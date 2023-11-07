import logo from './logo.svg';
import './App.css';
import { NoteList, agregarNotas } from './components/NoteList';
import { useState } from "react";
import NoteEditor from './components/NoteEditor';
<link rel="stylesheet" type="text/css" href="archivo.css"></link>

function App() {

  const [notes, setNotes] = useState([]);
    
  const agregarNotas = (nota) => {
    const updatedNotes = [...notes, nota];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }



  return (
    <div className="App">
      <NoteEditor agregarNotas = {agregarNotas}/>
      <hr id ="divisor"></hr>
      <NoteList notes = {notes} />
      
    </div>
  );
}

export default App;
