import React from 'react'
import Bootstrap from '../assets/bootstraplogo.png';
import HTML from '../assets/htmllogo.png';
import CSS from '../assets/csslogo.png';
import Github from '../assets/githublogo.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#051960]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full items-start sm:items-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-teal-300 border-[#6b66ff]'>Skills</p>
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
                  <img className='w-20 mx-auto mt-5' src={Github} alt="HTML logo"/>
                  <p className='my-5'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills