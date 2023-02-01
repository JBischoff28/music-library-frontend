
const MusicTable = (props) => {
    
    return ( 
        <ul>
            {props.songsArray.map((song, index) =>
                (
                <div key={index}>
                </div>
                )
            )}
        </ul>
     );
}
 
export default MusicTable;