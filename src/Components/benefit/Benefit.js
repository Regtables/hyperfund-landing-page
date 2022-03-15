import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

import './benefit.css'

const Benefit = ({title, text}) => {
  return (
    <div className = 'hyperfund__benefit'>
        <div className = 'hyperfund__benefit-icon'>
            <p><FaRegLightbulb size = {30} color = 'yellow'/></p>
        </div>
        <div className ='hyperfund__benefit-title'>
            <h3>{title}</h3>
        </div>
        <div className = 'hyperfund__benefit-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Benefit
