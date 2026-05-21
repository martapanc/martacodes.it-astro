import { Meta } from '@storybook/react';

import { QuizOption } from '../Quiz';
import QuizAnswers, { QuizAnswersProps } from '../QuizAnswers';

const meta: Meta<typeof QuizAnswers> = {
  title: 'Components/Random Facts/Quiz Answers',
  component: QuizAnswers,
  tags: ['autodocs'],
};

export default meta;

const answers: QuizOption[] = [
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

export const CorrectAnswerStory = (args: QuizAnswersProps) => (
  <QuizAnswers {...args} />
);
CorrectAnswerStory.args = {
  answers,
  falseOption: 'c',
  answeredCorrectly: true,
};

export const WrongAnswerStory = (args: QuizAnswersProps) => (
  <QuizAnswers {...args} />
);
WrongAnswerStory.args = {
  answers,
  falseOption: 'c',
  answeredCorrectly: false,
};
