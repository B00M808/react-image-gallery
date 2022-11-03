import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import Photos from './Photos';

function SearchBar(placeholder, data) {
    const [value, setValue] = useState("");
    const [searchedData, setSearchedData] = useState(null);

    const handleSubmit = () => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4de44378d8bc2cf455807d108f962231&tags=${value}&per_page=24&format=json&nojsoncallback=1`)
            .then((resp) => {
                return resp.json()
            }).then((data) => {
                setSearchedData(data);
            })
    }
    /* React Icons imported for the search bar*/
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button className="searchIcon" onClick={handleSubmit}><AiOutlineSearch /></button>
            </div>
            <div className="dataResult">
                {searchedData?.photos?.photo?.map((photo) => {
                    return <Photos title={photo.title} id={photo.id} key={photo.id} server={photo.server} secret={photo.secret} />

                })}
            </div>

        </div>
    );
}

export default SearchBar;