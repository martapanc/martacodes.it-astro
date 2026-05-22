'use client';

import { useTheme } from '@/hooks/useTheme';
import React, { useEffect, useState } from 'react';
import TerminalFrame from '@/components/molecules/TerminalFrame/TerminalFrame';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneLight,
  darcula,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';

import type { CodeSnippet } from '@/types/CodeSnippet';

export interface CodeSnippetsProps {
  codeSnippets: CodeSnippet[];
}

const Terminal = ({ codeSnippets }: CodeSnippetsProps) => {
  const [loading, setLoading] = useState(true);
  const [ideStyle, setIdeStyle] = useState(atomOneLight);
  const { theme } = useTheme();

  useEffect(() => {
    setIdeStyle(theme === 'dark' ? darcula : atomOneLight);
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!loading) {
      const typedStringsElement = document.getElementById('typed-strings');
      const typedElement = document.getElementById('typed');

      if (typedStringsElement && typedElement) {
        const typedOptions: TypedOptions = {
          stringsElement: '#typed-strings',
          typeSpeed: 40,
          backSpeed: 10,
          backDelay: 5000,
          loop: true,
          loopCount: 0,
          smartBackspace: true,
          showCursor: true,
          cursorChar: '_',
        };

        const typed = new Typed(typedElement, typedOptions);

        // Clean up the Typed.js instance when the component unmounts
        return () => {
          typed.destroy();
        };
      }
    }
  }, [loading]);

  return (
    <TerminalFrame
        className='w-full lg:w-1/2 h-60 lg:h-72 drop-shadow-lg'
        fileName="marta.info"
        fileMeta="last modified 2026-05-24"
    >
      <div className='h-full rounded-b-lg border-double bg-terminal-light dark:bg-terminal-dark px-4 pt-2.5 pb-6'>
        <div id='typed-strings'>
          {loading ? <span className='cursor-blink'>_</span> : null}
          {!loading &&
            codeSnippets.map((snippet) => (
              <SyntaxHighlighter
                className='text-xs md:text-base'
                key={snippet.id}
                language={snippet.language}
                style={ideStyle}
                wrapLongLines={true}
              >
                {snippet.code}
              </SyntaxHighlighter>
            ))}
        </div>
        <span id='typed'></span>
      </div>
    </TerminalFrame>
  );
};

export default Terminal;
