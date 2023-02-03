
const MusicTable = (props) => {

    function ConfirmDeletion(id) {
        let userRes = prompt("Are your sure?\nDeleting this song cannot be undone!\nEnter Yes or No");
        if (userRes === 'y' || userRes === 'yes' || userRes === 'Yes' || userRes === 'Y' || userRes === 'YES') {
            props.removeSong(id);
        }
        else {}
    }

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.songsArray.map((song, index) =>
                    (
                    <tr key={index}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <td><button type='submit' onClick={() => ConfirmDeletion(song.id)}>DELETE</button></td>
                    </tr>
                    )
                )}
            </tbody>
        </table>
     );
}
 
export default MusicTable;