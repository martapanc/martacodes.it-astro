import clsx from "clsx";
import React from 'react';

interface TerminalFrameProps {
  className?: string;
  fileName?: string;
  fileMeta?: string;
  children: React.ReactNode;
}

const TerminalFrame = ({ className, fileName, fileMeta, children }: TerminalFrameProps) => {
  const dotIndex = fileName?.lastIndexOf('.');
  const stem = dotIndex && dotIndex > 0 ? fileName!.slice(0, dotIndex) : fileName;
  const ext = dotIndex && dotIndex > 0 ? fileName!.slice(dotIndex) : undefined;

  return (
  <div className={clsx('border rounded-lg border-terminal-border-light dark:border-terminal-border-dark flex flex-col', className)}>
    <div className='bg-terminal-bar-light dark:bg-terminal-bar-dark h-6 sm:h-7 rounded-t-lg px-4 py-1 flex items-center gap-3 border-b border-terminal-border-light dark:border-terminal-border-dark shrink-0'>
      <div className='flex items-center'>
        <div className='w-3 h-3 rounded-full me-1.5 bg-terminal-red'></div>
        <div className='w-3 h-3 rounded-full me-1.5 bg-terminal-amber'></div>
        <div className='w-3 h-3 rounded-full me-1.5 bg-terminal-green'></div>
      </div>
      {fileName && (
        <span className='font-mono text-[11px] font-medium text-gray-600 dark:text-gray-400'>
          {stem}<span className='text-gray-500'>{ext}</span>
        </span>
      )}
      {fileMeta && (
        <span className='font-mono text-[11px] text-gray-500 ml-auto'>{fileMeta}</span>
      )}
    </div>
    <div className='flex-1 min-h-0'>
      {children}
    </div>
  </div>
  );
};

export default TerminalFrame;