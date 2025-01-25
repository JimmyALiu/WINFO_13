import React from 'react'
import Activities from './homeComponents/Activities'
import Header from './homeComponents/Header'
import Courses from './homeComponents/Courses'
import Search from './homeComponents/Search'
import HomeButton from './homeComponents/HomeButton'

export default function Home() {
    return (
        <div className='grid grid-cols-2 px-10'>
            <div>
                <Header title='Study App' subtitle='Bringing Students Together' style_h1='text-center transform -translate-x-20 mx-10' style_h2='transform translate-x-10' />
                <Search />
                <HomeButton text='' />
                <HomeButton />
            </div>
            <div>
                <Activities />
            </div>
        </div>
    )
}
