import React from 'react'

const Photos = (props) => {
  return (
    <div>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title}/>
    </div>
  )
}

export default Photos