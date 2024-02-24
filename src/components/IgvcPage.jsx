import React from 'react'
import HeroImage from '../assets/ARCRobot1.png'
import Comp1 from '../assets/ARCRobotDriveMotor.png'
import Comp2 from '../assets/ARCRobotPowerSystem.png'

const IgvcPage = () => {
  return (
    <div name='igvc' className='w-full h-full bg-[#0a192f]'>
        
        {/* Container */}
        <div className='grid max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
            <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Intelligent Ground Vehicle Competition Robot</p>
            </div>
            <div className='pb-8 text-center'>
                <p className='text-2xl pt-4 '>A robot designed for low cost, ease of manufacturing, and upgradability.</p>
            </div>

            <div className='justify-start pb-8'>
                <img src={HeroImage} alt="HeroImage" style={{width: '100%'}} />
            </div>

            <div className='text-center'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Objective</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>
                    The objective of this project was to design a robot that satified the requirements for the Intelligent Ground Vehicle Competition (IGVC). 
                    The robot was required to be low cost, easy to manufacture, and use off the shelf parts. 
                    It needed to be able to carry the required payload, and have space for the electronics and sensors needed for the competition.
                </p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Solution</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>
                The solution involved a robot constructed with t-slot extrusion for the frame, complemented by off-the-shelf sprockets, chain, and motors. 
                The decision to use pneumatic tires was strategic, offering the flexibility to adjust the contact surface with the ground. 
                This design feature facilitated enhanced traction when the tires were slightly deflated, 
                while fully inflated tires provided reduced traction for smoother turning. 
                Notably, components highlighted in red were designed for 3D printing, keeping costs low and facilitating replacement as needed. 
                To optimize stability, the payload and batteries were positioned close to the ground and centralized within the robot to maintain a low center of gravity. 
                Additionally, a polycarbonate board served as a mounting platform for all electronics and sensors, ensuring efficient organization and integration.
                </p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Components Overview</p>
            </div>

            <div className=''>
                <img src={Comp2} alt="Power System" style={{width: '100%'}}  class="center"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Drive System</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    The drive system is made up of sprocket, steel shafts, #35 chain, and 8 in pneumatic tires.
                    The drive motor powers two #35 sprockets chained through and idler to the sprocket attached to the tire shaft.
                    The drive system is geared to provide a top speed of 5 miles per hour as required by the competition rules.
                </p>
            </div>
        
            <div className='pb-24'></div>
        </div>
    </div>
  )
}

export default IgvcPage