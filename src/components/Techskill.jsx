import React from 'react'
import { FaCss3, FaJava, FaNode, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdHtml } from 'react-icons/md';

const Techskills = () => {
    const skillsData = [
        {
            title:"Languages",
            skills:[
                {
                    name:"JavaScript",
                    level:<span className="text-yellow-600">Advance</span>,
                    icon: <IoLogoJavascript className="text-yellow-300" />,
                },
                {
                    name:"HTML",
                    level:<span className="text-yellow-600"> Advance</span>,
                    icon: <MdHtml className="text-yellow-800" />,
                },
                {
                    name:"CSS",
                    level:<span className="text-green-600"> Advance</span>,
                    icon: <FaCss3  className="text-green-800" />,
                },    
                {
                    name:"React",
                    level:<span className="text-pink-600"> Advance</span>,
                    icon: <FaReact className="text-pink-800" />,
                },
            ]
        },
        {
            title:"Backend",
            skills:[
                {
                    name:"JavaScript",
                    level:<span className="text-yellow-600"> Advance</span>,
                    icon: <IoLogoJavascript className="text-yellow-300" />,
                },
                {
                    name:"Java",
                    level:<span className="text-yellow-600"> Advance</span>,
                    icon: <FaJava className="text-yellow-300" />,
                },
                {
                    name:"Node",
                    level:<span className="text-yellow-600"> Advance</span>,
                    icon: <FaNode className="text-yellow-300" />,
                },
                {
                    name:"Python",
                    level:<span className="text-yellow-600"> Advance</span>,
                    icon: <FaPython className="text-yellow-300" />,
                },
            ],
        },
    ];

    return (
        <div className="my-12 p-6" id="Techskill">
            <h1 className="text-center font-bold text-4xl mb-8">Techskills</h1>
            <div className="flex flex-wrap items-center justify-center gap-8">
                {skillsData.map((item) => (
                    <div
                        key={item.title}
                        className="bg-white rounded-lg shadow-xl p-6 w-80 min-h-60"
                    >
                        <h2 className="font-bold text-2xl mb-4 text-center">{item.title}</h2>
                        <ul className="space-y-3">
                            {item.skills.map((element) => (
                                <li
                                    key={element.name}
                                    className="flex items-center justify-between p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200 ease-in hover:scale-[1.02]"
                                >
                                    <div className="text-xl">{element.icon}</div>
                                    <div className="font-medium">{element.name}</div>
                                    <div className="text-sm">{element.level}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Techskills;