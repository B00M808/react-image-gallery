import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar(placeholder, data) {
    const [searchedData, setSearchedData] = useState(null);

    const handleSubmit = () => {

    }
/* React Icons imported for the search bar*/
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" /> 
                <button className="searchIcon" onClick={handleSubmit}><AiOutlineSearch /></button>
            </div>
            <div className="dataResult">

            </div>
                
        </div>
    );
}

export default SearchBar;