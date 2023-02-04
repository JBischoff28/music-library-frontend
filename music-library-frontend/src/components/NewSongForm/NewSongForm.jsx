import React, { useState } from 'react';

const NewSongForm = (props) => {

    const [newSongTitle, setNewSongTitle] = useState('');
    const [newSongArtist, setNewSongArtist] = useState('');
    const [newSongAlbum, setNewSongAlbum] = useState('');
    const [newSongRelease, setNewSongRelease] = useState('');
    const [newSongGenre, setNewSongGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: newSongTitle,
            artist: newSongArtist,
            album: newSongAlbum,
            release_date: newSongRelease,
            genre: newSongGenre
        }
        props.addNewSong('http://127.0.0.1:8000/api/music/', newSong);
        setNewSongTitle('');
        setNewSongArtist('');
        setNewSongAlbum('');
        setNewSongRelease('');
        setNewSongGenre('');

    }

    return ( 
        <form onSubmit={(event) => handleSubmit(event)} className='form-grid'>
            <div className='formText'>
                <h3>Add New Song</h3>
            </div>
            <div className='form-group'>
                <label>Title: </label>
                <input className='form-control' type='text' value={newSongTitle} onChange={(event) => setNewSongTitle(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Artist: </label>
                <input className='form-control' type='text' value={newSongArtist} onChange={(event) => setNewSongArtist(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Album: </label>
                <input className='form-control' type='text' value={newSongAlbum} onChange={(event) => setNewSongAlbum(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Release Date: </label>
                <input className='form-control' type='date' value={newSongRelease} onChange={(event) => setNewSongRelease(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Genre: </label>
                <input className='form-control' type='text' value={newSongGenre} onChange={(event) => setNewSongGenre(event.target.value)} />
            </div>
            <div className='form-group6'>
                <button className='form-control' type='submit' id='formButton'>Add Song</button>
            </div>
        </form>
     );
}
 
export default NewSongForm;