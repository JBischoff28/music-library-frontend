import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import MusicTable from './components/MusicTable/MusicTable';
import NewSongForm from './components/NewSongForm/NewSongForm';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    GetAllSongs();
  }, []);

  async function GetAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data); // Console logged for debugging/testing purposes
    setSongs(response.data);
  }

  function AddNewSongs(newSong) {
    let tempSongs = [...songs, newSong];
    setSongs(tempSongs);
  }

  return (
    <div className="App">
      <NavBar />
      <NewSongForm addNewSong={AddNewSongs}/>
      <MusicTable songsArray={songs}/>
    </div>
  );
}

export default App;