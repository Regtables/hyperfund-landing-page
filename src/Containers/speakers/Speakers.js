import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Speaker } from '../../Components'

import './speakers.css'

const Speakers = () => {
  useEffect(()=> {
      Aos.init({duration: 1000})
  })
  return (
    <div className = 'hyperfund__speakers section__padding' id = 'speakers'>
        <div className = 'hyperfund__speakers-heading'>
            <h2>Webinar Speakers</h2>
        </div>
        <div className = 'hyperfund__speakers-content'>
            <div className = 'hyperfund__speakers-content-speaker' data-aos = 'fade' data-aos-delay = '500' data-aos-once = 'true'>
                <Speaker 
                    name = 'Pine Pienaar'
                    title = 'CEO at Hyperfund Downline'
                    description = 'Add a short description about the speakers expertise in the area'
                />
            </div>

            <div className = 'hyperfund__speakers-content-speaker' data-aos = 'fade' data-aos-delay = '1000' data-aos-once = 'true'>
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
