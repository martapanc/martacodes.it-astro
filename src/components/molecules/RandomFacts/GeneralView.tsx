'use client';

import * as React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '@/components/atoms/buttons/Button';

import type { RandomFact } from '@/types/RandomFact';

export interface GeneralViewProps {
  randomFacts: RandomFact[];
}

const GeneralView = ({ randomFacts }: GeneralViewProps) => {
  const [factIndex, setFactIndex] = useState<number>(0);

  const loadNewFact = () => {
    if (factIndex < randomFacts.length) {
      setFactIndex(factIndex + 1);
    }
  };

  return (
    <div className=''>
      <div className='mb-5 min-h-fit rounded bg-sky-200 p-6 dark:bg-slate-800'>
        {factIndex < randomFacts.length && (
          <ReactMarkdown>{randomFacts[factIndex].description}</ReactMarkdown>
        )}
        {factIndex === randomFacts.length && (
          <div className='text-center'>
            That was the last cool fact I could think of... come back in some
            time for more :)
          </div>
          // (or refresh the page to read them again)
        )}
      </div>

      <div className='flex justify-center'>
        {factIndex < randomFacts.length && (
          <Button onClick={loadNewFact}>Load another random fact</Button>
        )}
      </div>
    </div>
  );
};

export default GeneralView;
