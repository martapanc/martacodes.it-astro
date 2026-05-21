'use client';


import { useTheme } from '@/hooks/useTheme';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import SectionHeading from '@/components/atoms/headings/SectionHeading';

import type { Job } from '@/types/Job';

export interface WorkExperienceProps {
  jobs: Job[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
  const { theme } = useTheme();

  return (
    <div className='my-4'>
      <SectionHeading icon='https://res.cloudinary.com/dwrurydlt/image/upload/v1692894192/work_f1bb1eb3dd.svg' title='Work Experience' />

      <div>
        {jobs.map((job, id) => (
          <div
            key={id}
            className='mb-4 rounded-md p-4 shadow-md dark:bg-slate-900'
          >
            {/* Start Job Header - Desktop */}
            <div className='hidden border-b-2 border-slate-200 pb-2 md:flex'>
              <img
                className='me-3 rounded-sm'
                src={job.icon.url}
                alt={job.companyName}
                width={60}
                height={60}
              />

              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <h4>
                    {job.companyName} {job.location && `~`} {job.location}
                  </h4>
                  <h5 className='font-medium'>{job.title}</h5>
                </div>

                <div className='flex flex-col justify-center'>
                  <span className='text-lg font-semibold'>
                    <>
                      {format(job.startDate)}
                      &nbsp; — &nbsp;
                      {job.isCurrentJob ? `present` : format(job.endDate)}
                    </>
                  </span>
                </div>
              </div>
            </div>
            {/* End Job Header - Desktop*/}

            {/* Start Job Header - Mobile */}
            <div className='flex flex-col border-b-2 border-slate-200 pb-2 md:hidden'>
              <div className='flex'>
                <img
                  className='me-3 rounded-sm'
                  src={job.icon.url}
                  alt={job.companyName}
                  width={60}
                  height={60}
                />

                <div className='flex w-full justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>
                      {job.companyName} {job.location && `~`} {job.location}
                    </span>

                    <span className='text-sm'>{job.title}</span>
                  </div>
                </div>
              </div>

              <div className='flex justify-end'>
                <span className='text-xs font-medium'>
                  {format(job.startDate)}
                  &nbsp; — &nbsp;
                  {job.isCurrentJob ? `present` : format(job.endDate)}
                </span>
              </div>
            </div>
            {/* End Job Header - Mobile*/}

            {/* Start Job Content */}
            <div className='job-content pt-4'>
              <div className='skill-description pb-2 text-justify font-light'>
                <ReactMarkdown>{job.description}</ReactMarkdown>
              </div>

              <div className='mb-2 flex flex-wrap justify-end md:w-full'>
                {job.technologies.map((tech) => (
                  <div
                    key={tech}
                    style={{
                      backgroundColor:
                        theme === 'dark' ? job.darkColor : job.mainColor,
                    }}
                    className='mb-1 ms-1 rounded-sm px-1 py-0.5 text-xs text-white dark:text-black md:ms-2 md:rounded-md md:px-2 md:text-base'
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            {/* End Job Content */}
          </div>
        ))}
      </div>
    </div>
  );
};

function format(inputDate: string | null): string {
  if (inputDate) {
    const date = new Date(inputDate);
    return Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
    }).format(date);
  }
  return '';
}

export default WorkExperience;
