'use client'
import React, {useState} from 'react';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import {useLocale} from "use-intl";
import Contacts from "@/components/Contacts";
import { motion } from "framer-motion";
import {cardVariants, card} from "../../animation";
import {navLink} from "../../utils/utils";
import Language from "@/components/Language";


const LeftSideBar = () => {
    const [activeLink, setActiveLink] = useState("ABOUT");
    const localActive = useLocale();
    const t = useTranslations<string>();
    const handleClick = (label:string) => {
        setActiveLink(label);
    };
    return (
        <motion.div className=' relative shrink-0 sm:w-1/2 sm:flex sm:flex-col 2xl:gap-12 gap-4 h-full'
                    initial='hidden'
                    animate="show"
                    variants={cardVariants}
        >
            <motion.section id='about' variants={card}>
                <h2 className={'w-full sm:text-[45px] text-[20px] font-bold'}>
                    Toure Aboubacar
                </h2>

                <h2 className="font-bold max-sm:py-4 ">{t('page.title')}</h2>

                <p className="font-bold text-gray py-1">
                    {t('page.desc')}
                </p>

                <motion.section className='flex flex-col' variants={card}>
                    <h2 className="py-1 text-xl">SKILLS</h2>
                    <h2>Backend:</h2>
                    <p className="text-gray">Node.js, NestJS, Express.js, springBoot, PostgreSQL, MongoDB, MySQL</p>
                    <h2>Frontend:</h2>
                    <p className="text-gray">HTML, CSS, JavaScript, React, nextjs, Intégration des API dans des
                        applications frontend.
                    </p>
                    <h2>Tools & DevOps:</h2>
                    <p className="text-gray">Docker, Kubernetes, Git, CI/CD (GitHub Actions)</p>
                </motion.section>
            </motion.section>

            <section className="flex flex-col w-[150px] gap-3 py-2">
                {navLink?.map((nav) => (
                    <motion.div className="hidden sm:flex group sm:flex-col" key={nav.label} variants={card}>
                        <div
                            className={`text-gray flex items-center ${
                                activeLink === nav.label ? "text-white" : ""
                            } group-hover:text-white`}
                        >
                            <span
                                className={`w-7 border mr-1 ${
                                    activeLink === nav.label ? "w-14" : ""
                                } group-hover:w-14`}></span>
                            <Link
                                href={`#${nav.url}`}
                                className="font-semibold"
                                onClick={() => handleClick(nav.label)}
                            >
                                {t(`page.${nav.label}`)}
                            </Link>
                        </div>
                    </motion.div>
                ))}
                <Language localActive={localActive}/>
            </section>
            <Contacts/>
        </motion.div>
    );
};

export default LeftSideBar;