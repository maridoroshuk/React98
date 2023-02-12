import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import GlobalStyle from '../src/theme/globalStyles';

addDecorator((story) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered',

};
