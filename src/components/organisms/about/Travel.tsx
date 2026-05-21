'use client';

import * as React from 'react';

import TravelMap from '@/components/organisms/about/TravelMap';

const Travel = () => {
  return (
    <div className='mb-10'>
      <div className='mb-6 mt-2 flex'>
        <h2>Places I've visited</h2>
      </div>

      <TravelMap />
    </div>
  );
};

export default Travel;
