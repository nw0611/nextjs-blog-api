import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../src/ThemeConfig';
import { addDecorator } from '@storybook/react'; //Storybookではデコレータ を使うことにより、値を渡せる

addDecorator((storyFn) => {
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
})

