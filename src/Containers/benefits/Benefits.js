import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Benefit } from '../../Components'

import './benefits.css'

const Benefits = () => {
  useEffect(()=> {
      Aos.init({duration: 1000})
  })
  return (
    <div className = 'hyperfund__benefits section__padding' id = 'benefits'>
        <div className = 'hyperfund__benefits-heading'>
            <h1>What Will You Learn?</h1>
        </div>
        <div className = 'hyperfund__benefits-content'>
            <div className = 'hyperfund__benefits-content_benefit' data-aos = 'fade-left' data-aos-once = 'true'>
                <Benefit
                    title = 'Benefit 1'
                    text = 'Describe the most important benefit of attending this webinar'
                />
            </div>
            <div className = 'hyperfund__benefits-content_benefit'  data-aos = 'fade-left' data-aos-once = 'true' data-aos-delay = '500'>
                <Benefit
                    title = 'Benefit 2'
                    text = 'Describe the most important benefit of attending this webinar'
                />
            </div>
            <div className = 'hyperfund__benefits-content_benefit'  data-aos = 'fade-left' data-aos-once = 'true' data-aos-delay = '1000'>
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
