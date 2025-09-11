import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaJava, FaLinkedin, FaNode, FaPython, FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import profilePic from '../assets/photo1.jpg'; 
const socialMedia = [
    {
        id: 1,
        icon: <FaFacebook className="text-white text-3xl hover:text-blue-500" />,
        url: "https://www.facebook.com",
    },
    {
        id:2,
        icon: <FaGithub className="text-white text-3xl hover:text-orange-500"/>,
        url: "https://github.com/",
    },
    {
        id:3,
        icon:<FaLinkedin className="text-white text-3xl hover:text-red-500" />,
        url: "https://www.linkedin.com",
    },
{
    id:4,
    icon:<FaInstagramSquare className="text-white text-3xl hover:text-pink-500"/>,
    url: "https://www.instagram.com",
},
];
const skills = [
    {
      id:1,
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-2xl" />,
    },
    {
      id:2,
        name: "react",
        icon: <FaReact className="text-green-500 text-2xl" />,
    },
    {
      id:3,
        name: "node",
        icon: <FaNode className="text-yellow-500 text-2xl" />,
    },
    {id:4,
        name: "java",
        icon:<FaJava className="text-pink-500 text-2xl"/>,

    },
    { id:5,
        name: "python",
        icon:<FaPython className="text-blue-500 text-2xl" />,

    },
];


export const About = () => {
  const style = {
    FontFace: "Times New Roman",
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-center mx-auto" id="About">
        <div>
          <motion.div
            className="flex z-10 items-center justify-center mx-auto hover:scale-110"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 10, x: 10, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={profilePic}
              alt="profile picture"
              className="w-48 h-48 z-10 rounded-full"
            />
          </motion.div>  
          <motion.div
            className=" py-2"
            initial={{ opacity: 0, x: -10, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9 }}
            style={style}
          >

          <h1 className="font-bold text-4xl:sm text-green-600 text-center" >Hii I am Sarika Yadav</h1>
          <h2 className="text-white text-center font-medium text-xl:sm  "> Analytical, Self-motivated, Confident</h2>
          <h2 className="text-yellow-600 text-center text-2xl:sm font-semibold">MERN | Full-Stack Web Developer </h2>

          </motion.div>
          <motion.div className="flex items-center justify-center gap-2">
            {socialMedia?.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                initial={{ opacity: 0, x:30, y:-10, }} 
                animate={{ opacity: 1, x:0, y:0 }}
                transition={{
                   duration: 0.9 }}
                   className="hover:scale-110">
                    {item.icon}
                   </motion.a>
            ))}
          </motion.div>
          <div className="text-white flex flex-wrap item-center justify-center gap-2 my-3">
            {skills?.map((item) => (
              <div
                key={item.id}
                className="flex item-center justify-center gap-2 bg-gray-700 py-3 px-5 shadow-md shadow-green-300 rounded-2xl hover:scale-110">
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
              </div>))}
          

        </div>
        </div>
      </div>
    </>
 );
};
export default About;
