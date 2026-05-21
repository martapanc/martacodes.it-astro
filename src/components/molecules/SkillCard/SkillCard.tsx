'use client';


import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import type { Skill } from '@/types/Skill';

export interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const iconDimension = 36;

  return (
    <div
      key={skill.title}
      className='skill-container rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md'
    >
      <div className='flex w-full'>
        {skill.icons.map((icon, id) => (
          <img
            className='me-1 pb-1 rounded-md'
            key={id}
            height={iconDimension}
            width={iconDimension + 1}
            alt={icon.name}
            src={icon.url}
            aria-label={icon.name}
          />
        ))}
      </div>

      <h3 className='text-2xl font-semibold my-1'>{skill.title}</h3>

      <span className='skill-description text-justify font-light'>
        <ReactMarkdown>{skill.description}</ReactMarkdown>
      </span>
    </div>
  );
};

export default SkillCard;
