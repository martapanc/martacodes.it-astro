
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '@/styles/modules/uses.module.css';

import clsxm from '@/lib/clsxm';

import Heading from '@/components/atoms/headings/Heading';
import UpdateTimestamp from '@/components/molecules/UpdateTimestamp/UpdateTimestamp';

import type { MarkdownData } from '@/types/Markdown';

type UsesPageProps = {
  usesData: MarkdownData;
};

export default function UsesPage({ usesData }: UsesPageProps) {
  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='Uses' />

        <div className='flex items-center flex-col my-3'>
          <img
            className='mb-2'
            src='https://res.cloudinary.com/dwrurydlt/image/upload/f_auto,q_auto,w_540/v1698432934/current_setup.jpg'
            alt='Current setup'
            width={540}
            height={400}
          />
          <span className='italic'>My current workstation setup</span>
        </div>

        {usesData.markdownSections.map((section, id) => (
          <div
            className={clsxm(styles['uses-section'], 'mb-2')}
            aria-label={section.title}
            key={id}
          >
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        ))}

        <hr className='my-8' />

        <UpdateTimestamp updatedAt={usesData.latestEditTimestamp} />
      </div>
    </section>
  );
}
