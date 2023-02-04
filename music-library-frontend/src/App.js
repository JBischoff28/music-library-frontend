import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import MusicTable from './components/MusicTable/MusicTable';
import NewSongForm from './components/NewSongForm/NewSongForm';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

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

  async function DeleteSong(id) {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`);
        console.log(response.status, response.statusText);
        console.log('Song successfully deleted!');
        GetAllSongs();
    }
    catch (error) {
        alert(error);
    }
}

  function SearchSong(search) {
    let searchRes;
    searchRes = songs.filter((el) => {
      if (el.title.includes(search) || el.artist.includes(search) || el.album.includes(search)
      || el.release_date.includes(search) || el.genre.includes(search)) {
          console.log(searchRes);
          return true;
      }
      else {
          return false;
      }
    });
    setSongs(searchRes);
  }



  return (
    <div className="container-fluid">
      <div className='row'>
        <NavBar />
      </div>
      <div className='d-flex flex-column'  id='border-box'>
        <NewSongForm addNewSong={PostNewSong} />
      </div>
      <div id='border-box2'>
        <div>
          <SearchBar searchFunc={SearchSong} resetSearch={GetAllSongs}/>
        </div>
        <MusicTable songsArray={songs} removeSong={DeleteSong} />
      </div>
    </div>
  );
}

export default App;