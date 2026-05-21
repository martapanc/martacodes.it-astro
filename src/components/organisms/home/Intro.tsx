import React from 'react';

import styles from './home.module.css';

import clsxm from '@/lib/clsxm';
import { shuffleArray } from '@/lib/helper';

import TagCloud from '@/components/organisms/home/TagCloud';

import Terminal from './Terminal';

import type { CodeSnippet } from '@/types/CodeSnippet';

export interface IntroProps {
  codeSnippets: CodeSnippet[];
  greeting: string;
}

const Intro = ({ greeting, codeSnippets }: IntroProps) => {
  return (
    <div className='mb-6 flex min-h-fit flex-col pb-6'>
      <h1 className='pb-4 text-5xl antialiased'>
        <span className={clsxm(styles.greeting, 'drop-shadow-lg')}>
          {greeting}
        </span>{' '}
        <span className='inline-block animate-waving-hand'>👋</span>
      </h1>

      <div className='mt-8 flex flex-col-reverse lg:flex-row gap-3 md:gap-10'>
        <TagCloud />

        <Terminal codeSnippets={shuffleArray(codeSnippets)} />
      </div>
    </div>
  );
};

export default Intro;
