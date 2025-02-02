import React from 'react'


export default function Navbox(props) {
    const { children, setPageIndex, pageIndex, index } = props
    return (
        <div className={'transition delay-50 rounded-lg w-12 h-12 mx-auto' + (pageIndex === index ? ' bgOrangeSelect' : ' bgOrange')}>
            <button onClick={() => setPageIndex(index)} className='p-2 transition delay-50 duration-300 hover:-translate-y-1 '>
                {children}
            </button>
        </div>
    )
}
