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

  async function PostNewSong(url, body) {
    const response = await axios.post(url, body);
    console.log(response.data); // Console logged for debugging/testing purposes
    const tempSongsArray = [...songs, response.data];
    setSongs(tempSongsArray);
  }

  async function deleteSong(id) {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`);
        console.log(response.status, response.statusText);
        console.log('Song successfully deleted!');
    }
    catch (error) {
        alert(error);
    }
}

  return (
    <div className="App">
      <NavBar />
      <NewSongForm addNewSong={PostNewSong} />
      <MusicTable songsArray={songs} removeSong={deleteSong}/>
    </div>
  );
}

export default App;