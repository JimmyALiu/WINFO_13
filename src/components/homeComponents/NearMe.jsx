import React from 'react'
import Header from './Header'
import UWmap from '../imgs/UWmap.png'

export default function NearMe() {
    return (
        <div className='px-10 pt-10'>
            {/* <div className='h-30'>
                <h1>
                    Friends Near Me
                </h1>
            </div> */}

            <Header title='Friends Near Me' subtitle='Find fellow classmates or other students studying near you!'></Header>

            <div className='pt-10, h-100%'>

                <div className="grid grid-flow-col gap-3">
                    <div className="bg-blue-100 col-span-23">
                        <div className='m-4'>
                            <h1>Active now</h1>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="bg-red-100 col-span-1">
                        <img className='m-4 h-[750px]' src={UWmap}/>
                    </div>
                </div>
                
            </div>



        </div>
    )
}
