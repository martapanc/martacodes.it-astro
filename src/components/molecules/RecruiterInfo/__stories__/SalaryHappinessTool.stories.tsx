import { Meta } from '@storybook/react';

import {
  SalaryHappinessProps,
  SalaryHappinessTool,
} from '../SalaryHappinessTool';

const meta: Meta<typeof SalaryHappinessTool> = {
  title: 'Components/Recruiter-Info/SalaryHappinessTool',
  component: SalaryHappinessTool,
  tags: ['autodocs'],
};

export default meta;

const salaryData = {
  min: 40000,
  median: 80000,
  max: 120000,
};

export const EurSalaryStory = (args: SalaryHappinessProps) => (
  <SalaryHappinessTool {...args} />
);
EurSalaryStory.storyName = 'Salary in EUR';
EurSalaryStory.args = {
  salaryData,
  config: {
    displayTitle: true,
    currency: 'EUR',
    forexMultiplier: 1,
  },
};

export const GbpSalaryStory = (args: SalaryHappinessProps) => (
  <SalaryHappinessTool {...args} />
);

GbpSalaryStory.storyName = 'Salary in GBP';
GbpSalaryStory.args = {
  salaryData,
  config: {
    displayTitle: false,
    currency: 'GBP',
    forexMultiplier: 0.86,
  },
};

export const UsdSalaryStory = (args: SalaryHappinessProps) => (
  <SalaryHappinessTool {...args} />
);

UsdSalaryStory.storyName = 'Salary in USD';
UsdSalaryStory.args = {
  salaryData,
  config: {
    displayTitle: false,
    currency: 'USD',
    forexMultiplier: 1.08,
  },
};
