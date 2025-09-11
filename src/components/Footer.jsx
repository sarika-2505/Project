import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
     <>
    <div className='sm:flex item-center sm:justify-evenly bg-gray-800 text-white p-5'>
        <div>
            <h3 className='text-green-500 font-bold text-3xl text-center py-2'>{" "} Sarika Yadav</h3>
            <p className='text-center'>Full Stack Developer</p>

        </div>
    <div>
    <h3 className='text-yellow-600 font-bold text-xl text-center py-2'>Links</h3>
    <ul className='text-center'>
        <li><a href="/">Home</a></li>
        <li><a href="#Project">Projects</a></li>
        <li><a href="/#About">About</a></li>
        <li><a href="/#Education">Education</a></li>
        <li><a href="/#Techskill">Techskill</a></li>
        <li><a href="/#RecentWork">RecentWork</a></li>
    </ul>
    </div>
    <div>
        <h2 className='text-4xl font-bold text-yellow-400 text-center'>Follow Me</h2>
        <ul className='flex flex-col justify-center items-center text-center'>
            <li>
                <a href="https://www.linkedin.com">
                <FaLinkedin className="text-red-500 text-xl  text-center justify-center hover:text-green-500" />
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                <FaGithub className="text-white text-xl hover:text-orange-500"/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com">
                <FaInstagramSquare className="text-white text-xl hover:text-pink-500"/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com">
                <FaFacebook className="text-white text-xl hover:text-blue-500" />
                </a>
            </li>
        </ul>
    </div>
    </div>
</>
  )
}

export default Footer