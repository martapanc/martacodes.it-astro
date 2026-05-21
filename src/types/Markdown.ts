export interface MarkdownSection {
  title: string;
  content: string;
}

export interface MarkdownData {
  markdownSections: MarkdownSection[];
  latestEditTimestamp: string;
}
