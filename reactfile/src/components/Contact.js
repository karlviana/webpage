import { FaInbox } from "react-icons/fa";

function Contact() {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center bg-[#EDF2FB]' aria-autocomplete="none">
      <div className='flex flex-col justify-center items-center h-full sm:h-screen'>
        <p className='text-4xl font-bold text-[#8DB8E9]'>Get In Touch</p>
        <FaInbox className='my-6' size={60} color='9997F4' />
        <h3 className='font-medium text-md sm:text-xl text-center'>You can email me at karleduardviana@gmail.com and let's work together</h3>
    </div>
    </div>
  )
}

export default Contact