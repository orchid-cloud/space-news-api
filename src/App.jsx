import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer"></div>
    </div>
  );
}

export default App;
