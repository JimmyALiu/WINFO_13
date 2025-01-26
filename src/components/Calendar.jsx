import React from 'react'
import Header from './homeComponents/Header'
import Search from './homeComponents/Search'
import schedule from '../assets/ScheduleCalendar.png'

export default function Calendar() {
    return (
        <div>
            <Header title='Sync Schedules' subtitle='' style_h1='text-center transform -translate-x-20 mx-10' />
            <Search />
            <img src={schedule} className='flex flex-items justify-center px-20 py-10 max-h-200' />
        </div>
    )
}
