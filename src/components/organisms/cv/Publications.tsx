'use client';

import * as React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

import SectionHeading from '@/components/atoms/headings/SectionHeading';
import UnstyledLink from '@/components/atoms/links/UnstyledLink';

import type { Publication } from '@/types/Publication';

export interface PublicationProps {
  publications: Publication[];
}

const Publications = ({ publications }: PublicationProps) => {
  return (
    <div className='mb-6 mt-4'>
      <SectionHeading icon='https://res.cloudinary.com/dwrurydlt/image/upload/v1692894192/newspaper_e15ec94d21.svg' title='Publications' />

      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8'>
        {publications.map((publication, id) => (
          <div
            key={id}
            className='flex min-h-fit max-h-60 flex-col justify-between rounded-md p-4 shadow-md dark:bg-slate-900 lg:max-h-40 lg:h-40'
          >
            <span className='font-semibold mb-2 md:mb-auto'>
              {publication.title}
            </span>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <span className='font-light'>{publication.description}</span>
                <span className='font-light'>
                  {publication.publisher}, {publication.year}
                </span>
              </div>

              <div className='flex flex-col self-end'>
                <UnstyledLink
                  key={id}
                  className='focus-visible:ring-primary-300 inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring'
                  href={publication.fileUrl}
                >
                  <AiOutlineFilePdf className='hover:text-primary-500 dark:hover:text-primary-300 my-auto h-6 w-6 align-middle text-blue-900 transition-colors dark:text-gray-300' />
                </UnstyledLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
