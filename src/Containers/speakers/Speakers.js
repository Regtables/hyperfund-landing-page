import React from 'react'
import { Speaker } from '../../Components'

import './speakers.css'

const Speakers = () => {
  return (
    <div className = 'hyperfund__speakers section__padding' id = 'speakers'>
        <div className = 'hyperfund__speakers-heading'>
            <h2>Webinar Speakers</h2>
        </div>
        <div className = 'hyperfund__speakers-content'>
            <div className = 'hyperfund__speakers-content-speaker'>
                <Speaker 
                    name = 'Pine Pienaar'
                    title = 'CEO at Hyperfund Downline'
                    description = 'Add a short description about the speakers expertise in the area'
                />
            </div>

            <div className = 'hyperfund__speakers-content-speaker'>
                <Speaker 
                    name = 'Katrina Robertson'
                    title = 'CFO at Hyperfund Downline'
                    description = 'Add a short description about the speakers expertise in the area'
                />
            </div>
        </div>
    </div>
  )
}

export default Speakers
