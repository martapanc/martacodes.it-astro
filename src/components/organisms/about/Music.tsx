'use client';

import { useTheme } from '@/hooks/useTheme';
import * as React from 'react';

const Music = () => {
  const { theme } = useTheme();
  const playlistId = '7Any464BbUACFDQUm6bFhf';

  const widgetTheme = theme === 'dark' ? '&theme=0' : '';

  return (
    <div className='mb-10'>
      <div className='mb-6 mt-2 flex'>
        <h2>Very old music I listen to</h2>
      </div>

      <div className='rounded dark:bg-slate-900'>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator${widgetTheme}`}
          style={{ borderRadius: 8 }}
          width='100%'
          height='440'
          frameBorder={0}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
