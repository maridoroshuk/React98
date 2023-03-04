import React from 'react';

import { Button } from '@/components/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'radio',
      options: ['reset', 'submit', null],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => {},
  children: 'Click me',
};
