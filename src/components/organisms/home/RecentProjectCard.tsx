
import { useTheme } from '@/hooks/useTheme';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/atoms/links/ButtonLink';
import { toolIconMapping } from '@/components/organisms/projects/Icons';

import type { Project } from '@/types/Project';

interface RecentProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const RecentProjectCard = ({
  project,
  reverse = false,
}: RecentProjectCardProps) => {
  const flexClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  const { theme } = useTheme();

  const [iconColor, setIconColor] = useState<string>('');

  useEffect(() => {
    setIconColor(theme === 'dark' ? '#e1e7f2' : '#15295F');
  }, [theme]);

  return (
    <div className={clsxm('flex flex-col gap-6 w-full mb-10', flexClass)}>
      <div className='rounded-xl drop-shadow-lg w-full md:1/2 lg:w-1/3'>
        <img
          className='rounded-lg drop-shadow-lg'
          src={project.image.url}
          alt={project.image.name}
          width={400}
          height={0}
        />
      </div>
      <div className='flex flex-col w-full md:1/2 lg:w-2/3'>
        <h4>{project.title}</h4>

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {project.mediumDescription ?? project.longDescription}
        </ReactMarkdown>

        <div className='flex flex-row justify-between mt-3'>
          <div className='flex flex-row'>
            <IconContext.Provider value={{ color: iconColor, size: '1.5em' }}>
              {project.tools.map((tool: string) => {
                const IconComponent = toolIconMapping[tool];
                return (
                  IconComponent && (
                    <span key={tool} className='me-1' aria-label={tool}>
                      <IconComponent />
                    </span>
                  )
                );
              })}
            </IconContext.Provider>
          </div>

          {project.links.github && (
            <div className='flex flex-row h-8 items-center px-2'>
              <ButtonLink
                href={project.links.github}
                className='flex gap-1.5'
                variant={theme === 'dark' ? 'dark' : 'light'}
              >
                <AiFillGithub size={24} />
                Check it out
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectCard;
