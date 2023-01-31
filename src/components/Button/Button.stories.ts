import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Nutrisa/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    text: 'Button',
    loader: true,
  },
};
