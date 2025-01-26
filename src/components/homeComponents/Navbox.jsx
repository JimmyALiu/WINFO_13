import React from 'react'


export default function Navbox(props) {
    const { children, setPageIndex, index } = props
    return (
        <div className='bgOrange rounded-lg w-12 h-12 mx-auto p-1'>
            <button onClick={() => setPageIndex(index) }>
                {children}
            </button>
        </div>
    )
}
