import React from 'react'

export default function Header(props) {
    const { title, style_h1, style_h2, subtitle } = props

    return (
    
        <div>
            <h1 className={'font-bold text-[70px] max-h-22 mx-10 uppercase ' + style_h1}>{title}</h1>
            <h2 className={'font-thin text-[22px] text-center mt-0 min-h-auto leading-none ' + style_h2}>{subtitle}</h2>
        </div>
    )
}
