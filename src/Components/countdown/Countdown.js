import React from 'react'

import './countdown.css'

const Countdown = () => {

  function countdown (){
    const countDate = new Date('April 15, 2022 00:00:00').getTime();
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

    if(textSecond > 10){
      document.querySelector('.second').innerHTML = textSecond;
    } else {
      document.querySelector('.second').innerHTML = '0' + textSecond;
    }

    if(textMinute > 10){
      document.querySelector('.minute').innerHTML = textMinute;
    } else{
    
      document.querySelector('.minute').innerHTML = '0' + textMinute;
    }

    if(textHour > 10){
      document.querySelector('.hour').innerHTML = textHour;
    } else{
      document.querySelector('.hour').innerHTML = '0' + textHour;
    }

    if(textDay > 10){
      document.querySelector('.day').innerHTML = textDay;
    } else{
      document.querySelector('.day').innerHTML = textDay;
    }

    return { textDay, textHour, textMinute, textSecond }
  }

  setInterval(countdown, 1000);

  return (
    <div className = 'hyperfund__countdown'>
        <div className = 'hyperfund__countdown-text'>
          <h2>Webinar starts in:</h2>
        </div>
        <div className = 'hyperfund__countdown-container'>
            <div className = 'hyperfund__countdown-container_days'>
                <h3 className = 'day'>time</h3>
                <p>Days</p>  
            </div>
            <div className = 'hyperfund__countdown-container_hours'>
                <h3 className = 'hour'>time</h3>
                <p>Hours</p>
            </div>
            <div className = 'hyperfund__countdown-container_minute'>
                <h3 className = 'minute'>time</h3>
                <p>Minutes</p>
            </div>
            <div className = 'hyperfund__countdown-container_secs'>
                <h3 className = 'second'>time</h3>
                <p>Seconds</p>
            </div>
        </div>
    </div>
  )
}

export default Countdown
