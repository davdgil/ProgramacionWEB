import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';


function App() {

  const [matches, setMatches] = useState([])
  const [postId, setPostId] = useState('')

  useEffect(() => {// POST request using fetch inside useEffect React hook

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({tournamentId: matches})
    };

    fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));
    //}, []);// empty dependency array means this effect will only run once
     
    }, [matches]);
  
    const showPostId = () => {
      postId.map((postId, index) => {
        console.log(postId);
      });
    };
    
  return (
    <div className="App">
      {showPostId}
    </div>
  );
}

export default App;
