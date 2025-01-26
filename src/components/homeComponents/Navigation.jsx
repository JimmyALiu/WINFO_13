import React from 'react'
import Navbox from './Navbox'
import home from '../../assets/Home.svg'
import map from '../../assets/Map.svg'
import calendar from '../../assets/Calendar.svg'
import message from '../../assets/Message.svg'

export default function Navigation(props) {
    const { setPageIndex, pageIndex } = props

    const navButtons = [home, map, calendar, message]
    const classButtons = ['BIOL 180', 'CHEM 142', 'ENGL 186']

    return (
        <div className='flex flex-col rounded-r-lg border-gray w-20 min-h-screen items-start gap-2 py-3'>
            {navButtons.map((item, index) => {
                return <Navbox key={index} setPageIndex={setPageIndex} pageIndex={pageIndex} index={index}><img src={item} /></Navbox>
            })}
            <hr className='min-w-15 my-5 mx-auto bg-gray-200 border-1 dark:bg-gray-700' />
            {classButtons.map((item, index) => {
                return <Navbox key={index} setPageIndex={setPageIndex} index={0}><p className='text-center text-[13px] leading-tight white'>{item}</p></Navbox>
            })}
        </div>
    )
}
