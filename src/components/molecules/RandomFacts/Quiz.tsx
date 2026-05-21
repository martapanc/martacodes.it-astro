'use client';

import * as React from 'react';
import { useState } from 'react';

import Button from '@/components/atoms/buttons/Button';

import type { RandomFact } from '@/types/RandomFact';

export interface QuizOption {
  headline: string;
  explanation?: string;
  key?: string;
}

export interface QuizData {
  options: QuizOption[];
  falseOption?: string;
  trueFacts: RandomFact[];
}

export interface QuizProps {
  options: QuizOption[];
  falseOption?: string;
  onAnswerSubmission: (isCorrect: boolean) => void;
}

const Quiz = ({ options, falseOption, onAnswerSubmission }: QuizProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const isButtonDisabled = selectedAnswer === '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const submitAnswer = () => {
    onAnswerSubmission(falseOption === selectedAnswer);
  };

  return (
    <div className='rounded p-4 dark:bg-slate-900'>
      <div className='mb-4' role='radiogroup' aria-label='Quiz options'>
        {options.map((option) => (
          <label key={option.key} className='mb-2 flex items-center gap-2 cursor-pointer md:mb-1'>
            <input
              type='radio'
              name='radio-buttons-group'
              value={option.key}
              checked={selectedAnswer === option.key}
              onChange={handleChange}
              className='accent-primary-600'
            />
            <span>{option.headline}</span>
          </label>
        ))}
      </div>

      <div className='flex flex-row justify-end md:justify-start'>
        <Button
          className='w-fit shadow-md'
          variant='primary'
          onClick={submitAnswer}
          disabled={isButtonDisabled}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
