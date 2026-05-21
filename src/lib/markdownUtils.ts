import fs from 'fs';
import moment from 'moment';
import path from 'path';

import type { CodeSnippet } from '@/types/CodeSnippet';
import type { MarkdownData, MarkdownSection } from '@/types/Markdown';

const readCodeSnippets = (): CodeSnippet[] => {
  const directory = 'src/data/code-snippets';
  const markdownFiles = fs.readdirSync(directory);
  const markdownData: CodeSnippet[] = [];

  markdownFiles.forEach((filename, id) => {
    const filePath = path.join(directory, filename);
    const content = fs
      .readFileSync(filePath, 'utf-8')
      .replaceAll('```', '')
      .replace(/^\n|\n$/g, ''); // Remove leading and trailing \n
    markdownData.push({
      id,
      language: filename.replace('.md', ''),
      code: content,
    });
  });

  return markdownData;
};

export const readMarkdownData = (containingFolder: string): MarkdownData => {
  const directory = `src/data/${containingFolder}`;
  const markdownFiles = fs.readdirSync(directory);
  const markdownSections: MarkdownSection[] = [];
  let latestEditTimestamp = moment(0); // Initialize with a default value

  markdownFiles.forEach((filename) => {
    const filePath = path.join(directory, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    const stats = fs.statSync(filePath);

    markdownSections.push({ title: filePath.replace('.md', ''), content });

    const fileTimestamp = moment(stats.mtime);
    if (fileTimestamp.isAfter(latestEditTimestamp)) {
      latestEditTimestamp = fileTimestamp;
    }
  });

  return {
    markdownSections,
    latestEditTimestamp: latestEditTimestamp.toISOString(),
  };
};

export const readMarkdown = (fileName: string): string => {
  const path = `src/data/${fileName}`;
  return fs.readFileSync(path, 'utf-8');
};

export default readCodeSnippets;
