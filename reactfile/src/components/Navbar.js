import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
      const [nav, setNav] = useState (false)
      const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 font-bold mt-2 bg-slate-50'>
        <div className='font'>
             <h5 className='text-4xl mx-4 lowercase text-[#5710ff]'>krl</h5>
        </div>

            <ul className='hidden md:flex font-semibold mx-7'>
                <li className='hover:text-[#cb98ed] text-lg text-[#591ad9]'>
                <Link to="home" smooth={true} duration={500}>   
                 Home
                </Link></li>
                <li className='hover:text-[#cb98ed] text-lg text-[#591ad9]'>
                <Link to="about" smooth={true} duration={500}>
                 About
                </Link></li>
                <li className='hover:text-[#cb98ed] text-lg text-[#591ad9]'>
                <Link to="skills" smooth={true} duration={500}>
                 Skills
                </Link></li>
                <li className='hover:text-[#cb98ed] text-lg text-[#591ad9]'>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link></li>
            </ul>
        
        {/* burger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile view menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen mx-5 flex flex-col justify-center items-center'}> 
            <ul>
                <li className='py-6 text-lg hover:text-[#CCDCFD] text-[#e3daff]'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 text-lg hover:text-[#CCDCFD] text-[#e3daff]'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='py-6 text-lg hover:text-[#CCDCFD] text-[#e3daff]'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='py-6 text-lg hover:text-[#CCDCFD] text-[#e3daff]'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
        </div>

        {/* social icons */}
        <div className=' fixed flex-col top-[35%] left-0'>
         <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a href='https://www.linkedin.com/in/karl-eduard-viana-555076244/' className='flex justify-between items-center w-full text-gray-300'>
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292f]'>
                <a href='https://github.com/karlviana' className='flex justify-between items-center w-full text-gray-300'>
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500'>
                <a href='karlviana@gmail.com' className='flex justify-between items-center w-full text-gray-300'>
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a0aadf]'>
                <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
         </ul>
        </div>

    </div>
  )
}

export default Navbar