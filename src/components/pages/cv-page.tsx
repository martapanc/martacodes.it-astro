'use client';

import * as React from 'react';

import Heading from '@/components/atoms/headings/Heading';
import CvCard from '@/components/organisms/cv/CvCard';
import Education from '@/components/organisms/cv/Education';
import Intro from '@/components/organisms/cv/Intro';
import Languages from '@/components/organisms/cv/Languages';
import Publications from '@/components/organisms/cv/Publications';
import Skills from '@/components/organisms/cv/Skills';
import WorkExperience from '@/components/organisms/cv/WorkExperience';

import type { Job } from '@/types/Job';
import type { Language } from '@/types/Language';
import type { Publication } from '@/types/Publication';
import type { School } from '@/types/School';
import type { Skill } from '@/types/Skill';

type CvPageProps = {
  intro: string;
  skills: Skill[];
  jobs: Job[];
  schools: School[];
  languages: Language[];
  publications: Publication[];
};

export default function CvPage({
  intro,
  skills,
  jobs,
  schools,
  languages,
  publications,
}: CvPageProps) {
  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='My CV' />

        <Intro intro={intro} />

        <Skills skills={skills} />

        <hr />

        <WorkExperience jobs={jobs} />

        <hr />

        <Education schools={schools} />

        <hr />

        <Languages languages={languages} />

        <hr />

        <Publications publications={publications} />

        <hr />

        <CvCard />
      </div>
    </section>
  );
}
