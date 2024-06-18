import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/')
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data.results);
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
          <div key={key}>
            <h3>{val.title}</h3>
            <img src={val.image_url} alt="" />
            <p>{val.summary}</p>
            <p>{val.published_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
