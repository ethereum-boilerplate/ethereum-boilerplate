import { Story, Meta } from '@storybook/react';
import { App } from './App';

export default {
  component: App,
  title: 'App',
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
