'use client'
import React, {useEffect, useState} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import Language from "@/components/Language";
import {useLocale} from "use-intl";
import {realisationsEn, realisationsFr} from "../../../../utils/utils";
import {useTranslations} from "next-intl";
interface Realizations {
    year: string;
    title: string;
    company: string;
    image:string;
    description: string;
    link:string;
    technologies: string[];
}
const Page = () => {
    const t = useTranslations<string>();
    const localActive = useLocale();
    const [realisations, setRealisations ] = useState<Realizations[]>([]);

    useEffect(() => {
        if (localActive === 'en') {
            setRealisations(realisationsEn)
        }else {
            setRealisations(realisationsFr)
        }
    },[localActive] )

    return (
        <div className="h-screen text-white">
            <div className="mx-auto max-w-7xl">
                <div className="bg-gray-900 py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <div className="flex justify-between">
                                    <a href="/"
                                       className=" flex items-center text-base font-semibold leading-6 text-green py-3">
                                        <AiOutlineArrowRight size={15} className='-rotate-180'/>
                                        <h1 className="px-2 ">Toure Aboubacar</h1>
                                    </a>
                                    {/*<Language localActive={localActive}/>*/}
                                </div>

                                <h1 className="mt-2 font-semibold text-4xl text-gray">
                                    {t("table.All_Projects")}
                                </h1>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead>
                                        <tr>
                                            <th scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                {t("table.year")}
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                {t("table.project")}
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                {t("table.made_at")}
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                {t("table.build_with")}
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                {t("table.link")}
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                        {realisations.map((realisations,index) => (
                                            <tr key={index}>
                                                <td className="whitespace-nowrap py-7 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                    {realisations.year}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{realisations.title}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green">{realisations.company}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                        <p className="flex flex-wrap w-full items-center gap-5">
                                                            {realisations.technologies?.map((tech, index) => (
                                                                <span key={index} className="lang">{tech}</span>
                                                            ))}
                                                        </p>
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                                                    <a href={realisations.link} className="text-indigo-400 hover:text-indigo-300" target="_blank">
                                                        {realisations.title}
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
            };

export default Page;