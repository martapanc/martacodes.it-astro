import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { shuffleArray } from '@/lib/helper';

import randomFactsData from '@/data/about/randomFacts.json';

import GeneralView, { GeneralViewProps } from '../GeneralView';

import type { RandomFact } from '@/types/RandomFact';

const meta: Meta<typeof GeneralView> = {
  title: 'Components/Random Facts/General View',
  component: GeneralView,
  tags: ['autodocs'],
};

export default meta;

export const SampleStory = (args: GeneralViewProps) => {
  const [randomFacts, setRandomFacts] = useState<RandomFact[]>([]);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        setRandomFacts(shuffleArray(randomFactsData));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching randomFacts:', error);
      }
    };

    fetchFacts();
  }, []);

  return (
    <>
      {randomFacts.length > 0 && (
        <GeneralView {...args} randomFacts={randomFacts} />
      )}
    </>
  );
};
