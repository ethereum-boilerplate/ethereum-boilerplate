import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';
import { MoralisProvider } from 'react-moralis';

export default {
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <MoralisProvider appId="" serverUrl="">
    <Header {...args} />
  </MoralisProvider>
);

export const Demo = Template.bind({});
Demo.args = {};
