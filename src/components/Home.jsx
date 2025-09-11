import React from 'react'
import About from './About'
import Education from './Education'
import Techskills from './Techskill'
import RecentWork from './RecentWork'
import Footer from './Footer'





const home = () => {
  return (
    <>
    <div className='py-28 bg-gray-950 -z-30'>
        <About/>
        

    </div>
        <Education/>
        <Techskills/>
        <RecentWork/>
        <Footer/>
    </>




  )
}

export default home