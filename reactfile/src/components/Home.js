import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TypeAnimation} from 'react-type-animation'
import './home.css';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-site bg-no-repeat bg-cover'>

    {/* Container */}
    <div className='max-w-[900px] mx-auto px-5 flex flex-col justify-center h-full'>
       <span><h1 className='text-[#bbbefe] font-semibold text-4xl'>Hello! I'm Karl Eduard</h1></span>
       <div>
       <p className='text-[#bbbefe] font-medium text-xl max-w-[450px]'>A web developer that has a experience developing using</p>
        <TypeAnimation
          sequence={[
                'HTML',
                  500,
                'HTML CSS', 
                  500,
                'HTML CSS Bootstrap',
                  500,
                '',
                 500, 
         ]}
            speed={50}
            className='text-[#cb98ed] font-medium text-3xl '
            repeat={Infinity}
      />
      </div>

       <div>
        <button className='hidden'>
          View Work <HiArrowNarrowRight />
        </button>
       </div>
    </div>
  
    </div>
  )
}

export default Home