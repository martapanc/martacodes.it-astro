import React from 'react';

import styles from './home.module.css';

import clsxm from '@/lib/clsxm';
import { shuffleArray } from '@/lib/helper';

import TagCloud from '@/components/organisms/home/TagCloud';
import ButtonLink from '@/components/atoms/links/ButtonLink';

import Terminal from './Terminal';

import type { CodeSnippet } from '@/types/CodeSnippet';

export interface IntroProps {
  codeSnippets: CodeSnippet[];
  greeting: string;
  shortInfo: {
      title: string;
      exp: number;
      currentlyAt: string;
  }
}

const Sep = () => <span className='text-gray-400 dark:text-gray-500'>·</span>;

const Intro = ({ greeting, shortInfo, codeSnippets }: IntroProps) => {
  return (
    <div className='mb-6 flex min-h-fit flex-col pb-6'>
      <h1 className='pb-4 text-5xl antialiased'>
        <span className={clsxm(styles.greeting, 'drop-shadow-lg')}>
          {greeting}
        </span>{' '}
        <span className='inline-block animate-waving-hand'>👋</span>
      </h1>

      <p className='mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600 dark:text-gray-400 md:text-base font-mono'>
        <span className='font-semibold text-gray-900 dark:text-white'>{shortInfo.title}</span>
        <Sep />
        <span>{shortInfo.exp} YoE</span>
        <Sep />
        <span>currently <span className='font-semibold text-gray-900 dark:text-white'>{shortInfo.currentlyAt}</span></span>
      </p>

      <div className='mb-8 flex flex-wrap items-center gap-3'>
        <span className='inline-flex items-center gap-2 rounded-full drop-shadow-md bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-950 dark:text-green-300 h-8 sm:h-9'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-green-600' />
          </span>
          Open to opportunities
        </span>
        <div className='flex gap-3'>
          <ButtonLink
            href='/projects'
            variant='primary'
            className='rounded-full px-5 py-1.25 text-sm dark:bg-blue-900 hover:dark:bg-blue-800 h-8 sm:h-9'
          >
            View my work →
          </ButtonLink>
          <ButtonLink
            href='/contacts'
            variant='light'
            className='rounded-full px-5 py-1.25 text-sm hover:border-primary-500 hover:bg-transparent hover:text-primary-500 dark:border-gray-600 dark:bg-transparent dark:text-gray-200 dark:hover:border-primary-400 dark:hover:text-primary-400 h-8 sm:h-9'
          >
            Email me
          </ButtonLink>
        </div>
      </div>

      <div className='mt-2 flex flex-col-reverse lg:flex-row gap-3 md:gap-10'>
        <TagCloud />

        <Terminal codeSnippets={shuffleArray(codeSnippets)} />
      </div>
    </div>
  );
};

export default Intro;
