import React from 'react'

import './CTASmall.css'

import video from '../../Assets/Vidoes/CTA-video.mp4'
import hyperverse from '../../Assets/Images/hyperverse.jpeg'

const CTASmall = () => {
  return (
    <div className = 'hyperfund__ctaSmall'>
        <div className = 'hyperfund__ctaSmall-video'>
            {/* <video controls poster preload>
                <source src = {video}></source>
            </video> */}
            <img src = {hyperverse} />
            {/* <embed src = 'https://www.youtube.com/watch?v=LO2b1T7mgt0' ></embed> */}
        </div>
        <div className = 'hyperfund__ctaSmall-form'>
            <form>
                <div className = 'hyperfund__ctaSmall-form_name'>
                    <h5>Name</h5>
                    <input type = 'text'/>
                </div>
                <div className = 'hyperfund__ctaSmall-form_email'>
                    <h5>Email</h5>
                    <input type = 'email' />
                </div>
                <div className = 'hyperfund__ctaSmall-form_submit'>
                    <input type = 'submit' value = 'REGISTER NOW' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default CTASmall
