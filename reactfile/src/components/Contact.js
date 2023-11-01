

function Contact() {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center bg-[#EDF2FB]' aria-autocomplete="none">
      <div className='flex flex-col justify-center items-center h-full sm:h-screen'>
        <p className='text-4xl mb-7 font-bold text-[#8DB8E9]'>Contact</p>
        <form action='' className='flex flex-col max-w-[500px] w-screen px-6'>
          <input type='text' className='my-2 p-2  bg-[#ccdcfe] bg-opacity-25 outline outline-offset-1 outline-[#ccdcfe] rounded-md' placeholder='Name' name='name' />
          <input type='email' className='my-2 p-2  bg-[#ccdcfe] bg-opacity-25 outline outline-offset-1 outline-[#ccdcfe] rounded-md ' placeholder='Email' name='email'/>
          <textarea className='my-2 p-2  bg-[#ccdcfe] bg-opacity-25 outline outline-offset-1 outline-[#ccdcfe] rounded-md' rows={4} placeholder='Messsage' name='message'></textarea>
          <div className='flex justify-end'>
          <button className='text-sm sm:text-lg  text-[#ffffff] font-medium rounded-lg bg-[#9997F4] w-[20%] py-2'>Submit</button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Contact