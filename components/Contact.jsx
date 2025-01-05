import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08bcc634-6f59-4bfd-8773-de5fdabeb8d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Me</h4>
    <h2 className='text-center text-5xl font-Ovo'>Get In Touch</h2>

    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'd Love to here from you! If you have any question comments, od feedback, Please use the form below.</p>

    <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" name='name' placeholder='Enter your Name' required/>
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" name='email' placeholder='Enter your Email' required/>
        </div>
        <textarea className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' rows={6} name='message' placeholder='Enter your message' required></textarea>

        <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type="submit">Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' /> </button>

        <p className='mt-4'>{result}</p>
    </form>

    </div>
  )
}

export default Contact