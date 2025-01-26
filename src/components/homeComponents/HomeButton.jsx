import React from 'react'

export default function HomeButton(props) {
    const { text, style } = props

    return (
        <div className={style}>{text}</div>
    )
}
