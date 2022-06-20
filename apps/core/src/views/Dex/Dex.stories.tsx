import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dex } from '.';

export default {
  component: Dex,
  title: 'Dex',
} as ComponentMeta<typeof Dex>;

const Template: ComponentStory<typeof Dex> = (args) => <Dex {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
