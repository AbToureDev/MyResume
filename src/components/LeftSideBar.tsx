import React from 'react';
import Link from "next/link";
import {FaSquareGithub} from "react-icons/fa6";
import {FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import navLink from "../../utils/utils";

const LeftSideBar = () => {

    return (
        <div className=' relative sm:w-1/2 flex flex-col justify-between h-full'>
            <section id='about'>
                <h2 className={'w-full sm:text-[80px] text-[27px] font-bold'}>
                    Toure Aboubacar
                </h2>

                <h2 className="font-bold py-2">Senior FullStack Engineer Backend Specialist.</h2>

                <p className="font-bold text-gray">
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>

                <section>
                    <h2 className="py-2 text-xl">SKILLS</h2>
                    <h2>Backend(main):</h2>
                    <p className="text-gray">Node.js, NestJS, Express.js, springBoot, PostgreSQL, MongoDB, MySQL</p>

                    <h2>Frontend (secondary):</h2>
                    <p className="text-gray">HTML, CSS, JavaScript, React, nextjs, Intégration des API dans des
                        applications
                        frontend</p>

                    <h2>Tools & DevOps:</h2>
                    <p className="text-gray">Docker, Kubernetes, Git, CI/CD (Jenkins, GitHub Actions)</p>
                </section>
            </section>

            <section className="flex flex-col gap-5">
                    {
                        navLink?.map((navLink) => (
                            <div className="hidden sm:flex sm:flex-col" key={navLink.label}>
                                <div className="flex items-center">
                                    <span  className={'w-9 border mr-1 hover:w-14 '}> </span>
                                    <Link href={`#${navLink.url}`}> {navLink.label}</Link>
                                </div>
                            </div>

                                ))
                                }
                                <section className={'sm:relative absolute top-0 right-0'}>

                                    <select
                                        id="language"
                                        name="language"
                                        defaultValue="English"
                                        className="mt-2 block w-[100px] sm:w-[200px] text-green rounded-md border-0 py-1.5 pl-3 pr-10 ring-inset bg-transparent ring-gray-300  focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option>French</option>
                                        <option>English</option>
                                    </select>
                                </section>

                            </section>

            <section className={'flex items-center gap-9 justify-start py-5'}>
                <h1 className={'sm:hidden text-xl'}>Contacts</h1>
                <FaSquareGithub size={25} className={'hover:text-green'}/>
                <FaLinkedin size={25} className={'hover:text-green'}/>
                <FaInstagramSquare size={25} className={'hover:text-green'}/>
                <SiGmail size={25} className={'hover:text-green'}/>
            </section>
        </div>
);
};

export default LeftSideBar;