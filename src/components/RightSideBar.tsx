'use client'
import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link";
import Footer from "@/components/Footer";
import {useTranslations} from "next-intl";
import { motion } from "framer-motion";
import {cardVariants, card} from "../../animation";
import {experiences} from "../../utils/utils";
import {useLocale} from "use-intl";

const RightSideBar = () => {
    const t = useTranslations('')
    const localActive = useLocale();
    return (
        <motion.div className='sm:flex sm:flex-col gap-5 overflow-y-scroll h-full' initial='hidden'
                    animate="show"
                    variants={cardVariants}>
            <section className="p-5" id="abouts">
                <h1 className={'sm:hidden py-2 text-xl'}>
                    ABOUT
                </h1>
                <motion.div className="flex flex-wrap gap-4 text-[17px]" variants={card}>
                    <p>
                        {t('about_me.description1')}
                    </p>
                    <p>
                        {t('about_me.description2')}
                    </p>
                    <p>
                        {t('about_me.description3')}
                    </p>
                </motion.div>
            </section>

            <section className={'flex flex-col gap-6'} id="experience">
                <h1 className={'sm:hidden text-xl'}>Experience</h1>
                {
                    experiences.map((experience, index) => (
                        <div key={index} className="experience group">
                            <div className="w-full sm:flex gap-8 ">
                                <h3 className="sm:text-start text-center text-gray">
                                    {experience.year}
                                </h3>
                                <div className="sm:w-[80%] ">
                                    <div className={'flex gap-2 items-center group-hover:text-emerald'}><h2
                                        className="font-bold">{experience.title} at {experience.company}</h2>
                                        <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                                    <p className={'items-center text-gray'}>{experience.description}</p>
                                    <p className="sm:w-[70%] flex flex-wrap w-full items-center gap-5 py-4">
                                        {experience.technologies.map((tech, index) => (
                                            <span key={index} className="lang">{tech}</span>
                                        ))}
                                    </p>

                                </div>
                            </div>
                        </div>

                    ))
                }
            </section>
            <section>
                <div className={'flex gap-2 items-center font-bold'}>
                    <a href="" download>View Full Resume </a>
                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                </div>
            </section>
            <section id="projects">
                <h1 className="sm:hidden p-2 text-xl">Projects</h1>
                <div className="experience group">
                    <div className="w-full sm:flex gap-8">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
                            alt="project image"
                            className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center font-bold group-hover:text-emerald'}><h2>Senior Backend Enginee,
                                Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center text-gray'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                            </p>
                            <div className="sm:hidden flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <img
                            src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
                            alt="project image"
                            className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center font-bold'}><h2>Senior Backend Enginee,
                                Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                            </p>
                            <div className="sm:hidden flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="w-full sm:flex gap-8">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhY3R8ZW58MHx8MHx8fDA%3D"
                            alt="project image"
                            className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                        <div className="sm:w-[60%]">
                            <div className={'flex gap-2 items-center font-bold'}><h2>Senior Backend Enginee,
                                Codingart</h2>
                                <AiOutlineArrowRight size={15} className={'-rotate-45'}/></div>
                            <p className={'items-center'}>
                                voluptatum. Aliquam aliquid aut deserunt dolore dolorem, doloribus eius et ex facilis
                                impedit ipsa officiis perspiciatis placeat quibusdam quis quisquam quos reiciendis rem
                                temporibus tenetur unde vero voluptatum. Dignissimos dolorem modi possimus quae
                                repudiandae!
                            </p>
                            <div className="sm:hidden flex w-full items-center gap-7 py-4 overflow-x-scroll">
                                <h1 className="lang">javascript</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                                <h1 className="lang">Nestjs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={'flex gap-2 items-center font-bold'}>
                    <Link href={`/${localActive}/project`} download>View Full Project Archive </Link>
                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                </div>
            </section>

            <section>
                <h1>lAST SEction</h1>
            </section>
            <Footer/>
        </motion.div>
    );
};

export default RightSideBar;