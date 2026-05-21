'use client';

import * as React from 'react';
import { BsFillCheckCircleFill, BsFillXSquareFill } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';

import type {QuizOption} from './Quiz';

export interface QuizAnswersProps {
  answers: QuizOption[];
  falseOption?: string;
  answeredCorrectly: boolean;
}

const QuizAnswers = ({
  answers,
  falseOption,
  answeredCorrectly,
}: QuizAnswersProps) => {
  return (
    <div className='flex flex-col items-center rounded px-4 pb-0 pt-3 dark:bg-slate-900'>
      <div className='mb-4 mt-0 w-fit rounded bg-gray-200 p-4 dark:bg-slate-700'>
        <p className='text-gray-800 dark:text-gray-50'>
          {answeredCorrectly
            ? "Congratulations, you're correct! 🥳"
            : 'Too bad, better luck next time ✌️'}
        </p>
      </div>

      <ul>
        {answers.map((answer) => (
          <li className='mb-5 flex flex-col' key={answer.key}>
            <div className='mb-2 flex flex-row'>
              <span className='me-3 flex items-center text-xl'>
                {answer.key == falseOption ? (
                  <BsFillXSquareFill className='fill-current text-red-600' />
                ) : (
                  <BsFillCheckCircleFill className='fill-current text-green-600' />
                )}
              </span>
              <span>{answer.headline}</span>
            </div>
            <div className='rounded bg-blue-100 px-3 py-2 text-xs dark:bg-blue-950'>
              {answer.explanation && (
                <ReactMarkdown>{answer.explanation}</ReactMarkdown>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizAnswers;
