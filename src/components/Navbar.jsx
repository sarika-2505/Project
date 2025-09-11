import React from 'react'
import Resume from "../assets/img cv.pdf/";


const Navbar = () => {
  return (
    <>
      <header className="z-50">
        <nav className="flex items-center justify-between py-5 px-3 fixed w-full bg-gray-800">
          <div>
            
            <h1 className="text-white text-xl font-bold tracking-wide">
              Personal Portfolio
            </h1>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-5 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                
                <a href={Resume} download>
                  Resume
                </a>
              </li>
              <li>
                <a
                  href={`mailto:sarikayadav@gmail.com?subject=${encodeURIComponent(
                    "subject"
                  )}&body=${encodeURIComponent("body")}`}
                  className="cursor-pointer"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );

}

export default Navbar