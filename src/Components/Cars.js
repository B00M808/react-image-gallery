import React, { useEffect, useState } from 'react'
import Photos from './Photos';

const Cars = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4de44378d8bc2cf455807d108f962231&tags=classic+cars&per_page=24&format=json&nojsoncallback=1")
        .then((resp) => resp.json())
        .then((data) => {
            setData(data);
            console.log(data)
        })
    }, [])
    return (
        <div>
            {data?.photos?.photo?.map((photo) => {
        return <div>
                <Photos title={photo.tile} id={photo.id} server={photo.server} owner={photo.owner}/>
                     {/* <img src="https://www.flickr.com/photos/114973983@N05/52470508458/" alt="classic car"/> */}
                    </div>
            })}    

        </div>

        
    )
}

export default Cars;