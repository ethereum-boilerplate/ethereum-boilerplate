import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InchModal } from '.';

export default {
  component: InchModal,
  title: 'InchModal',
} as ComponentMeta<typeof InchModal>;

const Template: ComponentStory<typeof InchModal> = (args) => <InchModal {...args} />;

export const Demo = Template.bind({});
Demo.args = {};
