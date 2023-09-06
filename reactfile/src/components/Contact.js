import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#051960] flex justify-center items-center'>
        <form action='' className='flex flex-col max-w-[600px] w-full mx-5'>
          <div className='text-left sm:text-center'>
            <p className='text-4xl text-teal-300 inline font-bold border-b-4 border-[#6b66ff]'>Contact</p>
            <p className='text-xl text-[#e3daff] my-5'>Submit the form below or email me at karleduardviana@gmail.com</p>
          </div>
          <input type='text' className='my-2 p-2 bg-[#ccdcfe] rounded-md' placeholder='Name' name='name' />
          <input type='email' className='my-2 p-2 bg-[#ccdcfe] rounded-md ' placeholder='Email' name='email'/>
          <textarea className='my-2 p-2 bg-[#ccdcfe] rounded-md' rows={4} placeholder='Messsage' name='message'></textarea>
          <div className='flex justify-center'>
          <button className='btn btn-secondary btn-sm btn-wide text-lg '>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Contact