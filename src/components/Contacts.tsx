'use client'
import React from 'react';
import {FaSquareGithub} from "react-icons/fa6";
import {FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {useTranslations} from "next-intl";
import { motion } from "framer-motion";
import {card} from "../../animation";
const Contacts = () => {
    const t = useTranslations('contacts')
    return (
        <motion.section className="flex items-center gap-9 justify-start py-5" variants={card}>
            <h1 className="sm:hidden text-xl">Contacts</h1>
            <div className="relative group">
                <a href='https://github.com/AbToureDev' target="_blank">
                    <FaSquareGithub size={30} className="hover:text-green"/>
                </a>
                    <span
                        className="absolute left-0 bottom-full mb-1 hidden px-2 py-1 text-sm text-white bg-black rounded group-hover:block">
                        {t('github')}
                    </span>
            </div>
            <div className="relative group">
                <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target="_blank" >
                    <FaLinkedin size={30} className="hover:text-green"/>
                </a>
                    <span
                        className="absolute left-0 bottom-full mb-1 hidden px-2 py-1 text-sm text-white bg-black rounded group-hover:block">
                       {t('linkedin')}
                    </span>
            </div>

            <div className="relative group pointer-events-none">
                <a href='#' >
                    <FaInstagramSquare size={30} className="hover:text-green" aria-disabled={true} />
                </a>
                    <span
                        className="absolute left-0 bottom-full mb-1 hidden px-2 py-1 text-sm text-white bg-black rounded group-hover:block">
                        {t('instagram')}
                    </span>
            </div>

            <div className="relative group">
                <a href="mailto:aboubacartour993@gmail.com" >
                    <SiGmail size={30} className="hover:text-green"/>
                </a>
                <span
                    className="absolute left-0 bottom-full mb-1 hidden px-2 py-1 text-sm text-white bg-black rounded group-hover:block">
                         {t('gmail')}
                    </span>
            </div>
        </motion.section>
    );
};

export default Contacts;