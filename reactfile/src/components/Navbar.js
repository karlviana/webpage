import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import myLogo from '../assets/mylogo.png';

const Navbar = () => {
      const [nav, setNav] = useState (false)
      const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 font-bold bg-[#EDF2FB]'>
        
             <div className='text-4xl mt-2 cursor-pointer'>
               <Link to="home" smooth={true} duration={500}>
                <img src={myLogo} className='w-[55px] md:w-[75px] p-1'/>
                </Link>
             </div>

            <ul className='hidden md:flex font-semibold mx-7'>
                <li className='nav hover:text-[#cb98ed] text-xl text-[#8DB8E9]'>
                <Link to="home" smooth={true} duration={500}>   
                 Home
                </Link></li>
                <li className='nav hover:text-[#cb98ed] text-xl text-[#8DB8E9]'>
                <Link to="about" smooth={true} duration={500}>
                 About
                </Link></li>
                <li className='nav hover:text-[#cb98ed] text-xl text-[#8DB8E9]'>
                <Link to="skills" smooth={true} duration={500}>
                 Skills 
                </Link></li>
              {/* <li className='nav hover:text-[#cb98ed] text-xl text-[#8DB8E9]'>
                <Link to="work" smooth={true} duration={500}>
                 Work
                </Link></li> */}
                <li className='nav hover:text-[#cb98ed] text-xl text-[#8DB8E9]'>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link></li>
            </ul>
        
        {/* burger */}
        <div onClick={handleClick} className='md:hidden z-40'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile view menu */}
        <div className={!nav ? 'hidden' : 'bg-[#EDF2FB] absolute top-0 left-0 w-full h-screen mx-5 flex flex-col justify-center items-center'}> 
            <ul>
                <li className='py-6 text-lg hover:text-[#cb98ed] text-[#8db8e9]'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 text-lg hover:text-[#cb98ed] text-[#8db8e9]'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='py-6 text-lg hover:text-[#cb98ed] text-[#8db8e9]'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
               {/*<li className='py-6 text-lg hover:text-[#cb98ed] text-[#8db8e9]'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                 Work
                </Link>
                </li>*/}
                <li className='py-6 text-lg hover:text-[#cb98ed] text-[#8db8e9]'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
        </div>
            
    </div>
  )
}

export default Navbar