import Typography from './Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Nutrisa/Typography',
  component: Typography,
  argTypes: {
    colors: {
      control: 'select',
      options: [
        'primary-orange',
        'secondary-orange',
        'primary-green',
        'secondary-green',
        'primary-gray',
        'secondary-gray',
      ],
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  children: <>Test</>,
};
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: <>Test</>,
};
export const Base = Template.bind({});
Base.args = {
  size: 'base',
  children: <>Test</>,
};
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: <>Test</>,
};
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  children: <>Test</>,
};
export const MegaLarge = Template.bind({});
MegaLarge.args = {
  size: '2xl',
  children: <>Test</>,
};
