import React from 'react'
import { Benefit } from '../../Components'

import './benefits.css'

const Benefits = () => {
  return (
    <div className = 'hyperfund__benefits section__padding' id = 'benefits'>
        <div className = 'hyperfund__benefits-heading'>
            <h1>What Will You Learn?</h1>
        </div>
        <div className = 'hyperfund__benefits-content'>
            <div className = 'hyperfund__benefits-content_benefit'>
                <Benefit
                    title = 'Benefit 1'
                    text = 'Describe the most important benefit of attending this webinar'
                />
            </div>
            <div className = 'hyperfund__benefits-content_benefit'>
                <Benefit
                    title = 'Benefit 2'
                    text = 'Describe the most important benefit of attending this webinar'
                />
            </div>
            <div className = 'hyperfund__benefits-content_benefit'>
                <Benefit
                    title = 'Benefit 3'
                    text = 'Describe the most important benefit of attending this webinar'
                />
            </div>
        </div>
    </div>
  )
}

export default Benefits
