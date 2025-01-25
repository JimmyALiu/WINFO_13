import React from 'react'

export default function Header(props) {
    const { title, subtitle } = props

    return (
    
        <div>
            <h1 className='font-bold text-[70px] max-h-22 text-center mx-10 uppercase '>{title}</h1>
            <h2 className='font-thin text-[22px] text-center mt-0 min-h-auto leading-none'>{subtitle}</h2>
        </div>
    )
}
