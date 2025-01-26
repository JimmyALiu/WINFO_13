import React from 'react'
import Header from './Header'
import UWmap from '../imgs/UWmap.png'
import redellipse from '../imgs/Ellipse 8.png'
import whiteellipse from '../imgs/Ellipse 9.png'

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
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 pl-6">
                                        <h2>Lia Mar-Lundeen</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 pl-6">
                                        <h2>Izzy Saccone</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 pl-6">
                                        <h2>Gabriela Pletosu</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1"></div>
                                    <div className="m-1.5 pl-6">
                                        <h2>Jimmy Liu</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-3 pb-7'>
                                <h3 className='pb-6'>Location:</h3>
                                <div className='px-8'>
                                    <div className='pb-3'>
                                        <input type="checkbox" id="location1" name="location1" value="Odegaard"/>
                                        <label className='pl-4' for="location">Odegaard</label><br />
                                    </div>
                                    <div className='pb-3'>
                                        <input type="checkbox" id="loc2" name="location2" value="Suzzallo" />
                                        <label className='pl-4' for="location2">Suzzallo</label><br />
                                    </div>
                                    <div className='pb-3'>
                                        <input type="checkbox" id="location3" name="location3" value="Population Health" />
                                        <label className='pl-4' for="location3">Population Health</label><br />
                                    </div> 
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="bg-[#f3e9fc] col-span-1">
                        {/* <button>
                            <img src={whiteellipse} />
                        </button> */}
                        <img className='my-3 ml-3 mr-2 h-[735px]' src={UWmap} />
                    </div>
                </div>

            </div>



        </div>
    )
}
