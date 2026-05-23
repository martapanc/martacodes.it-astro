'use client';

import { useTheme } from '@/hooks/useTheme';
import React, { useEffect, useState } from 'react';
import TerminalFrame from '@/components/molecules/TerminalFrame/TerminalFrame';
import SyntaxHighlighter from 'react-syntax-highlighter';

// Dark theme: colours taken from martacodes-hero-iteration.html
const customDark: { [key: string]: React.CSSProperties } = {
  hljs:                  { background: 'transparent', color: '#E2E8F0' },
  'hljs-keyword':        { color: '#C792EA' },
  'hljs-title':          { color: '#82AAFF' },
  'hljs-title.class_':   { color: '#82AAFF' },
  'hljs-title.function_':{ color: '#82AAFF' },
  'hljs-string':         { color: '#C3E88D' },
  'hljs-number':         { color: '#F78C6C' },
  'hljs-attr':           { color: '#FFCB6B' },
  'hljs-property':       { color: '#FFCB6B' },
  'hljs-comment':        { color: '#5B6886', fontStyle: 'italic' },
  'hljs-punctuation':    { color: '#A6ACCD' },
  'hljs-operator':       { color: '#A6ACCD' },
  'hljs-built_in':       { color: '#82AAFF' },
  'hljs-literal':        { color: '#F78C6C' },
  'hljs-type':           { color: '#82AAFF' },
  'hljs-variable':       { color: '#E2E8F0' },
  'hljs-params':         { color: '#E2E8F0' },
  'hljs-meta':           { color: '#7B89A8' },
  'hljs-tag':            { color: '#C792EA' },
  'hljs-name':           { color: '#C792EA' },
  'hljs-symbol':         { color: '#FFCB6B' },
};

// Light theme: same hues darkened for contrast on light background
const customLight: { [key: string]: React.CSSProperties } = {
  hljs:                  { background: 'transparent', color: '#14213D' },
  'hljs-keyword':        { color: '#7C3AED' },
  'hljs-title':          { color: '#1D4ED8' },
  'hljs-title.class_':   { color: '#1D4ED8' },
  'hljs-title.function_':{ color: '#1D4ED8' },
  'hljs-string':         { color: '#15803D' },
  'hljs-number':         { color: '#C2410C' },
  'hljs-attr':           { color: '#A16207' },
  'hljs-property':       { color: '#A16207' },
  'hljs-comment':        { color: '#6B7280', fontStyle: 'italic' },
  'hljs-punctuation':    { color: '#4B5563' },
  'hljs-operator':       { color: '#4B5563' },
  'hljs-built_in':       { color: '#1D4ED8' },
  'hljs-literal':        { color: '#C2410C' },
  'hljs-type':           { color: '#0F766E' },
  'hljs-variable':       { color: '#14213D' },
  'hljs-params':         { color: '#14213D' },
  'hljs-meta':           { color: '#6B7280' },
  'hljs-tag':            { color: '#7C3AED' },
  'hljs-name':           { color: '#7C3AED' },
  'hljs-symbol':         { color: '#A16207' },
};
import type { CodeSnippet } from '@/types/CodeSnippet';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';

export interface CodeSnippetsProps {
  codeSnippets: CodeSnippet[];
}

const Terminal = ({ codeSnippets }: CodeSnippetsProps) => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const ideStyle = theme === 'dark' ? customDark : customLight;

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
  }, [loading, theme]);

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
