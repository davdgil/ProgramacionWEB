import logo from './logo.svg';
import './App.css';
import { NoteList, agregarNotas } from './components/NoteList';

import NoteEditor from './components/NoteEditor';
<link rel="stylesheet" type="text/css" href="archivo.css"></link>

function App() {
  return (
    <div className="App">
      <NoteList  />
      <NoteEditor></NoteEditor>
    </div>
  );
}

export default App;
