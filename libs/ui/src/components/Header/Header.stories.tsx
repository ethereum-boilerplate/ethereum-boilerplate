import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';

export default {
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  tabs: [
    { name: 'Home', to: '/home' },
    { name: 'DEx', to: '/dex' },
    { name: 'NFT', to: '/nft' },
    { name: 'Contract', to: '/contract' },
  ],
};
