import React from 'react'

export default function ActivitiyBox(props) {
    const { text } = props
    return (
        <div className='m-2 h-8 max-w-25 orange bg-gray-200 rounded-[20px] flex items-center justify-center'><p className='font-semibold'>{text}</p></div>
    )
}
