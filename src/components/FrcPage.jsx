import React from 'react'
import HeroImage from '../assets/FRCBotNoBack.png'
import HeroVid from '../assets/SparroMDOrbit.19.mp4'
import FRC2016Bot from '../assets/FRC2016Bot.png'
import FRC2018Bot from '../assets/FRC2018Bot.png'

const FrcPage = () => {
  return (
    <div name='frc' className='w-full h-full bg-[#0a192f]'>
        
        {/* Container */}
        <div className='grid max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
            <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>The FIRST Robotics Competition (FRC)</p>
            </div>
            <div className='pb-8 text-center'>
                <p className='text-2xl pt-4 '>6 weeks to build a 150lb robot to compete on a field with 5 other robots.</p>
            </div>

            <div className=' pb-8'>
                <img src={HeroImage} alt="HeroImage" style={{width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
            </div>

            <div className='text-center'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>What is the FRC?</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>Under strict rules, limited time and resources, teams are challenged to raise funds, 
                design a team "brand," hone teamwork skills, and build and program industrial-size robots to play a difficult field game against 
                like-minded competitors. Teams have 6 weeks to conceptualize, prototype, and fabricate a 150 lb robot to acomplish a number of difficult
                tasks whilst competing with other robots in a timed event. At the end of the 6 week time span, the robots compete on basketball court sized fields
                with 5 other robots, completing tasks, defending objectives, and scoring points.</p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>My Role in FIRST</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4'>During my four-year involvement in the FIRST Robotics Competition (FRC), 
                I assumed various leadership roles and played an active role in the conceptualization, prototyping, 
                and ultimate fabrication of our team's 150-pound robots. Throughout my tenure with the FRC team, I acquired proficiency in a range of tools, 
                including but not limited to the Mill, CNC Mill, Chop Saw, Band Saws, and various handheld tools. 
                Additionally, I developed hands-on experience with gearboxes through the process of rebuilding them, 
                gained insight into drive trains by actively participating in their design, 
                and gleaned valuable lessons in modularity and the importance of maintenance capabilities.</p>
                <p className='text-xl pt-4 pb-8'>In addition to my participation in the FRC program, I engaged in the FIRST Lego League, 
                initially as a student and later as a coach. Serving as a coach provided me with an opportunity to contribute to the 
                community that had been an integral part of my life for many years. In this role, I instructed students ranging from 
                4th to 8th grade in fundamental engineering principles and emphasized the importance of teamwork in achieving shared objectives. 
                It was a rewarding experience to mentor young minds and foster their collaborative spirit towards common goals.</p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Gallary</p>
            </div>
            <div className='pt-8'>
                <img src={FRC2016Bot} alt="HeroImage" style={{width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}  class="center"/>
            </div>
            <div className='text-center pb-8'>
                <p className='text-xl inline text-gray-300 border-gray-300'>2016 Robot</p>
            </div>

            <hr className='pd-4 max-w-[800px] mx-14' />

            <div className='pt-8'>
                <img src={FRC2018Bot} alt="HeroImage" style={{width: '35%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}  class="center"/>
            </div>
            <div className='text-center pb-8'>
                <p className='text-xl inline text-gray-300 border-gray-300'>2018 Robot</p>
            </div>

            <hr className='pd-4 max-w-[800px] mx-14' />

            <div className='pt-8'>
                <img src={HeroImage} alt="HeroImage" style={{width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}  class="center"/>
            </div>
            <div className='text-center pb-8'>
                <p className='text-xl inline text-gray-300 border-gray-300'>2019 Robot</p>
            </div>

            
        
            <div className='pb-24'></div>
        </div>
    </div>
  )
}

export default FrcPage