import React from 'react'

const Photos = (props) => {
  return (
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_q.jpg`} alt={props.title}/>
  )
}

export default Photos;