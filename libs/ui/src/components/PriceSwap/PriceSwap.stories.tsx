import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PriceSwap } from '.';

export default {
  component: PriceSwap,
  title: 'PriceSwap',
} as ComponentMeta<typeof PriceSwap>;

const Template: ComponentStory<typeof PriceSwap> = (args) => <PriceSwap {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
