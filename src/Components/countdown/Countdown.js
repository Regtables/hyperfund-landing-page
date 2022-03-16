import React, { useState } from 'react'

import './countdown.css'

const Countdown = ({date}) => {
  const [second, setSecond ] = useState(0)
  const [minute, setMinute ] = useState(0)
  const [hour, setHour ] = useState(0)
  const [day, setDay ] = useState(0)

  function countdown (){
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second*60;
    const hour =  minute*60;
    const day = hour*24;

    let textDay = Math.floor(gap/day);
    let textHour = Math.floor((gap % day)/hour);
    let textMinute = Math.floor((gap % hour)/minute);
    let textSecond = Math.floor((gap % minute)/second);

    if(textSecond < 10){
      textSecond = '0' + textSecond
    }

    if(textMinute < 10){
      textMinute = '0' + textMinute
    }

    if(textHour < 10){
      textHour = '0' + textHour
    }

    if(textDay < 10){
      textDay = '0' + textDay
    }

    setSecond(textSecond)
    setMinute(textMinute)
    setHour(textHour)
    setDay(textDay)

  }

  setInterval(countdown, 1000);

  return (
    <div className = 'hyperfund__countdown'>
        <div className = 'hyperfund__countdown-text'>
          <h2>Webinar starts in:</h2>
        </div>
        <div className = 'hyperfund__countdown-container'>
            <div className = 'hyperfund__countdown-container_days'>
                <h3 id = 'day'>{day}</h3>
                <p>Days</p>  
            </div>
            <div className = 'hyperfund__countdown-container_hours'>
                <h3 id = 'hour'>{hour}</h3>
                <p>Hours</p>
            </div>
            <div className = 'hyperfund__countdown-container_minute'>
                <h3 className = 'minute'>{minute}</h3>
                <p>Minutes</p>
            </div>
            <div className = 'hyperfund__countdown-container_secs'>
                <h3 id= 'second'>{second}</h3>
                <p>Seconds</p>
            </div>
        </div>
    </div>
  )
}

export default Countdown
