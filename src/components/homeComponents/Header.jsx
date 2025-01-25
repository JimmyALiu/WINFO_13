import React from 'react'

export default function Header(props) {
    const { title, subtitle } = props

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
