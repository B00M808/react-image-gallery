import React from 'react'

const Photos = (title, owner) => {
  return (
    <div>
        <img src={`https://flickr.com/${owner}`}/>
    </div>
  )
}

export default Photos