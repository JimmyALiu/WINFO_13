import React from 'react'

export default function Header(props) {
    const { title, subtitle } = props

    return (
    
        <div className='text-center mx-4'>
            <h1 className='font-bold text-[70px] max-h-22 mx-10 uppercase transform -translate-x-10'>{title}</h1>
            <h2 className='font-thin text-[22px] text-center mt-0 min-h-auto leading-none transform translate-x-10'>{subtitle}</h2>
        </div>
    )
}
