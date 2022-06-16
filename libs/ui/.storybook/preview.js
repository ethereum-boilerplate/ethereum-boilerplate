import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
addDecorator((story) => (
  <BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>
));
