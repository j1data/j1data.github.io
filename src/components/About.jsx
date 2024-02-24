import React from 'react'
import ProfilePic from '../assets/ProfPictureBlue.png';
import {FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-24'>
        <div className='pt-40'></div>
        <div className='mx-auto px-8 pb-9 max-w-[1000px]  bg-[#0a192f] text-gray-300 shadow-md shadow-[#040c16]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline  border-b-4 border-gray-300'>
                                Who am I?
                            </p>
                </div>
            
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='mx-auto'>
                        <img src={ProfilePic} alt="Image of Justin" style={{width: '300px'}} />
                    </div>
                    <div>
                        <div>
                            <p className='text-xl'>I'm a highly motivated recent graduate, holding a Bachelor of Science in Aerospace Engineering. 
                            Throughout my academic journey, I've showcased my leadership abilities on both small and large teams. 
                            I'm a continuous learner, always seeking to expand my knowledge, and I bring a diverse engineering background with proficiency in CAD, programming, and microprocessors to the table.
                            My track record speaks for itself—I'm consistently recognized as a top performer and known for being a self-starter, ready to take on any challenge that comes my way.

                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:hidden grid max-w-[500px] w-full  gap-8 px-4 py-10'>
                    <div className='justify-between items-center flex text-gray-300'>
                        <a
                            href="https://www.linkedin.com/in/jpullman"
                            target="_blank">
                            <FaLinkedin size={75}/>
                        </a>
                        <a  
                            href="https://github.com/jedisonpullman"
                            target="_blank">
                            <FaGithub size={75}/>
                        </a>
                        <a  
                            href="mailto:jedisonpullman@gmail.com"
                            >
                            <HiOutlineMail size={75}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About