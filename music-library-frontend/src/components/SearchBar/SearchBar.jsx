import React, { useState } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    function handleSearch(event) {
        event.preventDefault();
        props.searchFunc(search);
        setSearch('');
    }

    function handleReset(event) {
        event.preventDefault();
        props.resetSearch();
    }

    return ( 
        <form onSubmit={(event) => {handleSearch(event)}} id='searchBox'>
            <label>Search: </label>
            <input type='text' placeholder='search music' value={search} 
            onChange={(event) => setSearch(event.target.value)}/>
            <button type='submit'>Go</button>
            <button onClick={(event) => handleReset(event)}>Reset</button>
        </form>
     );
}
 
export default SearchBar;