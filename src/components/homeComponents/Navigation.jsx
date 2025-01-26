import React from 'react'
import Navbox from './Navbox'
import home from '../../assets/Home.svg'
import map from '../../assets/Map.svg'
import calendar from '../../assets/Calendar.svg'
import message from '../../assets/Message.svg'

export default function Navigation(props) {
    const { setPageIndex } = props

    return (
        <div className='flex flex-col rounded-r-lg bg-white border-gray w-20 min-h-screen items-start gap-2 py-3'>
            <Navbox setPageIndex={setPageIndex} index={0}><img src={home} alt='home' /></Navbox>
            <Navbox setPageIndex={setPageIndex} index={1}><img src={map} alt='map' /></Navbox>
            <Navbox setPageIndex={setPageIndex} index={2}><img src={calendar} alt='calendar' /></Navbox>
            <Navbox setPageIndex={setPageIndex} index={3}><img src={message} alt='message' /></Navbox>
            <hr className='min-w-15 my-5 mx-auto bg-gray-200 border-1 dark:bg-gray-700' />
        </div>
    )
}
