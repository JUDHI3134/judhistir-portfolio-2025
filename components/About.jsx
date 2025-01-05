import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='w-full flex flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image1} alt='user' className='w-full rounded-3xl' />
            </div>

            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>Full Stack Web Developer specializing in the MERN stack, experienced in building responsive, high-performance web applications. Skilled in API integration, database management, and user authentication, with a focus on seamless user experiences. Known for delivering scalable solutions and tackling complex challenges with a detail-oriented, client-focused approach. </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <Image className='w-7 mt-3' src={icon} alt='' />
                            <h3 className=' my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I Used</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                    key={index}>
                        <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                    </li>
                ))}
                </ul>

            </div>
        </div>


    </div>
  )
}

export default About
