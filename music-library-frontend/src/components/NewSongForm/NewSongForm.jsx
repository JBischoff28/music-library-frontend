import React, { useState } from 'react';

const NewSongForm = (props) => {

    const [newSong, setNewSong] = useState({});

    return ( 
        <form>
            <div>
                <h3>Add New Song</h3>
            </div>
            <div>
                <label>Title: </label>
                <input type='text'></input>
            </div>
            <div>
                <label>Artist: </label>
                <input type='text'></input>
            </div>
            <div>
                <label>Album: </label>
                <input type='text'></input>
            </div>
            <div>
                <label>Release Date: </label>
                <input type='date'></input>
            </div>
            <div>
                <label>Genre: </label>
                <input type='text'></input>
            </div>
            <div></div>
        </form>
     );
}
 
export default NewSongForm;