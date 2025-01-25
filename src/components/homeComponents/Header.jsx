import React from 'react'

export default function Header(props) {
    const { title, subtitle } = props

    return (
        <div>
            <div>
                <h1 className='text-5xl'>{title}</h1>
                <h2 className='pt-2, pb-2'>{'>'} {subtitle}</h2>
            </div>
            <hr />
        </div>
    )
}
