import * as React from 'react';

export interface LanguageSwitcherProps {
  languages: LanguageDef[];
}

export interface LanguageDef {
  label: string;
  value: string;
  flag: string;
  disabled?: boolean;
}

const LanguageSwitcherMobile = (_props: LanguageSwitcherProps) => null;

export default LanguageSwitcherMobile;
