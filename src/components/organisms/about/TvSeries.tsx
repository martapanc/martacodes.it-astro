'use client';


import * as React from 'react';

import { sortByDesc } from '@/lib/objecUtils';

import type { TvShow } from '@/types/TvShow';

export interface TvSeriesProps {
  tvShows: TvShow[];
}

const TvSeries = ({ tvShows }: TvSeriesProps) => {
  tvShows.sort(sortByDesc<TvShow>('year'));

  return (
    <div className='mb-6'>
      <div className='my-2 flex'>
        <h2>Favourite TV Series</h2>
      </div>

      <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-6 dark:bg-slate-900 md:mx-0 md:w-full md:px-0'>
        {tvShows.map((tvShow, id) => (
          <li
            key={id}
            className='mt-2 h-[200px] w-[136px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-700'
          >
            <a href={tvShow.link} target='_blank' rel='noopener noreferrer'>
              <img
                className='rounded-md'
                alt={tvShow.title}
                src={tvShow.poster}
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

export default TvSeries;
