import React from 'react'

import './countdown.css'

const Countdown = () => {

  let textDay;
  let textHour;
  let textMinute;
  let textSecond;

  function countdown (){
    const countDate = new Date('April 15, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second*60;
    const hour =  minute*60;
    const day = hour*24;

    textDay = Math.floor(gap/day);
    textHour = Math.floor((gap % day)/hour);
    textMinute = Math.floor((gap % hour)/minute);
    textSecond = Math.floor((gap % minute)/second);

    // console.log(textSecond)

    // if(textSecond < 10){
    //   textSecond = '0' + textSecond
    // }

    // if(textMinute < 10){
    //   textMinute = '0' + textMinute
    // }

    // if(textHour < 10){
    //   textHour = '0' + textHour
    // }

    // if(textHour < 10){
    //   textHour = '0' + textHour
    // }

    if(textSecond >= 10){
      document.getElementById('second').innerHTML = textSecond;
    } else{
    
      document.getElementById('second').innerHTML = '0' + textSecond;
    }

    if(textMinute >= 10){
      document.querySelectorAll('.minute').innerHTML = textMinute;
    } else{
    
      document.querySelectorAll('.minute').innerHTML = '0' + textMinute;
    }

    if(textHour <= 9){
      document.querySelector('.hour').innerHTML = '0' + textHour;
    } else{
      document.querySelector('.hour').innerHTML = textHour;
    }

    if(textDay >= 10){
      document.querySelector('.day').innerHTML = textDay;
    } else{
      document.querySelector('.day').innerHTML = textDay;
    }

    return { textDay, textHour, textMinute, textSecond }
  }

  // setInterval(countdown, 1000);

  return (
    <div className = 'hyperfund__countdown'>
        <div className = 'hyperfund__countdown-text'>
          <h2>Webinar starts in:</h2>
          <p>{textSecond}</p>
        </div>
        <div className = 'hyperfund__countdown-container'>
            <div className = 'hyperfund__countdown-container_days'>
                <h3 id = 'day'>time</h3>
                <p>Days</p>  
            </div>
            <div className = 'hyperfund__countdown-container_hours'>
                <h3 id = 'hour'>time</h3>
                <p>Hours</p>
            </div>
            <div className = 'hyperfund__countdown-container_minute'>
                <h3 className = 'minute'>time</h3>
                <p>Minutes</p>
            </div>
            <div className = 'hyperfund__countdown-container_secs'>
                <h3 id= 'second'>time</h3>
                <p>Seconds</p>
            </div>
        </div>
    </div>
  )
}

export default Countdown
