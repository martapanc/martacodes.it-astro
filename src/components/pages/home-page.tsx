import React from 'react';

import Intro from '@/components/organisms/home/Intro';
import Projects from '@/components/organisms/home/Projects';
import SkillSummary from '@/components/organisms/home/SkillSummary';
import Summary from '@/components/organisms/home/Summary';
import UpdatesSummary from '@/components/organisms/home/UpdatesSummary';

import type {CodeSnippet} from '@/types/CodeSnippet';
import type {HomepageContent} from '@/types/HomepageContent';
import type {Project} from '@/types/Project';

type HomePageProps = {
  homePage: HomepageContent;
  codeSnippets: CodeSnippet[];
  projects: Project[];
};

export default function HomePage({
  homePage,
  codeSnippets,
  projects,
}: HomePageProps) {
  return (
    <section className='dark:bg-dark bg-almost-white'>
      <div className='dark:bg-gradient-linear-dark bg-gradient-linear-light'>
        <div className='layout relative flex flex-col py-16 md:pt-24 pb-5 md:pb-16'>
          <Intro greeting={homePage.greeting} codeSnippets={codeSnippets} />
        </div>
      </div>

      <div className='angle angle-1 bg-blue-100 after:bg-almost-white dark:bg-slate-900 dark:after:bg-dark'></div>

      <div className='bg-blue-100 dark:bg-slate-900'>
        <div className='layout relative flex py-8'>
          <Summary homePage={homePage} />
        </div>
      </div>

      <div className='angle angle-2 bg-home-section2 after:bg-blue-100 dark:bg-dark dark:after:bg-slate-900'></div>

      <div className='bg-home-section2 dark:bg-dark'>
        <div className='layout relative flex py-8'>
          <SkillSummary homePage={homePage} />
        </div>
      </div>

      <div className='angle angle-4 bg-home-section3 after:bg-home-section2 dark:bg-home-section2-dark dark:after:bg-dark'></div>

      <div className='bg-home-section3 dark:bg-home-section2-dark'>
        <div className='layout relative flex py-8'>
          <Projects projects={projects} />
        </div>
      </div>

      <div className='angle angle-3 bg-almost-white after:bg-home-section3 dark:bg-home-section4-dark dark:after:bg-home-section2-dark'></div>

      <div className='bg-almost-white dark:bg-home-section4-dark'>
        <div className='layout relative flex pt-8 pb-24'>
          <UpdatesSummary updates={homePage.updates} />
        </div>
      </div>
    </section>
  );
}
