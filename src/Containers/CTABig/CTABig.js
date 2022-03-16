import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import RegisterNow from '../../Components/buttons/registerNow/RegisterNow'

import './CTABig.css'


const CTABig = () => {
  useEffect(()=> {
      Aos.init({duration: 2000})
  })
  return (
    <div className = 'hyperfund__cta section__padding'>
        <div className = 'hyperfund__cta-heading'>
            <h2>Register Today</h2>
        </div>
        <div className = 'hyperfund__cta-content'>
            <div className = 'hyperfund__cta-content_text'>
                <p>Suspendisse egestas rhoncus urna in bibendum. Donec urna neque, euismod sed justo quis, convallis tincidunt risus. Phasellus fringilla odio vel erat fringilla, </p>
            </div>
            <div className = 'hyperfund__cta-content_btn' data-aos = 'fade-up' data-aos-once = 'true'>
                <RegisterNow />
            </div>
        </div>
    </div>
  )
}

export default CTABig
