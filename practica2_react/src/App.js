import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList'
import NoteEditor from './components/NoteEditor';

function App() {
  return (
    <div className="App">
      <NoteList  />
      <NoteEditor></NoteEditor>
    </div>
  );
}

export default App;
