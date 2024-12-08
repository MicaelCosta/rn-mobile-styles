import React from 'react';
import {View} from 'react-native';
import {ThemeProvider, Button, Text} from 'rn-mobile-styles';

import {theme} from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Text Test</Text>
        <Button title="Button test" />
      </View>
    </ThemeProvider>
  );
}
