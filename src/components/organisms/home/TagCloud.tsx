'use client';

import { Text } from '@visx/text';
import { Wordcloud } from '@visx/wordcloud';
import { useEffect, useRef, useState } from 'react';

import tagsData from '@/data/tags.json';

interface WordData {
  text: string;
  value: number;
}

const colors = ['#0d40a4', '#1A86D2', '#61c1f8', '#FFCE47'];

const words: WordData[] = tagsData.map((tag) => ({
  text: tag.text,
  value: tag.value,
}));

const fontScale = (datum: WordData) => {
  const minValue = 6;
  const maxValue = 42;
  const minSize = 10;
  const maxSize = 42;
  return (
    minSize +
    ((datum.value - minValue) / (maxValue - minValue)) * (maxSize - minSize)
  );
};

const fixedValueGenerator = () => 0.5;

const TagCloud = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 280 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      className='w-full mt-6 h-80 md:h-[260px] lg:h-[288px] lg:w-1/2 lg:mt-0 rounded-lg bg-gray-50 dark:bg-gray-900 p-1 drop-shadow-lg'
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Wordcloud
          words={words}
          width={dimensions.width}
          height={dimensions.height}
          fontSize={(datum) => fontScale(datum)}
          font='Verdana'
          padding={2}
          rotate={0}
          random={fixedValueGenerator}
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => (
              <Text
                key={w.text}
                fill={colors[i % colors.length]}
                textAnchor='middle'
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
              >
                {w.text}
              </Text>
            ))
          }
        </Wordcloud>
      )}
    </div>
  );
};

export default TagCloud;
