
import './App.css';
import Logo from './components/logo';
import ListToDo from './components/ListToDo';

function App() {
  
  return (
    <header>
      <div className='App'>
        <div className ='LogoU-tadw'>
          <Logo />
        </div>
        <div className="todo-list">
        <h1>Mis Tareas</h1>
        <ListToDo />
      </div>
      </div>
  </header>


    

);

}

export default App;
