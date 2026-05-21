'use client';

import * as React from 'react';

import { shuffleArray } from '@/lib/helper';

import Heading from '@/components/atoms/headings/Heading';
import type { QuizOption } from '@/components/molecules/RandomFacts/Quiz';
import Books from '@/components/organisms/about/Books';
import Music from '@/components/organisms/about/Music';
import Podcasts from '@/components/organisms/about/Podcasts';
import RandomFacts from '@/components/organisms/about/RandomFacts';
import Travel from '@/components/organisms/about/Travel';
import TvSeries from '@/components/organisms/about/TvSeries';
import VideoGames from '@/components/organisms/about/VideoGames';

import type { Book } from '@/types/Book';
import type { Podcast } from '@/types/Podcast';
import type { RandomFact } from '@/types/RandomFact';
import type { TvShow } from '@/types/TvShow';
import type { VideoGame } from '@/types/VideoGame';

type AboutPageProps = {
  books: Book[];
  podcasts: Podcast[];
  videoGames: VideoGame[];
  tvShows: TvShow[];
  randomFacts: RandomFact[];
};

export default function AboutPage({
  books,
  podcasts,
  videoGames,
  tvShows,
  randomFacts,
}: AboutPageProps) {
  function setupRandomFactsData() {
    const falseFacts = randomFacts.filter((fact) => !fact.isFactTrue);
    const trueFacts = randomFacts.filter((fact) => fact.isFactTrue);
    const selectedTrueFacts = trueFacts.filter(
      (fact) => !fact.name.includes('(True)'),
    );

    const oneFalseFact: RandomFact = shuffleArray(falseFacts)[0];
    const threeTrueFacts: RandomFact[] = shuffleArray(selectedTrueFacts).slice(
      0,
      3,
    );

    const options: QuizOption[] = threeTrueFacts.map((fact) => ({
      headline: fact.headline,
      explanation: fact.explanation,
    }));

    options.push({
      headline: oneFalseFact.headline,
      explanation: oneFalseFact.explanation,
    });

    const shuffledOptions = shuffleArray(options);

    const keys = ['a', 'b', 'c', 'd'];
    const preparedOptions: QuizOption[] = [];
    for (let i = 0; i < 4; i++) {
      preparedOptions.push({
        headline: shuffledOptions[i].headline,
        explanation: shuffledOptions[i].explanation,
        key: keys[i],
      });
    }

    const falseOptionKey: string = preparedOptions.find(
      (option) => option.headline === oneFalseFact.headline,
    )!.key!;

    return {
      options: preparedOptions,
      falseOption: falseOptionKey,
      trueFacts,
    };
  }

  const randomFactsData = setupRandomFactsData();

  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='About me' />

        <div className='mb-5'>
          <p>
            Programming means great fun for me, but it&apos;s not the only
            activity I enjoy. <br />
            Here&apos;s an overview of non-computer related things I love doing
            in my free time :)
          </p>
        </div>

        <Books books={books} />

        <Podcasts podcasts={podcasts} />

        <VideoGames videoGames={videoGames} />

        <TvSeries tvShows={tvShows} />

        <Music />

        <RandomFacts
          options={randomFactsData.options}
          falseOption={randomFactsData.falseOption}
          trueFacts={randomFactsData.trueFacts}
        />

        <Travel />
      </div>
    </section>
  );
}
