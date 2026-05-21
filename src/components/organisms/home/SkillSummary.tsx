'use client';

import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import type {HomepageContent} from '@/types/HomepageContent';

interface SkillsProps {
    homePage: HomepageContent;
}

const SkillSummary = ({homePage}: SkillsProps) => {
    return (
        <div className='flex flex-col'>
            <div className='tracking-widest text-sm font-semibold text-slate-500 mb-5 text-end'>
                SOFTWARE DEVELOPMENT
            </div>
            <div className='flex md:flex-row flex-col-reverse gap-6 w-full'>
                <div className='md:w-1/4 flex items-center justify-center dark:bg-transparent rounded-3xl'>
                    <img
                        src='https://res.cloudinary.com/dwrurydlt/image/upload/v1710444087/full-stack-developer.png'
                        height={0}
                        width={375}
                        alt='full-stack development'
                    />
                </div>
                <div className='text-[17px] antialiased md:w-3/4'>
                    <div className='mb-4'>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {homePage.skills.fullStack}
                        </ReactMarkdown>
                    </div>

                    <div className='mb-4'>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {homePage.skills.languages}
                        </ReactMarkdown>
                    </div>

                    <div className='mb-4'>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {homePage.skills.latest}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSummary;
