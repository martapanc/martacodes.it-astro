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
            <h2 className='tracking-widest text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5 text-end'>
                SOFTWARE DEVELOPMENT
            </h2>
            <div className='flex md:flex-row flex-col-reverse gap-3 w-full justify-between'>
                <div className='md:w-1/3 flex items-center justify-center dark:bg-transparent rounded-3xl'>
                    <img
                        src='https://res.cloudinary.com/dwrurydlt/image/upload/f_auto,q_auto,w_360/v1779458555/fs-engineer_h7ogjq.webp'
                        height={0}
                        width={359}
                        alt='full-stack development'
                    />
                </div>
                <div className='text-[17px] antialiased md:w-2/3'>
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
