import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';
import GlobalStyle from '@/theme/globalStyles';

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
