import React from 'react'
import { AiOutlinePicture } from 'react-icons/ai'

import './speaker.css'

const Speaker = ({image, name, title, description}) => {
  return (
    <div className = 'hyperfund__speaker'>
        <div className = 'hyperfund__speaker-left'>
            <div className = 'hyperfund__speaker-left_thumbnail'>
                <AiOutlinePicture size = {150} color = 'grey'/>
            </div>
            <div className = 'hyperfund__speaker-left_links'>

            </div>
        </div>
        <div className = 'hyperfund__speaker-right'>
            <div className = 'hyperfund__speaker-right_name'>
                <h3>{name}</h3>
            </div>
            <div className = 'hyperfund__speaker-right_title'>
                <p>{title}</p>
            </div>
            <div className = 'hyperfund__speaker-right_description'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Speaker
