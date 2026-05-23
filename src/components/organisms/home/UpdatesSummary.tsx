'use client';

import React from 'react';

import type { Updates } from '@/types/HomepageContent';

interface UpdatesProps {
  updates: Updates;
}

const UpdatesSummary = ({ updates }: UpdatesProps) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='tracking-widest text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5 text-end'>
        UPDATES
      </div>
      <div className='flex md:flex-row flex-col gap-6 w-full justify-between'>
        <div className='text-lg antialiased flex-row'>
          <div
            className='text-3xl text-[#003e16] dark:text-[#5fff98] mb-1'
            style={{ fontFamily: "'Reenie Beanie', cursive" }}
          >
            I'm currently learning...
          </div>
          <ul>
            {updates.learning?.map((item, index) => (
              <li
                key={'learning-' + index}
                className='text-[16px] md:text-base'
              >
                🌱 {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='text-lg antialiased flex-row'>
          <div
            className='text-2xl text-[#1e5dbf] dark:text-[#5fccff] mb-1'
            style={{ fontFamily: "'Handlee', cursive" }}
          >
            I'm looking to learn...
          </div>
          <ul>
            {updates.willLearn?.map((item, index) => (
              <li
                key={'will-learn-' + index}
                className='text-[16px] md:text-base'
              >
                💡 {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='text-lg antialiased flex-row'>
          <div
            className='text-[34px] text-[#bf6e00] dark:text-[#fba42d] mb-1'
            style={{ fontFamily: "'Square Peg', cursive" }}
          >
            Latest books I've read...
          </div>
          <ul>
            {updates.reading?.map((item, index) => (
              <li key={'reading-' + index} className='text-[16px] md:text-base'>
                📖 {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpdatesSummary;
