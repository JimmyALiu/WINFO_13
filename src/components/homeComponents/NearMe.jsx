import React from 'react'
import Header from './Header'
import UWmap from '../imgs/UWmap.png'
import redellipse from '../imgs/Ellipse 8.png'
import whiteellipse from '../imgs/Ellipse 9.png'

import avatar1 from '../imgs/Cool Kids Avatar.png'
import avatar2 from '../imgs/Cool Kids Avatar2.png'
import avatar3 from '../imgs/Cool Kids Avatar3.png'
import avatar4 from '../imgs/Cool Kids Avatar4.png'


export default function NearMe() {
    return (
        <div className='bg-[#eeeeee]'>
            {/* <div className='h-30'>
                <h1>
                    Friends Near Me
                </h1>
            </div> */}

            <div className='bg-[#ffffff] px-10'>
                <Header className='px-10' title='Friends Near Me' subtitle='> Find fellow classmates or other students studying near you!' style_h2='transform -translate-x-70'></Header>
            </div>

            <div className='px-10 pt-10, h-100%'>

                <div className="grid grid-flow-col gap-3">
                    <div className="col-span-23">
                        <div className='m-4'>
                            <div className='pb-5'>
                                <h3>Active now:</h3>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1">
                                        <img className='pl-1 pt-1 h-[40px]' src={avatar1}/>
                                    </div>
                                    <div className="m-3 pl-4">
                                        <h2>Lia Mar-Lundeen</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1">
                                        <img className='pl-1 pt-1 h-[40px]' src={avatar2}/>
                                    </div>
                                    <div className="m-3 pl-4">
                                        <h2>Izzy Saccone</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1">
                                        <img className='pl-1 pt-1 h-[40px]' src={avatar3}/>
                                    </div>
                                    <div className="m-3 pl-4">
                                        <h2>Gabriela Pletosu</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[max-content_2fr] m-6">
                                    <div className="dot col-span-1">
                                        <img className='pl-1 pt-1 h-[40px]' src={avatar4}/>
                                    </div>
                                    <div className="m-3 pl-4">
                                        <h2>Jimmy Liu</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-1 pb-5'>
                                <h3 className='pb-6'>Location:</h3>
                                <div className='px-11'>
                                    <h2>
                                        <div className='pb-3'>
                                            <input type="checkbox" id="location1" name="location1" value="Odegaard" />
                                            <label className='pl-4' for="location">Odeegard</label><br />
                                        </div>
                                        <div className='pb-3'>
                                            <input type="checkbox" id="location2" name="location2" value="Suzzallo" />
                                            <label className='pl-4' for="location2">Suzzallo</label><br />
                                        </div>
                                        <div className='pb-3'>
                                            <input type="checkbox" id="location3" name="location3" value="Population Health" />
                                            <label className='pl-4' for="location3">Population Health</label><br />
                                        </div>
                                    </h2>
                                </div>

                            </div>

                            <div className='pb-5'>
                                <h3 className='pb-6'>Classes:</h3>
                                <div className='pl-11'>
                                    <h2>
                                        <div className='pb-3'>
                                            <input type="checkbox" id="class1" name="location1" value="cse446" />
                                            <label className='pl-4' for="location">Intro to Machine Learning</label><br />
                                        </div>
                                        <div className='pb-3'>
                                            <input type="checkbox" id="class2" name="class2" value="info200" />
                                            <label className='pl-4' for="class2">Intellectual Foundations of Informatics</label><br />
                                        </div>
                                        <div className='pb-3'>
                                            <input type="checkbox" id="class3" name="class3" value="psych101" />
                                            <label className='pl-4' for="class3">Psychology 101</label><br />
                                        </div>
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
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
