import React from 'react';
import {View} from 'react-native';
import {ThemeProvider, Loading, Box, Text, Button} from 'rn-mobile-styles';

import {theme} from './theme';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ThemeProvider theme={theme}>
        <Box mb="s12" flexDirection="row">
          <Loading color="error" />
          <Loading color="success" />
          <Loading color="warning" />
        </Box>

        <Box mb="s12" flexDirection="row">
          <Button title="Teste" marginHorizontal="s4" />
          <Button title="Teste" disabled marginHorizontal="s4" />
          <Button title="Teste" loading marginHorizontal="s4" />
        </Box>

        <Text>Teste</Text>
      </ThemeProvider>
    </View>
  );
}
