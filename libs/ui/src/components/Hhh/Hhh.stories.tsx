import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hhh } from '.';

export default {
  component: Hhh,
  title: 'Hhh',
} as ComponentMeta<typeof Hhh>;

const Template: ComponentStory<typeof Hhh> = (args) => <Hhh {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
