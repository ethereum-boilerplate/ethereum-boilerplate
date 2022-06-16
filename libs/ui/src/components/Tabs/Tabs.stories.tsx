import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from '.';

export default {
  component: Tabs,
  title: 'Tabs',
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  tabs: [
    { name: 'Home', to: '#' },
    { name: 'DEx', to: '#' },
    { name: 'NFT', to: '#' },
    { name: 'Contract', to: '#' },
  ],
};
