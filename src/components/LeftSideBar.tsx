'use client'
import React, {useState, useTransition} from 'react';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import {useRouter} from "next/navigation";
import {useLocale} from "use-intl";
import Contacts from "@/components/Contacts";
import { motion } from "framer-motion";
import {cardVariants, card} from "../../animation";
import {navLink} from "../../utils/utils";


const LeftSideBar = () => {
    const [ isPending, startTransition] = useTransition();
    const [activeLink, setActiveLink] = useState("ABOUT");
    const router = useRouter();
    const localActive = useLocale();
    const t = useTranslations('page');
    const handleSelect = (e: { target: { value: string } }) => {
        const selectedLanguage = e.target.value;
        startTransition(() => {
            router.replace(`/${selectedLanguage}`)
        })

    }
    const handleClick = (label:string) => {
        setActiveLink(label); // Met à jour l'état avec l'élément sélectionné
    };
    return (
        <motion.div className=' relative shrink-0 sm:w-1/2  sm:flex sm:flex-col justify-between h-full'
                    initial='hidden'
                    animate="show"
                    variants={cardVariants}
        >
            <motion.section id='about' variants={card}>
                <h2 className={'w-full sm:text-[80px] text-[27px] font-bold'}>
                    Toure Aboubacar
                </h2>

                <h2 className="font-bold py-2">{t('title')}</h2>

                <p className="font-bold text-gray py-2">
                    {t('desc')}
                </p>

                <motion.section className='flex flex-col gap-2' variants={card}>
                    <h2 className="py-2 text-xl">SKILLS</h2>
                    <h2>Backend (main) :</h2>
                    <p className="text-gray">Node.js, NestJS, Express.js, springBoot, PostgreSQL, MongoDB, MySQL</p>

                    <h2>Frontend (secondary):</h2>
                    <p className="text-gray">HTML, CSS, JavaScript, React, nextjs, Intégration des API dans des
                        applications
                        frontend</p>

                    <h2>Tools & DevOps:</h2>
                    <p className="text-gray">Docker, Kubernetes, Git, CI/CD (GitHub Actions)</p>
                </motion.section>
            </motion.section>

            <section className="flex flex-col w-[150px] gap-5 py-3">
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
                                {t(`${nav.label}`)}
                            </Link>
                        </div>
                    </motion.div>
                ))}
                <section className={'sm:relative absolute top-0 right-0'}>
                    <select
                        onChange={handleSelect}
                        id="language"
                        name="language"
                        defaultValue={localActive}
                        className="mt-2 block w-[100px] sm:w-[200px] text-green rounded-md border-0 py-1.5 pl-3 pr-10 ring-inset bg-transparent ring-gray-300  focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        disabled={isPending}
                    >
                        <option value="en">English</option>
                        <option value="fr">French</option>
                    </select>
                </section>

            </section>
            <Contacts/>
        </motion.div>
    );
};

export default LeftSideBar;