import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from '.';

export default {
  component: Tab,
  title: 'Tab',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  name: 'Test',
  href: '#',
};
