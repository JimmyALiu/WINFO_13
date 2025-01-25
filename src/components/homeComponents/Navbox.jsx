import React from 'react'


export default function Navbox(props) {
    const { children } = props
    return (
        <div className='bg-orange-500 rounded-lg w-12 h-12 mx-auto p-1'>{children}</div>
    )
}
