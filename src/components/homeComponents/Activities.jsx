import React from 'react'
import ActivitiyBox from './ActivitiyBox'

export default function Activities() {
    const classes = ['BIOL 180', 'CHEM 142']

    return (
        <div className='grid grid-rows-2 max-w-60'>
            <div>
                <h4 className='font-bold text-2xl p-10 k2d font-bold'>Active Now</h4>
                <div className='bgBlue h-16 p-2 rounded-[20px] grid grid-cols-[max-content_4fr]'>
                    <div className='dotBlack'></div>
                    <div className='px-2'>
                        <h5 className='font-bold text-[20px]'>Izzy Saccone</h5>
                        <p className='text-[10px]'><span className='font-bold'>Studying</span> in Odegaard</p>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-2'>
                {classes.map((item, index) => {
                    return <ActivitiyBox key={index} text={item} />
                })}
            </div>
        </div>
    )
}
