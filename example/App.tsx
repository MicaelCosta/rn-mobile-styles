import React from 'react';
import {ThemeProvider, Loading, Button} from 'rn-mobile-styles';

import {theme} from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Loading color="error" />
      <Button title="Teste" />
    </ThemeProvider>
  );
}
