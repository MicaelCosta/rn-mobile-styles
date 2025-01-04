import React from 'react';

import {
  ThemeProvider,
  Loading,
  Box,
  Text,
  Button,
  TextInput,
  Screen,
  DateInput,
} from 'rn-mobile-styles';

import {theme} from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Screen
        justifyContent="center"
        alignItems="center"
        scrollable
        LeftComponent={<Loading />}
        RightComponent={<Loading />}
        title="Title">
        <Box mb="s12" flexDirection="row">
          <Loading color="error" />
          <Loading color="success" />
          <Loading color="warning" />
        </Box>
        <Box mb="s12" flexDirection="row">
          <Button title="primary" marginHorizontal="s4" />
          <Button title="outline" preset="outline" marginHorizontal="s4" />
          <Button title="disabled" disabled marginHorizontal="s4" />
          <Button title="loading" loading marginHorizontal="s4" />
        </Box>
        <Text preset="headingLarge">headingLarge</Text>
        <Text preset="headingMedium">headingMedium</Text>
        <Text preset="headingSmall">headingSmall</Text>
        <Text preset="paragraphLarge">paragraphLarge</Text>
        <Text preset="paragraphMedium">paragraphMedium</Text>
        <Text preset="paragraphSmall">paragraphSmall</Text>
        <Text preset="paragraphCaption">paragraphCaption</Text>
        <Text preset="paragraphCaptionSmall">paragraphCaptionSmall</Text>
        <TextInput
          label="Text Input"
          placeholder="Text Input"
          boxProps={{
            mt: 's16',
            width: '100%',
          }}
        />
        <TextInput
          label="Text Input with error"
          placeholder="Text Input with error"
          errorMessage="error message"
          boxProps={{
            mt: 's16',
            width: '100%',
          }}
        />
        <TextInput
          label="Text Input with left component"
          placeholder="Text Input with left component"
          LeftComponent={<Loading />}
          boxProps={{
            mt: 's16',
            width: '100%',
          }}
        />
        <TextInput
          label="Text Input with right component"
          placeholder="Text Input with right component"
          RightComponent={<Loading />}
          boxProps={{
            mt: 's16',
            width: '100%',
          }}
        />

        <DateInput
          label="Date Input"
          onChange={() => {}}
          value={new Date()}
          boxProps={{
            mt: 's16',
            width: '100%',
          }}
        />

        <DateInput
          label="Date Input with error"
          errorMessage="error message"
          onChange={() => {}}
          boxProps={{
            mt: 's16',
            width: '100%',
          }}
        />
      </Screen>
    </ThemeProvider>
  );
}
