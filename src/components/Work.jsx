import React from 'react'
import WorkImg from '../assets/protector.jpg'
import ArcRobotImg from '../assets/ARCRobot1.png'
import Mothership from '../assets/MD_ISO_Render3.png'
import SwerveBot from '../assets/SwerveBotNoBack.png'
import FRCBot from '../assets/FRCBotNoBack.png'
import ArcGazebo from '../assets/robotgazebo.png'
import Joystick from '../assets/JoystickNoBack.png'

const Work = () => {
  return (
    <div name='work' className='w-full h-full pt-32 pb-12 text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Projects</p>
            </div>

            {/* Container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {/* Grid Item */}
                <div style={{ backgroundImage: `url(${Mothership})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='pt-12 text-div bg-[rgba(0,0,0,0.3)] w-full h-full rounded-md'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Small UAV System [Senior Design]
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/sparro">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See More</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${ArcRobotImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='pt-12 text-div bg-[rgba(0,0,0,0.3)] w-full h-full rounded-md'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                                IGVC Robot
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/igvc">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See More</button>
                                </a>
                            </div>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${ArcGazebo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                   
                    {/* Hover Effects */}
                    <div className='pt-12 text-div bg-[rgba(0,0,0,0.7)] w-full h-full rounded-md'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Robot Simulation [Gazebo]
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/gazebo">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See More</button>
                                </a>
                            </div>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${SwerveBot})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                   
                    {/* Hover Effects */}
                    <div className='pt-12 text-div bg-[rgba(0,0,0,0.3)] w-full h-full rounded-md'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                3D Printed Swerve Drive
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/swerve1">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See More</button>
                                </a>
                            </div>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${FRCBot})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                   
                    {/* Hover Effects */}
                    <div className='pt-12 text-div bg-[rgba(0,0,0,0.3)] w-full h-full rounded-md'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                FIRST Robotics Competition
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/frc">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See More</button>
                                </a>
                            </div>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${Joystick})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                   
                    {/* Hover Effects */}
                    <div className='pt-12 text-div bg-[rgba(0,0,0,0.6)] w-full h-full rounded-md'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Universal Controller
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/joystick">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See More</button>
                                </a>
                            </div>
                    </div>

                </div>
                <div></div>
                
                
            </div>
        </div>
    </div>
)
}

export default Work