import React from 'react'
import Header from './Header'
import UWmap from '../imgs/UWmap.png'

export default function NearMe() {
    return (
        <div className='m-4'>
            {/* <div className='h-30'>
                <h1>
                    Friends Near Me
                </h1>
            </div> */}

            <Header title='Friends Near Me' subtitle='Find fellow students studying near you!'></Header>
            

            <div className='grid grid-cols-[max-content_10fr] gap-x-4'> 
                <div>
                    sidebar
                </div>
                <div>
                    <img className='m-4' src={UWmap}/>
                    {/* <figure class="max-w-lg"> */}
                        {/* <img className="h-auto max-w-full rounded-lg" src=".../imgs/UWmap.png" alt="image description" />
                            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption> */}
                    {/* </figure> */}
                </div>
            </div>

        </div>
    )
}
