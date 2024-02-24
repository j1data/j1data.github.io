import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import TempPic from '../assets/protector.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Clint Briley</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>im a description of Clint</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                further description in painful detail lorem est potestos.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TempPic} alt="TempImage" />
            <p className='my-4'>TempSkill</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TempPic} alt="TempImage" />
            <p className='my-4'>TempSkill</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TempPic} alt="TempImage" />
            <p className='my-4'>TempSkill</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TempPic} alt="TempImage" />
            <p className='my-4'>TempSkill</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TempPic} alt="TempImage" />
            <p className='my-4'>TempSkill</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TempPic} alt="TempImage" />
            <p className='my-4'>TempSkill</p>
          </div>
        </div>

    </div>
  )
}

export default Home