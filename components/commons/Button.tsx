import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

const Button = () => {
  return (
    <div>
        <div className='md:flex justify-center items-center gap-2  '>
        <Link href="" className='flex justify-center items-center gap-2 py-3 px-6 bg-gray-600 text-white rounded-lg md:text-base text-md md:mt-0 mt-2 ' >
            <FaGithub/>
            Open In Github
        </Link>
        <Link href="https://vercel.com/" className='flex justify-center items-center gap-2 py-3 px-6 bg-blue-600 text-white rounded-lg md:text-base text-md  md:mt-0 mt-2' >
            < IoLogoVercel/>
            Deploy To Vercel
        </Link>
        <Link href="https://www.netlify.com/" className='flex justify-center items-center gap-2 py-3 px-6 bg-teal-400 text-white rounded-lg md:text-base text-md  md:mt-0 mt-2 ' >
            <SiNetlify/>
            Deploy To Netlify
        </Link>
        </div>
    </div>
  )
}

export default Button