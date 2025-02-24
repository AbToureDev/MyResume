'use client'
import React, {useEffect, useState} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link";
import Footer from "@/components/Footer";
import {useTranslations} from "next-intl";
import { motion } from "framer-motion";
import {cardVariants, card} from "../../animation";
import {experiencesEn, experiencesFr, posts, realisationsFr, realisationsEn} from "../../utils/utils";
import {useLocale} from "use-intl";
interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
}

interface Realizations {
    year: string;
    title: string;
    company: string;
    image:string;
    description: string;
    link:string;
    technologies: string[];
}
const RightSideBar = () => {
    const t = useTranslations<string>();
    const localActive = useLocale();
    const [experiences, setExperiences ] = useState<Experience[]>([]);
    const [realisations, setRealisations ] = useState<Realizations[]>([]);
    const handleDownload = () => {
        const pdfUrl = localActive === 'en' ? "Toure_Aboubacar_Software_engineer.pdf" : "Aboubacar_Touré_ingenieur_logiciel.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        if (localActive === 'en') {
            // specify the filename
            link.download = "/public/Toure_Aboubacar_Software_engineer.pdf";
        }else {
            // specify the filename
            link.download = "/public/Aboubacar_Touré_ingenieur_logiciel.pdf";
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        if (localActive === 'en') {
            setExperiences(experiencesEn);
            setRealisations(realisationsEn)
        }else {
            setExperiences(experiencesFr)
            setRealisations(realisationsFr)
        }
    },[localActive] )
    return (
        <motion.div className='sm:flex sm:flex-col overflow-y-scroll h-full' initial='hidden'
                    animate="show"
                    variants={cardVariants}>
            <section className="p-5" id="abouts">
                <h1 className={'sm:hidden py-2 text-lg'}>
                    {t("page.ABOUT")}
                </h1>
                <motion.div className="flex flex-wrap gap-1" variants={card}>
                    <p>
                        {t("about_me.description1")}
                    </p>
                    <p>
                        {t("about_me.description2")}
                    </p>
                    <p>
                        {t("about_me.description3")}
                    </p>
                </motion.div>
            </section>

            <motion.section className={'flex flex-col gap-6'} id="experience"
                            initial='hidden'
                            animate="show"
                            variants={cardVariants}
            >
                <h1 className={'sm:hidden text-xl'}>Experience</h1>
                {
                    experiences.map((experience, index) => (
                        <div key={index} className="experience group">
                            <div className="w-full sm:flex gap-8">
                                <motion.h3 className="sm:text-start text-nowrap text-xs text-center text-gray" variants={card}>
                                    {experience.year}
                                </motion.h3>
                                <motion.div className="sm:w-[80%]" variants={card}>
                                    <div className={'flex gap-2 items-center group-hover:text-emerald'}><h2
                                        className="font-bold">{experience.title} at {experience.company}</h2>
                                        <AiOutlineArrowRight size={15} className={'-rotate-45'}/>
                                    </div>
                                    <p className={'items-center text-gray'}>{experience.description}</p>
                                    <p className="sm:w-[70%] flex flex-wrap w-full items-center gap-5 py-4">
                                        {experience.technologies.map((tech, index) => (
                                            <span key={index} className="lang">{tech}</span>
                                        ))}
                                    </p>

                                </motion.div>
                            </div>
                        </div>

                    ))
                }
            </motion.section>
            <section>
                <div className={'flex gap-2 items-center font-bold text-lg py-4 cursor-pointer hover:text-emerald'}>
                    <p onClick={handleDownload}>{t("part.View_Full_Resume")}</p>
                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                </div>
            </section>
            <section id="projects">
                <h1 className="sm:hidden p-2 text-xl">Projects</h1>
                {
                    realisations.slice(0, 4).map((realisations, index) => (
                        <div className="experience group" key={index}>
                            <div className="w-full sm:flex gap-8">
                                <img
                                    src={realisations.image}
                                    alt="project image"
                                    className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                                <div className="sm:w-[60%]">
                                    <div className={'flex gap-2 items-center font-bold group-hover:text-emerald'}>
                                        <a href={realisations.link} >{realisations.title}, {realisations.company}</a>
                                        <AiOutlineArrowRight size={15} className={'-rotate-45'}/>
                                    </div>
                                    <p className={'items-center text-gray'}>
                                        {realisations.description}
                                    </p>
                                    <div className="sm:hidden flex w-full items-center gap-7 py-4">
                                    <p className="sm:w-[70%] flex flex-wrap w-full items-center gap-5 py-4">
                                        {realisations.technologies.map((tech, index) => (
                                            <span key={index} className="lang">{tech}</span>
                                        ))}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>

            <section>
                <div className={'flex gap-2 items-center py-4 text-lg font-bold hover:text-emerald'}>
                    <Link href={`/${localActive}/project`} download>{t("part.View_Full_Project_Archive")}</Link>
                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                </div>
            </section>

            <section>
                <h1 className="py-2 text-lg text-emerald font-bold">{t("part.my_posts")}</h1>
                {
                    posts.slice(0, 4).map((post, index) => (
                        <a href={post.link} target='_blank' className="experience group" key={index}>
                            <div className="w-full sm:flex sm:items-center gap-5 group-hover:text-emerald">
                                <img
                                    src={post?.image}
                                    alt="post image"
                                    className=" sm:w-[100px] sm:h-[100px] w-[500px] h-[150px] object-cover"/>
                                <div className="flex items-center">
                                    <div className="flex flex-col">
                                        <h2>{post?.year}</h2>
                                        <p>{post?.title}</p>
                                    </div>
                                    <AiOutlineArrowRight size={25} className={'-rotate-45'}/>
                                </div>

                            </div>
                        </a>
                    ))
                }
            </section>
            <Footer/>
        </motion.div>
    );
};

export default RightSideBar;