'use client';

import * as React from 'react';

interface SectionHeadingProps {
  icon: string;
  title: string;
}

const SectionHeading = ({ icon, title }: SectionHeadingProps) => {
  const titleIconDimension = 36;

  return (
    <div className='m-2 mb-3 flex flex-col items-center'>
      <img
        className='h-auto'
        src={icon}
        alt={title}
        width={titleIconDimension}
        height={titleIconDimension}
      />

      <h2 className='-mt-0.5 underline decoration-1 underline-offset-4 md:decoration-2'>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
