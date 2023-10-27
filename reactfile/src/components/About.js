import React from 'react'
import Profile from '../assets/bgimage.png';
const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#EDF2FB]'>
        <div className='flex flex-col justify-center items-center w-full h-full sm:h-screen'>
                <div className='mt-20'>
                 <p className='text-3xl sm:text-4xl font-bold text-[#8DB8E9]'>About</p>
                </div>
            <div className='max-w-[1000px] w-full px-4 my-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='flex items-center justify-center'>
                       <img src={Profile} alt='Pic img' className='rounded-xl w-[300px]'/>
                    </div>
                    <div>
                        <p className='text-lg sm:text-xl font-light text-[#1b1811]'>
                          Hi, I am an aspiring front end developer that willing to expand my knowledge, 
                          enhance my current skills, acquire experience and add new skill set.  
                          I got my Bachelor’s degree in Computer Science at University of Caloocan City.
                        </p>
                        <br></br>
                        <p className='text-lg sm:text-xl font-light text-[#1b1811]'>
                          In the long run I want to became a full stack developer to achieve 
                          that I need to learn back end programming language by taking a certification and training.
                          The learning I got in those will be my foundation to fully develop a web application not only the interface
                          but with back end function. 
                          I also want to explore more on technology field like cyber security 
                          and game development, after I achieve my goal.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About