import React from 'react'

import { Countdown, CTASmall } from '../../Components'

import './header.css'

const Header = ({date, time}) => {
  return (
    <div className = 'hyperfund__header section__margin'>
        <div className = 'hyperfund__header-container'>
            <div className = 'hyperfund__header-container_left'>
                <div className = 'hyperfund__header-container_left-when'>
                    <div className = 'hyperfund__header-container_left-when_day'>
                        <h3>When:</h3>
                        <p>{date}</p>
                    </div>

                    <div className = 'hyperfund__header-container_left-when_hour'>
                        <h3>Hour:</h3>
                        <p>{time}</p>
                    </div>
                </div>

                <div className = 'hyperfund__header-container_left-title'>
                    <h1>Hyperfund Stokvel Seminar</h1>
                </div>

                <div className = 'hyperfund__header-container_left-description'>
                    <p>Short description of your offer and its key benefits. Here's what this webinar is about - and why it's useful for your target audience.</p>
                </div>

                <div className = 'hyperfund__header-container_left-countdown'>
                    <Countdown date = 'April 15, 2022 00:00:00' />
                </div>

                <div className = 'hyperfund__header-container_left-btn'>
                    <div className = 'hyperfund__header-container_left-btn_container'>
                        <a><h4>LEARN MORE</h4></a>
                    </div>
                </div>
            </div>

            <div className = 'hyperfund__header-container_right'>
                <div className = 'hyperfund__header-container_right-cta'>
                    <CTASmall />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
