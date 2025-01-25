import React from 'react'
import Navbox from './Navbox'
import home from '../../assets/Home.svg'
import map from '../../assets/Map.svg'

export default function Navigation() {

    return (
        <div>
            <div className='flex flex-col rounded-r-lg bg-gray-300 max-w-20 min-h-screen items-start gap-2 py-3'>
                <Navbox><img src={home} alt='home' /></Navbox>
                <Navbox><img src={map} alt='home' /></Navbox>
            </div>

            <div>
                
            </div>
        </div>
    )
}
