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
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <h3>Add New Song</h3>
            </div>
            <div>
                <label>Title: </label>
                <input type='text' value={newSongTitle} onChange={(event) => setNewSongTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist: </label>
                <input type='text' value={newSongArtist} onChange={(event) => setNewSongArtist(event.target.value)} />
            </div>
            <div>
                <label>Album: </label>
                <input type='text' value={newSongAlbum} onChange={(event) => setNewSongAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date: </label>
                <input type='date' value={newSongRelease} onChange={(event) => setNewSongRelease(event.target.value)} />
            </div>
            <div>
                <label>Genre: </label>
                <input type='text' value={newSongGenre} onChange={(event) => setNewSongGenre(event.target.value)} />
            </div>
            <div>
                <button type='submit'>Add Song</button>
            </div>
        </form>
     );
}
 
export default NewSongForm;