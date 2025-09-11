import React from "react";

const  Education = () => {
    const education = [
        {
            id:1,
            name:"Senior Secondary School",
            School:"Woodland Academy",
            Year: "2022",

        },

        {
            id:2,
            name: "Bachelor of Computer Applications",
            university :"Babu Banarshi Das University",
            Year:"2027",
            

        },
    ];

return (
    <>
    <div className=" flex flex-col items-center justify-center w-2/3 mx-auto" id="Education">
    <h1 className="my-3 text-3xl font-bold text-center text-gray-700">
    Qualifications
    </h1>

 <div className="relative w-full" >
    <div className="absolute-left-3 top-10 h-full w-[2px] bg-gray -500"></div>
    {education?.map((item) =>(
        <div className="my-4">
        <div className="relative w-[10px] h-[10px] rounded-full top-5 bg-gray-500 -left-4 hover:bg-amber-600"></div>

        <button className="py-1 px-5 text bg-gray-400 border-xl font-medium text-gray-50 hover:bg-amber-600 hover:scale-105">
        {item.year}
        </button>

        <h2 className="my-1 text-xl font-bold text-start text-gray-700">{item.year}</h2>

        <p className='py-1'>{item.description}</p>
        <div className='text-gray-500 font-medium'>
        <span className='px-3'>{item.university}</span>
        <span className='px-1'>{item.description}</span></div>

    </div>
    
    ))}
    </div>
    </div>
    


</>
);
};

export default Education  