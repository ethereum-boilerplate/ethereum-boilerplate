import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Booo } from '.';

export default {
  component: Booo,
  title: 'Booo',
} as ComponentMeta<typeof Booo>;

const Template: ComponentStory<typeof Booo> = (args) => <Booo {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
