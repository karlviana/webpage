import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TypeAnimation} from 'react-type-animation'
import FancyText from '@carefully-coded/react-text-gradient';
import {FaLinkedin,FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#EDF2FB]'>

    <div className='max-w-[1000px] mx-auto flex flex-col justify-center min-h-screen'>
       <h2 className='text-[#1B1811] font-bold text-2xl sm:text-4xl mx-3 p-2 mt-12'>Hello! I'm</h2>
       <FancyText
       gradient={{ from: '#65afff', to: '#6B00D7', type: 'radial' }}
       animateTo={{ from: '#d0A4FF', to: '#A230ED' }}
       animateDuration={1500}
       >
       <h1 className='font-extrabold text-2xl sm:text-5xl mx-3 p-2'>Karl Eduard</h1>
      </FancyText>
      {/* <div>
        <TypeAnimation
          sequence={['Hacker', 500, 'Hackerist', 500, 'Hackerman' ,500]}
            speed={50}
            deletionSpeed={70}
            className='text-[#cb98ed] font-medium text-xl sm:text-3xl m-3 p-2'
            repeat={Infinity}
      /> 
      </div>*/}
      <p className='text-[#1B1811] font-light text-sm sm:text-lg m-3 p-2 max-w-[400px] mt-9'>Led by curiosity and enthusiasm, I aim to become competent in web development.</p>

       <div>
        <button className='hidden'>
          View Work <HiArrowNarrowRight />
        </button>
       </div>

       <div className='flex justify-end mt-20 m-3 p-2'>
       <span className='flex flex-row gap-2 '>
       <a href='mailto:karleduardviana@gmail.com'>
             <HiOutlineMail size={35}  color='#9997F4' className='border-2 rounded-full border-[#CCB5FB] p-1 hover:border-[#8993ff]'/>
        </a>
        <a href='https://www.linkedin.com/in/karl-eduard-viana-555076244/'>
             <FaLinkedin size={35} color='#9997F4' className='border-2 rounded-full border-[#CCB5FB] p-1 hover:border-[#8993ff]'/>
        </a>
        <a href='https://web.facebook.com/karl.viana'>
             <FaFacebook size={35} color='#9997F4' className='border-2 rounded-full border-[#CCB5FB] p-1 hover:border-[#8993ff]'/>
        </a>
      </span>
    </div>
    </div>
    </div>
  )
}

export default Home