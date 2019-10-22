import { Box, Clock, Text } from 'grommet';
import React from 'react';
import './Header.css';

export default function() {
  return (
    <Box
      className="app-header"
      gridArea="header"
      direction="row"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      align="center"
      justify="between"
    >
      <Box direction="row" align="center">
        <Text weight="bold" color="white">
          coding-with-binaries
        </Text>
        <Text size="small" margin="small" color="white">
          (By Varun Sharma)
        </Text>
      </Box>
      <Clock className="app-header-clock" type="digital" size="small" />
    </Box>
  );
}
