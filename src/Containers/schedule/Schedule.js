import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { Countdown, RegisterNow } from '../../Components'

import './schedule.css'

const schedule  = [
  {
    time: '11:00 AM',
    title: 'Introduction',
    description: ''
  },
  {
    time: '11:20 AM',
    title: 'Topic One',
    description: 'Add a short description to summarize the first topic of your webinar'
  },
  {
    time: '13:30 PM',
    title: 'Topic Two',
    description: 'Add a short description to summarize the second topic of your webinar'
  },
  {
    time: '14:30 PM ',
    title: 'Short Break',
    description: ''
  },
  {
    time: '15:00 PM',
    title: 'Q & A',
    description: 'Add a short description to summarize the third topic of your webinar'
  },
  {
    time: '15:30 PM',
    title: 'Webinar Ends',
    description: ''
  }
]

const Schedule = () => {
  useEffect(()=> {
      Aos.init({duration: 500})
  },[])
  return (
    <div className = 'hyperfund__schedule section__padding'>
        <div className = 'hyperfund__schedule-container' id = 'schedule'>
            <div className = 'hyperfund__schedule-container_left'>
                <div className = 'hyperfund_schedule-container_left-title'>
                    <h2>Webinar Schedule</h2>
                </div>
                <div className = 'hyperfund__schedule-container_left-description'>
                    <div className = 'hyperfund__schedule-container_left-description_short'>
                        <p>Add a short description to summarize your webinar's schedule</p>
                    </div>
                    <div className = 'hyperfund__schedule-container_left-description_long'>
                        <p>Provide an overview of the webinar's structure so participants gain an in-depth understanding of your event</p>
                    </div>
                </div>
                <div className = 'hyperfund__schedule-container_left-cta'>
                    <RegisterNow />
                </div>
                <div className = 'hyperfund__schedule-container_left-countdown'>
                    <Countdown date = 'April 15, 2022 00:00:00'/>
                </div>
            </div>
            <div className = 'hyperfund__schedule-container_right'>
                <div className = 'hyperfund_schedule-container_right-schedule'>
                    {
                      schedule.map((agenda, index) => (
                        <div className = 'hyperfund_schedule-container_right-schedule_agenda'>

                            <div className = 'hyperfund_schedule-container_right-schedule_agenda-left'>
                                <div className = 'hyperfund_schedule-container_right-schedule_agenda-left_time' data-aos = 'fade' data-aos-delay = {`${200*index}`} data-aos-once= 'true' data-aos-offset = '-200'>
                                    <p>{agenda.time}</p>
                                </div>

                                { index < schedule.length -1
                                    ? <div className = 'hyperfund_schedule-container_right-schedule_agenda-left_bar' data-aos = 'fade' data-aos-delay = {`${300*index-1}`} data-aos-once= 'true'>

                                      </div>
                                    : <div></div>
                                }
                            </div>

                            <div className = 'hyperfund_schedule-container_right-schedule_agenda-right'>
                                <div className = 'hyperfund_schedule-container_right-schedule_agenda-right_title' data-aos = 'fade' data-aos-delay = {`${200*index}`} data-aos-once= 'true' data-aos-offset = '-200'>
                                    <h3>{agenda.title}</h3>
                                </div>
                                <div className = 'hyperfund_schedule-container_right-schedule_agenda-right_description' data-aos = 'fade-left' data-aos-delay = {`${200*index-1}`} data-aos-once= 'true' >
                                    <p>{agenda?.description}</p>
                                </div>
                            </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule
