import React from 'react'

export default function Header(props) {
    const { title, style_h1, style_h2, subtitle } = props

    return (
    
        <div className='pt-2 pb-7'>
            <h1 className={'font-bold text-[70px] max-h-22 uppercase k2d orange ' + style_h1}>{title}</h1>
            <h2 className={'text-[22px] text-center mt-0 min-h-auto leading-none k2d purple ' + style_h2}>{subtitle}</h2>
        </div>
    )
}
