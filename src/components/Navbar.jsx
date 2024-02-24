import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo1 from '../assets/FunkyPullmanNoBack.png';
import Logo2 from '../assets/RegPullmanNoBack.png';
import {Link, animateScroll as scroll} from 'react-scroll';
import PDFViewer from 'tailwind-pdf-viewer';
import "tailwind-pdf-viewer/style.css";
import pdf from './Resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md shadow-[#040c16]'>
        <div className='text-3xl'>
          <a href='/'>
            Justin Pullman
          </a>
        </div>

        {/* Menu */}
        <ul className='hidden sm:flex text-2xl'>
          <li> 
            <a href='/'>
              Portfolio
            </a>
          </li>
          <li>
          <a href='/skills'>
              CV
            </a>
          </li>
          <li>
          <a href='/about'>
              About
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='sm:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
              <a onClick={handleClick} href='/work'>
              Portfolio
            </a></li>
          <li className='py-6 text-4xl'>
          <a onClick={handleClick} href='/skills'>
              CV
            </a></li>
          <li className='py-6 text-4xl'>
          <a onClick={handleClick} href='/about'>
              About
            </a></li>
        </ul>

        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a  className='flex justify-between items-center w-full text-gray-300' 
              href="https://www.linkedin.com/in/jpullman"
              target="_blank">
                 Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a  className='flex justify-between items-center w-full text-gray-300' 
              href="https://github.com/jedisonpullman"
              target="_blank">
                 Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a  className='flex justify-between items-center w-full text-gray-300' 
              href="mailto:jedisonpullman@gmail.com"
              target="_blank">
                 Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[80px] md:w-[130px] lg:w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a  className='flex justify-between items-center w-full text-gray-300' 
              href='/resume'
              target="_blank"
              rel='noopener noreferrer'>
                 Resume  <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar