import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    GetAllSongs();
  }, []);

  async function GetAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data); // Console logged in order to debug when needed
    setSongs(response.data);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
