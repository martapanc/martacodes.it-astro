import * as React from 'react';

export interface LanguageSwitcherProps {
  languages: LanguageDef[];
}

export interface LanguageDef {
  label: string;
  value: string;
  disabled?: boolean;
}

const LanguageSwitcher = (_props: LanguageSwitcherProps) => null;

export default LanguageSwitcher;
