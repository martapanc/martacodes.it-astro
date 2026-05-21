'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import styles from '@/styles/modules/recruiters.module.css';

import clsxm from '@/lib/clsxm';
import { isWindowsOS } from '@/lib/helper';

import Heading from '@/components/atoms/headings/Heading';
import { SalaryHappinessTool } from '@/components/molecules/RecruiterInfo/SalaryHappinessTool';
import UpdateTimestamp from '@/components/molecules/UpdateTimestamp/UpdateTimestamp';

import type { MarkdownData } from '@/types/Markdown';

type RecruitersPageProps = {
  recruitersData: MarkdownData;
};

function removeFlagEmojisIfWindowsOS(inputText: string): string {
  if (typeof window !== 'undefined' && isWindowsOS(window.navigator)) {
    return inputText
      .replaceAll('🇪🇺', ' ')
      .replaceAll('🇮🇹', '🍕')
      .replaceAll('🇬🇧', ' ');
  }
  return inputText;
}

export default function RecruitersPage({
  recruitersData,
}: RecruitersPageProps) {
  const salaryData = {
    min: 110000,
    median: 135000,
    max: 160000,
  };

  const config = {
    displayTitle: true,
    currency: 'EUR',
    forexMultiplier: 1,
  };

  return (
    <section>
      <div className='layout relative flex flex-col py-12 recruiters-info'>
        <Heading title='Info for Recruiters' />

        <div className={clsxm(styles['recruiters-info'], 'mb-2')}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
          >
            {recruitersData.markdownSections[0].content}
          </ReactMarkdown>
        </div>

        <SalaryHappinessTool salaryData={salaryData} config={config} />

        <div className={clsxm(styles['recruiters-info'], 'mb-4')}>
          <ReactMarkdown

            rehypePlugins={[rehypeRaw]}
          >
            {removeFlagEmojisIfWindowsOS(
              recruitersData.markdownSections[1].content,
            )}
          </ReactMarkdown>
        </div>

        <hr />

        <UpdateTimestamp updatedAt={recruitersData.latestEditTimestamp} />
      </div>
    </section>
  );
}
