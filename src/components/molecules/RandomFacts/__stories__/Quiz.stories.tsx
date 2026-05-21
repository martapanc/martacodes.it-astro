import { Meta } from '@storybook/react';

import Quiz, { QuizOption, QuizProps } from '../Quiz';

const meta: Meta<typeof Quiz> = {
  title: 'Components/Random Facts/Quiz',
  component: Quiz,
  tags: ['autodocs'],
};

export default meta;

const options: QuizOption[] = [
  {
    key: 'a',
    headline:
      'I have been officially excommunicated by the Roman Catholic Church ⛪',
  },
  {
    key: 'b',
    headline: 'I studied oboe at the music school for more than 12 years 🎶',
  },
  {
    key: 'c',
    headline: 'I know flags and capitals of all 195 countries in the world 🇰🇲',
  },
  {
    key: 'd',
    headline:
      'I was an extra-actor in a movie once: "Correspondence" by Giuseppe Tornatore 🎬',
  },
];

export const SampleStory = (args: QuizProps) => <Quiz {...args} />;
SampleStory.args = {
  options,
  falseOption: 'c',
};
