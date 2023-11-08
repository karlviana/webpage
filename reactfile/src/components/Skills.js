import HtmlLogo from '../assets/htmllogo.png';
import CssLogo from '../assets/csslogo.png';
import JsLogo from '../assets/javascript.png';
import BootstrapLogo from '../assets/bootstraplogo.png';
import ReactLogo from '../assets/reactjslogo.png';
import TailwindLogo from '../assets/tailwindlogo.png';

const Skills = () => {
  return (
    
    <div name='skills' className='w-full min-h-screen bg-[#EDF2FB]'>
          <p className='heading text-3xl sm:text-4xl font-bold text-[#8DB8E9] text-center pt-20'>Skills</p>
          <p className='text-center font-light text-md sm:text-lg my-3'>These are my current tech stack that I have knowledge and some experience</p>
     <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-6 '>
          <div className='shadow-md mx-4 my-3'>
            <img src={HtmlLogo} alt='html logo' className='w-20 mx-auto my-4 hover:animate-spin-slow'/>
            <p className='text-md py-2 font-medium'>HTML</p>
          </div>
          <div className='shadow-md mx-4 my-3'>
            <img src={CssLogo} alt='html logo' className='w-20 mx-auto my-4 hover:animate-spin-slow'/>
            <p className='text-md py-2 font-medium'>CSS</p>
          </div>
          <div className='shadow-md mx-4 my-3'>
            <img src={JsLogo} alt='html logo' className='w-20 mx-auto my-4 hover:animate-spin-slow'/>
            <p className='text-md py-2 font-medium'>Javascript</p>
          </div>
          <div className='shadow-md mx-4 my-3'>
            <img src={BootstrapLogo} alt='html logo' className='w-20 mx-auto my-4 hover:animate-spin-slow'/>
            <p className='text-md py-2 font-medium'>Bootstrap</p>
          </div>
          <div className='shadow-md mx-4 my-3'>
            <img src={ReactLogo} alt='html logo' className='w-20 mx-auto my-4 hover:animate-spin-slow'/>
            <p className='text-md py-2 font-medium'>React JS</p>
          </div>
          <div className='shadow-md mx-4 my-3 mt-10'>
            <img src={TailwindLogo} alt='html logo' className='w-20 mx-auto my-4 hover:animate-spin-slow'/>
            <p className='text-md py-2 font-medium'>Tailwind CSS</p>
          </div>
      </div>

    </div>
  )
}

export default Skills