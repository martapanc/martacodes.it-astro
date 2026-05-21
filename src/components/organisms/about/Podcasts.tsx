'use client';


import * as React from 'react';

import { sortBy } from '@/lib/objecUtils';

import type { Podcast } from '@/types/Podcast';

export interface PodcastProps {
  podcasts: Podcast[];
}

const Podcasts = ({ podcasts }: PodcastProps) => {
  podcasts.sort(sortBy<Podcast>('author'));

  return (
    <div className='mb-6'>
      <div className='my-2 flex'>
        <h2>Podcasts I follow</h2>
      </div>

      <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-6 dark:bg-slate-900 md:mx-0 md:w-full md:px-0'>
        {podcasts.map((podcast, id) => (
          <li
            key={id}
            className='mt-2 h-[136px] w-[136px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700'
          >
            <a
              href={podcast.mediaLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='rounded-md'
                alt={podcast.name}
                src={podcast.cover}
                width={130}
                height={130}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Podcasts;
