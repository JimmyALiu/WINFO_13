import React from 'react'

export default function Header(props) {
    const { title, subtitle } = props

    return (
        <div>
            <div>
                <h1 className='font-bold'>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <hr />
        </div>
    )
}
