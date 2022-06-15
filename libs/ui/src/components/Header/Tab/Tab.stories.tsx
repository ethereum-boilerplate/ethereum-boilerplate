import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from '.';

export default {
  component: Tab,
  title: 'Tab',
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
