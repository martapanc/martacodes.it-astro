'use client';


import * as React from 'react';

import SectionHeading from '@/components/atoms/headings/SectionHeading';

import type { Language } from '@/types/Language';

export interface LanguageProps {
  languages: Language[];
}

const Languages = ({ languages }: LanguageProps) => {
  return (
    <div className='mb-6 mt-4'>
      <SectionHeading icon='https://res.cloudinary.com/dwrurydlt/image/upload/v1692894192/internet_60bf166c34.svg' title='Languages' />

      <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 justify-items-center'>
        {languages.map((language, id) => (
          <div
            key={id}
            className='flex flex-row items-center rounded-md p-4 shadow-md dark:bg-slate-900 w-full'
          >
            <img
              src={language.flag}
              alt={language.name}
              aria-label={language.name}
              width={40}
              height={40}
            />

            <span className='ms-4 font-semibold'>{language.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
