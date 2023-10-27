import React from 'react'
import Bootstrap from '../assets/bootstraplogo.png';
import HTML from '../assets/htmllogo.png';
import CSS from '../assets/csslogo.png';
import JavaScript from '../assets/javascript.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#EDF2FB]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full items-start sm:items-center h-screen'>
            <div>
                <p className='text-4xl font-bold text-[#8DB8E9]'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-5'>
                <div className='shadow-md my-3 sm:my-4 mx-2 text-[#e3daff] shadow-[#a96df7] hover:scale-110 duration-400'>
                  <img className='w-20 mx-auto mt-5' src={HTML} alt="HTML logo"/>
                  <p className='my-5'>HTMl</p>
                </div>
                <div className='shadow-md my-3 sm:my-4 mx-2 text-[#e3daff] shadow-[#a96df7] hover:scale-110 duration-400'>
                  <img className='w-20 mx-auto mt-5' src={CSS} alt="HTML logo"/>
                  <p className='my-5'>CSS</p>
                </div>
                <div className='shadow-md my-3 sm:my-4 mx-2 text-[#e3daff] shadow-[#a96df7] hover:scale-110 duration-400'>
                  <img className='w-20 mx-auto mt-5' src={Bootstrap} alt="HTML logo"/>
                  <p className='my-5'>Bootstrap</p>
                </div>
                <div className='shadow-lg my-3 sm:my-4 mx-2 text-[#e3daff] shadow-[#a96df7] hover:scale-110 duration-400'>
                  <img className='w-20 mx-auto mt-5' src={JavaScript} alt="HTML logo"/>
                  <p className='my-5'>JavaScript</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills