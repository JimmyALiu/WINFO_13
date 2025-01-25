import React from 'react'
import Activities from './homeComponents/Activities'
import Header from './homeComponents/Header'
import Courses from './homeComponents/Courses'

export default function Home() {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <Header title='Study App' subtitle='     Bringing Students Together' />
                <Courses />

            </div>
            <div>
                <Activities />
            </div>
        </div>
    )
}
