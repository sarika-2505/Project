import React from 'react'

export const Education = () => {
    const education = [
      {
        id: 1,
        name: "Bachelor of Computer Applications",
        university: "Babu Banarshidas university",
        year: "2024",
        description: "I Have done Bachelor of Computer Applications (BCA) along with an in-depth Full Stack Web Development (MERN) program. This course covers a wide range of technologies, from HTML, CSS, JavaScript to advanced frameworks like React.js, Node.js, Express.js, and MongoDB. Through hands-on projects and real-world applications, I have built expertise in frontend and backend development, API integration, and database management.Additionally, I am currently working as a MERN Stack Developer  where I am gaining real-world experience in developing scalable and efficient web applications. This role allows me to apply my knowledge in a professional setting, further enhancing my problem-solving skills and expertise in modern web technologies.",
        duration: "2024-2027",
      },
      {
        id: 2,
        name: "Master of Computer Application ",
        university: "Babu Banarashidas university",
        year: "2027",
        description: "Currently pursuing a Master of Computer Applications (MCA) along with an in-depth Full Stack Web Development (MERN) program. This course covers a wide range of technologies, from HTML, CSS, JavaScript to advanced frameworks like React.js, Node.js, Express.js, and MongoDB. Through hands-on projects and real-world applications, I have built expertise in frontend and backend development, API integration, and database management.Additionally, I am currently working as a MERN Stack Developer at HindTech IT Solutions, where I am gaining real-world experience in developing scalable and efficient web applications. This role allows me to apply my knowledge in a professional setting, further enhancing my problem-solving skills and expertise in modern web technologies.",
        duration: "2027-2029",
      },
    ];
    return (
      <>
        <div className=" flex flex-col items-center justify-center  w-2/3 mx-auto" id="Education">
          <h1 className="my-3 text-3xl font-bold text-center text-gray-700">
            Qualifications
          </h1>
  
<div className="relative w-full">
  <div className="absolute -left-3 top-10 h-full w-[2px] bg-gray-500"></div>
{education?.map((item) => (
            <div className="my-4">
              <div className="relative w-[10px] h-[10px] rounded-full top-5 bg-gray-500 -left-4 hover:bg-amber-600"></div>
            
             
              <button className=" py-1 px-5 text-lg bg-gray-400 border-0 rounded-xl font-medium text-gray-50 hover:bg-amber-600 hover:scale-105">
                {item.year}
              </button>
              <h2 className=" my-1 text-xl font-bold text-start text-gray-700">
                {item.name}
              </h2>
              <p className=" py-1">{item.description}</p>
              <div className=" text-gray-500 font-medium">
                <span className="px-3">{item.university} </span>
                <span className="px-1">{item.duration}</span>
              </div>
            </div>
          ))}
</div>       
        </div>
      </>
    );
  };
  

export default Education