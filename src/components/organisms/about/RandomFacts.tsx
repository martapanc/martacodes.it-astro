'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import { getFromCookie, saveToCookie } from '@/lib/helper';

import GeneralView from '@/components/molecules/RandomFacts/GeneralView';
import Quiz, { type QuizData } from '@/components/molecules/RandomFacts/Quiz';
import QuizAnswers from '@/components/molecules/RandomFacts/QuizAnswers';

export const alreadyPlayedKey = 'QuizAlreadyPlayed';

const RandomFacts = ({ options, falseOption, trueFacts }: QuizData) => {
  const [submitted, setSubmitted] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const [loading, setLoading] = useState(true);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      const alreadyPlayedValue = getFromCookie(alreadyPlayedKey);

      setAlreadyPlayed(
        alreadyPlayedValue ? JSON.parse(alreadyPlayedValue) : false,
      );

      setLoading(false);
    };

    fetchDataFromLocalStorage();
  }, []);

  const handleAnswerSubmission = (isCorrect: boolean) => {
    setSubmitted(true);
    setAnswerCorrect(isCorrect);

    if (!alreadyPlayed) {
      saveToCookie(alreadyPlayedKey, JSON.stringify(true));

      setAlreadyPlayed(true);
    }
  };

  if (loading) {
    return (
      <div className='mt-4 flex items-center justify-center p-4'>
        <div className='dot-flashing'></div>
      </div>
    );
  }

  return (
    <div className='mb-6'>
      <div className='mb-4 mt-2 flex'>
        <h2>Random facts about me</h2>
      </div>

      {!alreadyPlayed && (
        <div className='mb-3 font-serif font-semibold'>
          Here&apos;s a little game for you! Which of the following statements
          about me is{' '}
          <strong className='text-red-600 dark:text-red-400'>false</strong>?
        </div>
      )}

      {!submitted && !alreadyPlayed && (
        <Quiz
          options={options}
          falseOption={falseOption}
          onAnswerSubmission={handleAnswerSubmission}
        />
      )}
      {submitted && alreadyPlayed && (
        <QuizAnswers
          answers={options}
          falseOption={falseOption}
          answeredCorrectly={answerCorrect}
        />
      )}
      {!submitted && alreadyPlayed && <GeneralView randomFacts={trueFacts} />}
    </div>
  );
};

export default RandomFacts;
