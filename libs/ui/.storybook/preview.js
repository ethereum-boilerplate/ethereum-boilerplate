import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

addDecorator((story) => (
  <BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>
));
