import React from 'react'
import TempPic from '../assets/protector.jpg';
import AnsysLogo from '../assets/AnsysLogo.png';
import GDnTLogo from '../assets/GDnTLogo.png';
import CLogo from '../assets/CLogo.png';
import CplusLogo from '../assets/CplusLogo.png';
import PythonLogo from '../assets/PythonLogo.png';
import MatlabLogo from '../assets/MatlabLogo.png';
import ArduinoLogo from '../assets/ArduinoLogo.png';
import RaspberrypiLogo from '../assets/RaspberrypiLogo.png';
import TDPrintLogo from '../assets/3DPrintLogo.png';
import SolidworksLogo from '../assets/SolidWorksLogo.png';
import InventorLogo from '../assets/InventorLogo.png';
import Cncmill from '../assets/CncMill.png';
import Designprocess from '../assets/DesignProcess.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 '>
        <div>
          <p className='text-5xl border-gray-300'>CV</p>
        </div>
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-4 rounded-lg pb-8 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
          <div>
            <p className='text-3xl border-gray-300'>General Information</p>
          </div>
          <div className='max-w-[300px] flex pt-5 justify-between'>
            <p className='text-2xl font-bold border-gray-300'>Full Name</p>
            <p className='pt-1.5 border-gray-300 align-bottom'>Justin Pullman</p>
          </div>
          <div className='max-w-[386px] flex pt-5 justify-between'>
            <p className='text-2xl font-bold border-gray-300'>Email</p>
            <p className='pt-1 border-gray-300 align-bottom'>jedisonpullman@gmail.com</p>
          </div>
        </div>
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-8 rounded-lg  text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
          <div>
            <p className='text-3xl border-gray-300 pb-8'>Education</p>
          </div>
          <div className='flex pt-5'>
            <div className='bg-[#176BEE] max-w-[65px] h-9 pr-1 rounded-lg'>
              <p className='pl-1 text-2xl font-bold'>2023</p>
            </div>
            <div className='text-left pl-32 pb-8'>
              <p className='text-2xl font-bold'>Bachelor of Science in Aerospace Engineering</p>
              <p className='text-lg '>Iowa State University</p>
            </div>
          </div>
        </div>
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-8 pb-8 rounded-lg  text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
          <div>
            <p className='text-3xl border-gray-300 pb-8'>Experience</p>
          </div>
          <div className='flex pt-5 justify-between'>
            <div className='bg-[#176BEE] max-w-[65px] h-9 pr-1 rounded-lg'>
              <p className='pl-1 text-2xl font-bold'>2019</p>
            </div>
            <div className='text-left pl-32 '>
              <p className='text-2xl font-bold pr-[280px]'>Robotics Coach - Peoria Academy</p>
                <p className='text-xl text-left pl-10 pb-1'>• Instructed students in various engineering disciplines to teach the design process and fostered communication through hands-on activities</p>
                <p className='text-xl text-left pl-10 pb-1'>• Motivated problem-solving by recognizing and rewarding innovative thinking to garner successful contrubtuions from students</p>
                <p className='text-xl text-left pl-10 pb-4'>• Encouraged critical thinking by posing open-ended questions</p>
            </div>
          </div>

          <hr className=' pd-4 mx-40 w-[700px]' />

          <div className='flex pt-5 justify-between'>
            <div className='bg-[#176BEE] max-w-[65px] h-9 pr-1 rounded-lg'>
              <p className='pl-1 text-2xl font-bold'>2018</p>
            </div>

            <div className='text-left pl-32'>
              <p className='text-2xl font-bold'>Mechatronics Internship - Caterpillar</p>
                <p className='text-xl text-left pl-10 pb-1'>• Assisted in debugging engine control modules using custom software</p>
                <p className='text-xl text-left pl-10 pb-1'>• Utilized MATLAB and Simulink to perform hardware in the loop test configurations</p>
                <p className='text-xl text-left pl-10 pb-1'>• Gained insight into engine model development by collaborating with industry engineers</p>
                <p className='text-xl text-left pl-10'>• Demonstrated attention to detail by compiling GPS data from diverse sources and formats</p>
            </div>
          </div>
        </div>
        
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-8 pb-8 rounded-lg  text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
          <div>
            <p className='text-3xl border-gray-300 pb-8'>Leadership and Activities</p>
          </div>

          <div className='text-left pl-10 '>
            <p className='text-2xl font-bold pr-[280px]'>Deign Team Leader - Senior Design Project</p>
            <p className='text-xl text-left pl-10 pb-1'>• Led a 4-person team in the iterative design of 3 small unmanned aerial vehicles.</p>
            <p className='text-xl text-left pl-10 pb-1'>• Distilled final product features and trade studies into technical level documentation</p>
            <p className='text-xl text-left pl-10 pb-1'>• Demonstrated attention to detail through identifying potential complications</p>
            <p className='text-xl text-left pl-10 pb-4'>• Presented technical material to potential clients</p>
          </div>

          <hr className='pd-4 mx-auto max-w-[800px]' />

          <div className='text-left pl-10 pt-5'>
            <p className='text-2xl font-bold'>Design Lead - Autonomous Robotics Club (ARC)</p>
            <p className='text-xl text-left pl-10 pb-1'>• Designed a robot using CAD to compete in the Intelligent Ground Vehicle Competition</p>
            <p className='text-xl text-left pl-10 pb-1'>• Developed a virtual robot using Gazebo and ROS2 (Robot Operating System)</p>
            <p className='text-xl text-left pl-10 pb-4'>• Conducted design reviews, created a bill of materials, and planned task breakdowns</p>
          </div>

          <hr className='pd-4 mx-auto max-w-[800px]' />

          <div className='text-left pl-10 pt-5'>
            <p className='text-2xl font-bold'>Lab Manager, Mechanical Lead, Team Leader - FIRST Robotics Team</p>
            <p className='text-xl text-left pl-10 pb-1'>• Led the design and fabrication of a new 3D printable drive system</p>
            <p className='text-xl text-left pl-10 pb-1'>• Led a 30 person team in the design and fabrication of a 150 lb robot including system test, automation, and robotics field applications</p>
            <p className='text-xl text-left pl-10 pb-1'>• Facilitated effective communication between departments</p>
            <p className='text-xl text-left pl-10 pb-1'>• Conducted weekly design reviews and planned task breakdown</p>
            <p className='text-xl text-left pl-10 pb-4'>• Utilized 3D printing, CNC Mills, and various other fabrication tools</p>
          </div>
        </div>

        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-8 pb-8 rounded-lg  text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
          <div>
            <p className='text-3xl border-gray-300 pb-8'>Skills</p>
          </div>
          <div>
            <p className='text-2xl border-gray-300 text-center'>CAD</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={SolidworksLogo} alt="TempImage" />
              <p className='my-4'>SolidWorks</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={InventorLogo} alt="TempImage" />
              <p className='my-4'>Autodesk Inventor</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={AnsysLogo} alt="TempImage" />
              <p className='my-4'>Ansys</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-36 mx-auto' src={GDnTLogo} alt="TempImage" />
              <p className='my-4'>GD&T</p>
            </div>
          </div>

          <div>
            <p className='text-2xl border-gray-300 text-center'>Electrical and Software</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-[70px] mx-auto' src={CLogo} alt="TempImage" />
              <p className='my-4'>C</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-[70px] mx-auto' src={CplusLogo} alt="TempImage" />
              <p className='my-4'>C++</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={PythonLogo} alt="TempImage" />
              <p className='my-4'>Python</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-36 mx-auto' src={MatlabLogo} alt="TempImage" />
              <p className='my-4'>MATLAB</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={ArduinoLogo} alt="TempImage" />
              <p className='my-4'>Arduino</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-16 mx-auto' src={RaspberrypiLogo} alt="TempImage" />
              <p className='my-4'>Raspberry Pi</p>
            </div>
          </div>

          <div>
            <p className='text-2xl border-gray-300 text-center'>Manufacturing</p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={TDPrintLogo} alt="TempImage" />
              <p className='my-4'>3D Printing</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-44 mx-auto' src={Cncmill} alt="TempImage" />
              <p className='my-4'>CNC Mill</p>
            </div>
            <div className='grid shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-28 mx-auto' src={Designprocess} alt="TempImage" />
              <p className='my-4'>Prototyping</p>
            </div>
          </div>
        </div>

        <div className='pb-20'></div>
      </div>
    </div>
  )
}

export default Skills