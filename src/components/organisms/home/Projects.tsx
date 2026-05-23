'use client';

import React from 'react';

import clsxm from '@/lib/clsxm';

import RecentProjectCard from '@/components/organisms/home/RecentProjectCard';

import type { Project } from '@/types/Project';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className='flex flex-col'>
      <div className='tracking-widest text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5'>
        RECENT PROJECTS
      </div>
      <div className='flex flex-col gap-6 w-full'>
        <RecentProjectCard project={projects[3]} reverse />
        <RecentProjectCard project={projects[0]}  />
        <RecentProjectCard project={projects[1]} reverse />
      </div>

      <div className='text-lg text-blue-950 dark:text-blue-200'>
        <a
          href='/projects'
          className='animated-underline-2 dark:animated-underline font-semibold'
        >
          See all my projects
        </a>
        ! 👀
      </div>
    </div>
  );
};

export default Projects;
