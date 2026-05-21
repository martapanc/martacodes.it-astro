'use client';


import * as React from 'react';

import { sortByDesc } from '@/lib/objecUtils';

import type { VideoGame } from '@/types/VideoGame';

export interface VideoGameProps {
  videoGames: VideoGame[];
}

const VideoGames = ({ videoGames }: VideoGameProps) => {
  videoGames.sort(sortByDesc<VideoGame>('year'));

  return (
    <div className='mb-6'>
      <div className='my-2 flex'>
        <h2>Games I&apos;m addicted to</h2>
      </div>

      <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-6 dark:bg-slate-900 md:mx-0 md:w-full md:px-0'>
        {videoGames.map((game, id) => (
          <li
            key={id}
            className='mt-2 h-[180px] w-[136px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-purple-300 hover:to-purple-700'
          >
            <a href={game.link} target='_blank' rel='noopener noreferrer'>
              <img
                className='rounded-md'
                alt={game.title}
                src={game.cover}
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

export default VideoGames;
