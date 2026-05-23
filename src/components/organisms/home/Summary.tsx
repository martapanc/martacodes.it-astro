'use client';

import clsx from 'clsx';
import {useTheme} from '@/hooks/useTheme';
import React, {useEffect, useState} from 'react';
import ReactCountryFlag from 'react-country-flag';
import ReactMarkdown from 'react-markdown';
import reactStringReplace from 'react-string-replace';
import rehypeRaw from 'rehype-raw';

import clsxm from '@/lib/clsxm';
import {isWindowsOS} from '@/lib/helper';

import edu from '@/data/edu.json';
import jobs from '@/data/jobs.json';

import Photo from '@/components/organisms/home/Photo';

import type {HomepageContent} from '@/types/HomepageContent';

interface LinkProps {
    key: string;
    href: string;
    classes: string;
    image: string;
    imageDark: string;
    alt: string;
    width: number;
    height: number;
}

interface EduLogoProps {
    key: string;
    label: string;
    href: string;
    classes: string;
    color: string;
    colorDark: string;
    alt: string;
    flag: string;
}

function buildLink(link: LinkProps, logoVersion: string) {
    const logoUrl = logoVersion === 'dark' ? link.imageDark : link.image;

    return (
        <a
            key={link.key}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <img
                className={clsxm(link.classes, 'inline')}
                src={logoUrl}
                alt={link.alt}
                width={link.width}
                height={link.height}
            />
        </a>
    );
}

function buildEduLogo(logo: EduLogoProps, logoVersion: string) {
    const logoColor = logoVersion === 'dark' ? logo.colorDark : logo.color;

    const useSvgFlags =
        typeof window !== 'undefined' && isWindowsOS(window.navigator);

    return (
        <a
            key={logo.key}
            href={logo.href}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:no-underline'
        >
      <span style={{color: logoColor}} className='font-semibold'>
        {logo.label}{' '}
          <ReactCountryFlag countryCode={logo.flag} svg={useSvgFlags}/>
      </span>
        </a>
    );
}

export interface SummaryProps {
    homePage: HomepageContent;
}

const Summary = ({homePage}: SummaryProps) => {
    const {theme} = useTheme();

    const [logoVersion, setLogoVersion] = useState('light');

    useEffect(() => {
        setLogoVersion(theme === 'dark' ? 'dark' : 'light');
    }, [theme]);

    const intro = reactStringReplace(
        homePage.introduction.now,
        jobs.tpts.key,
        () => buildLink(jobs.tpts, logoVersion),
    );

    let education = reactStringReplace(
        homePage.introduction.education,
        edu.uom.key,
        () => buildEduLogo(edu.uom, logoVersion),
    );
    education = reactStringReplace(education, edu.unibz.key, () =>
        buildEduLogo(edu.unibz, logoVersion),
    );
    education = reactStringReplace(education, edu.cofc.key, () =>
        buildEduLogo(edu.cofc, logoVersion),
    );

    let work = reactStringReplace(homePage.introduction.work, jobs.bjss.key, () =>
        buildLink(jobs.bjss, logoVersion),
    );
    work = reactStringReplace(work, jobs.booking.key, () =>
        buildLink(jobs.booking, logoVersion),
    );
    work = reactStringReplace(work, jobs.resourcify.key, () =>
        buildLink(jobs.resourcify, logoVersion),
    );
    work = reactStringReplace(work, jobs.appetize.key, () =>
        buildLink(jobs.appetize, logoVersion),
    );

    return (
        <div className={clsx('flex md:flex-row flex-col-reverse')}>
            <div className='text-lg antialiased'>
                <div className='tracking-widest text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5'>
                    ABOUT ME
                </div>

                <p className='mb-4'>{intro}</p>

                <p className='mb-4 md:mb-1'>{work}</p>

                <p className='mb-4'>{education}</p>

                <div className='mb-4 md:mb-1'>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {homePage.introduction.passion}
                    </ReactMarkdown>
                </div>

                <div className='mb-4'>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {homePage.introduction.freeTime}
                    </ReactMarkdown>
                </div>
            </div>
            <Photo/>
        </div>
    );
};

export default Summary;
