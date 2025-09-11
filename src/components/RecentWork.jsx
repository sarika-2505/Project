import React from 'react'
const projects= [
    {
        id:1,
        name:"Personal Portfolio",
        description: "I'll create a sleek,responsive portfolio website using HTML,CSS,JavaScript, and Tailwind CSS.",
        technologies:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",

        ],
    },
      {
        id:2,
        name:"E-commerce website",
        description: "I'll create a e-commerce website using HTML,CSS,JavaScript, and Tailwind CSS where we apply CRUD open.",
        technologies:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",
            "Nodejs",
            "Expressjs",
            "MongoDB",

        ],
    },
        {
        id:3,
        name:"Social Media App",
        description: "I'll create social media app using HTML,CSS,JavaScript, and Tailwind CSS where user can their.",
        technologies:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",
            "Nodejs",
            "Expressjs",
            "MongoDB",

        ],
    },
       {
        id:4,
        name:"AI image generator",
        description: "I'll create social media app using HTML,CSS,JavaScript, and Tailwind CSS where user can their.",
        technologies:[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "tailwindcss",
            "Framer-motion",
            "Nodejs",
            "Expressjs",
            "MongoDB",
            "OpenAI",
            "imagepig API",
            "use imagepig API key",
            "cloudinary image storage",

        ],
    },



]

const RecentWork = () => {
  return (
    <>
    <div className='my-10 ' id='RecentWork'>
    <h1 className='text-center font-bold text-4xl text-gray-700 my-3'>Recent Work</h1>
    <ul className='flex flex-wrap item-center justify-center gap-5 mt-5'>
        {projects.length > 0 &&
        projects.map((project)=>{
            return(
                <li key={project.id} className='w-1/3 shadow-2xl shadow-gray-500 p-5 rounded-md hover:scale-105 trnsition-all ease-'>
                    <h2 className='text-xl font-bold py-3 text-gray-800'>{project.name}</h2>
                      <p>{project.description}</p>
                        <ul className='flex flex-wrap item-center justify-center gap-5 mt-5'>{project.technologies.length>0 &&
                        project.technologies.map((technologies,index) => {
                            return(
                                <li
                                key={index}
                                    className="py-2 px-5 shadow-gray-400 rounded-md bg-gray-100">
                                        {technologies}
                                </li>
                            );
                        } )}
                    </ul>
                    <a href="https://github.com/" className='py-3 px-5 rounded-lg bg-blue-500 cursor-pointer flex item-center justify-center text-white font-medium'>SourceCode</a>
            </li>
            );
        })}

    
    </ul>
    </div>
    </>
  )
}

export default RecentWork