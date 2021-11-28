import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, IProps } from '../src/Button';

const meta: Meta = {
  title: 'Button Example',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      type: 'string',
      defaultValue: 'Click Me',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Deafult = Template.bind({});
