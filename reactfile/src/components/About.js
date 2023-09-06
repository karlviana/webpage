import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#051960]'>
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                 <p className='text-4xl font-bold inline border-b-4 text-teal-300 border-[#6b66ff] mt-5'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-left text-2xl font-semibold text-[#e3daff]'>Hi my name is Karl Eduard Viana, It's a pleasure to meet you.</p>
                    </div>
                    <div>
                        <p className='text-xl text-[#e3daff]'>
                          I am aspiring web developer with a experience developing using HTML, CSS, and Bootstrap. I want to learn more in web development.
                          This porfolio is made of React JS and Tailwind CSS and still on learning process to further enhance my skill in developing a web. Building a responsive, compatible in any browser  and easily use by the user is the Website I want to achieve. 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About