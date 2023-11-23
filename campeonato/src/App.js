import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [matches, setMatches] = useState([]);
  const [postId, setPostId] = useState('');

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tournamentId: matches }),
    };

    fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));
  }, [matches]);

  const showPostId = () => {
    postId.map((id, index) => {
      console.log(id); // Assuming match is the correct variable to log
    });
  };

  return (
    <div className="App">
      {showPostId}
    </div>
  );
}

export default App;
