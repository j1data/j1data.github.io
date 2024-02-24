import React from 'react'
import HeroImage from '../assets/robotgazebo.png'
import HeroVid from '../assets/SparroMDOrbit.19.mp4'

const GazeboPage = () => {
  return (
    <div name='joystick' className='w-full h-full bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
            <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Robot Simulation - Gazebo</p>
            </div>
            <div className='pb-8 text-center'>
                <p className='text-2xl pt-4 '>Using Robot Operating System and Gazebo to simulate the IGVC robot for coding purposes.</p>
            </div>

            <div style={{width: '60%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=' pb-8'>
                <img src={HeroImage} alt="HeroImage" />
            </div>

            <div className='text-center'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Objective</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>The purpose of simulating the IGVC robot in Gazebo was to develop a virtual model 
                that could serve as a testing platform for autonomous code prior to the physical robot's construction. 
                This simulation aimed to closely replicate the interaction of the robot with the real world, 
                necessitating accurate representation of factors such as friction, weight, and steering inputs. 
                Moreover, the simulated robot had to be controllable using the same methods intended for the physical counterpart, 
                requiring the creation of nodes for each system, including motors, encoders, cameras, and others. 
                This approach ensured that testing in the virtual environment closely mirrored real-world conditions, 
                facilitating more accurate and efficient development of autonomous capabilities. </p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Solution</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>The model I developed was based on a CAD model imported from Autodesk Inventor, ensuring accurate proportions. 
                I incorporated friction values for the tires and inertia for the robot's body to enhance realism. 
                Additionally, I programmed ROS nodes for controlling each motor and the camera system. 
                Upon achieving controllability of the robot, I encapsulated the requisite files and development environment within a Docker container. 
                This streamlined accessibility, enabling every team member, regardless of their operating system, 
                to seamlessly access the virtual robot for testing their code.</p>
            </div>

            <div className='pb-24'></div>
        </div>
    </div>
  )
}

export default GazeboPage