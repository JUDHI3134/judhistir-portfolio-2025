import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isdarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isdarkMode ? assets.logo_dark :assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
           <Image src={isdarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
           judhistirbehera532@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>©️ 2025 jbcodes. All Rights Reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/JUDHI3134">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/judhistir-behera-07999025a">LinkedIn</a></li>
            <li><a target='_blank' href="https://github.com/JUDHI3134">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
