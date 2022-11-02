import React, { useEffect, useState } from 'react'

const Bikes = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4de44378d8bc2cf455807d108f962231&tags=bikes&per_page=24&format=json&nojsoncallback=1").then((resp) => resp.json()).then((data) => {
            setData(data);
            console.log(data)
        })
    }, [])
    return (
        <div>Bikes</div>
    )
}

export default Bikes;