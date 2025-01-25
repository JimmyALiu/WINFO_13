import React from 'react'
import Header from './Header'
import UWmap from '../imgs/UWmap.png'

export default function NearMe() {
    return (
        <div className='px-10'>
            {/* <div className='h-30'>
                <h1>
                    Friends Near Me
                </h1>
            </div> */}

            <Header title='Friends Near Me' subtitle='> Find fellow classmates or other students studying near you!' style_h2='transform -translate-x-70'></Header>

            <div className='pt-10, h-100%'>

                <div className="grid grid-flow-col gap-3">
                    <div className="bg-[#e7f0fd] col-span-23">
                        <div className='m-4'>
                            <div className='pb-7'>
                                <h3>Active now:</h3>
                                <div className="grid grid-flow-col gap-3 m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 col-span-3">
                                        <h2>Name of Individual</h2>
                                    </div>
                                </div>
                                <div className="grid grid-flow-col gap-3 m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 col-span-3">
                                        <h2>Name of Individual2</h2>
                                    </div>
                                </div>
                                <div className="grid grid-flow-col gap-3 m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 col-span-3">
                                        <h2>Name of Individual3</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-3 pb-7'>
                                <h3>Location:</h3>
                                
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#f3e9fc] col-span-1">
                        <img className='my-3 ml-3 mr-2 h-[735px]' src={UWmap}/>
                    </div>
                </div>
                
            </div>



        </div>
    )
}
