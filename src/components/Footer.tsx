'use client'
import React from 'react';
import {useTranslations} from "next-intl";

const Footer = () => {
    const t = useTranslations('footer')
    return (
        <div className='text-start'>
            <p>{t('copyright')}</p>
        </div>
    );
};

export default Footer;