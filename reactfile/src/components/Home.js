import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-site bg-no-repeat bg-cover'>

    {/* Container */}
    <div className='max-w-[900px] mx-auto px-5 flex flex-col justify-center h-full'>
       <h1 className='text-[#bbbefe] font-semibold text-4xl'>Hello! I'm </h1>
       <h2 className='text-[#bbbefe] font-semibold text-4xl'>Karl Eduard</h2>
       <div>
       <p className='text-[#cb98ed] font-medium text-xl max-w-[400px]'>A front end web developer that has a experience developing
        a web using </p>
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
            className='text-[#cb98ed] font-medium text-xl '
            repeat={Infinity}
      />
      </div>

       <div>
        <button className='hidden'>
          View Work <HiArrowNarrowRight />
        </button>
       </div>
    </div>
    
    <div className='curve'>
      <p>
        asafjagsf a
      </p>
    </div>

    </div>
  )
}

export default Home