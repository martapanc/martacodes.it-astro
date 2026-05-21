'use client';

import * as React from 'react';

import styles from './styles.module.css';

import clsxm from '@/lib/clsxm';

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h1
      className={clsxm(
        styles.heading,
        'drop-shadow-lg mb-4 text-5xl font-bold',
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
