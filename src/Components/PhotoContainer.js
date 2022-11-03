import React, { useEffect, useState } from 'react'
import Photos from './Photos';

const PhotoContainer = (props) => {
    console.log(props)
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4de44378d8bc2cf455807d108f962231&tags=${props.tag}&per_page=24&format=json&nojsoncallback=1`)
        .then((resp) => resp.json())
        .then((data) => {
            setData(data);
            console.log(data)
        })
    }, [props])
    return (
        <div>
            {data?.photos?.photo?.map((photo) => {
        return <Photos title={photo.title} id={photo.id} key={photo.id} server={photo.server} secret={photo.secret} />
                
            })}    

        </div>

        
    )
}

export default PhotoContainer;