'use client'
import React, {useTransition} from 'react';
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";
type Props = {
    localActive:string;
};
const Language:React.FC<Props>= ({localActive}) => {
    const router = useRouter();
    const [ isPending, startTransition] = useTransition();
    const t = useTranslations<string>();
    const handleSelect = (e: { target: { value: string } }) => {
        const selectedLanguage = e.target.value;
        startTransition(() => {
            router.replace(`/${selectedLanguage}`)
        })

    }
    return (
        <section className={'sm:relative absolute top-0 right-2'}>
            <select
                onChange={handleSelect}
                id="language"
                name="language"
                defaultValue={localActive}
                className="mt-2 block w-[100px] sm:w-[200px] text-green rounded-md border-0 py-1.5 pl-3 pr-10 ring-inset bg-transparent ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                disabled={isPending}
            >
                <option value="en">{t("language.English")}</option>
                <option value="fr">{t("language.French")}</option>
            </select>
        </section>
    );
};

export default Language;