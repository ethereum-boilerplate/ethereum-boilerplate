import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blalblalb } from '.';

export default {
  component: Blalblalb,
  title: '/Blalblalb',
} as ComponentMeta<typeof Blalblalb>;

const Template: ComponentStory<typeof Blalblalb> = (args) => <Blalblalb {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
