import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from '@/components/Paragraph/Paragraph';



export default {
  title: 'Paragraph/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = () => (
  <Paragraph />
);

export const Primary = Template.bind({});
