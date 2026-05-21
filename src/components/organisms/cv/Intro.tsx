'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import SectionHeading from '@/components/atoms/headings/SectionHeading';

interface IntroProps {
  intro: string;
}

const Intro = ({ intro }: IntroProps) => {
  const noOfYears = (new Date().getFullYear() - 2015).toString();

  return (
    <div>
      <SectionHeading icon='https://res.cloudinary.com/dwrurydlt/image/upload/v1692734473/laptop_4a3ba3b30c.svg' title='Software Development' />

      <div className='mb-6 cv-intro-section text-justify'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {intro.replace('8', noOfYears)}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Intro;
