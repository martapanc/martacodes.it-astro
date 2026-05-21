import { Meta } from '@storybook/react';

import LanguageSwitcher, {
  LanguageDef,
  LanguageSwitcherProps,
} from '../LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
};

export default meta;

const languages: LanguageDef[] = [
  {
    label: '🇬🇧 EN',
    value: 'en',
  },
  {
    label: '🇮🇹 IT',
    value: 'it',
  },
  {
    label: '🇩🇪 DE',
    value: 'de',
  },
  {
    label: '🇫🇷 FR',
    value: 'fr',
  },
  {
    label: '🇪🇸 ES',
    value: 'es',
    disabled: true,
  },
];

export const SampleStory = (args: LanguageSwitcherProps) => {
  return <LanguageSwitcher {...args} />;
};
SampleStory.args = {
  languages,
};
