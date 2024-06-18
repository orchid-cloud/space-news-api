import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewsList([data]);
      });
  }, []);
  console.log({ newsList });
  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((val, key) => (
          <div key={key}>{val.results[0].title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
