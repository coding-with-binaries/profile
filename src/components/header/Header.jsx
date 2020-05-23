import { Box, Clock, Text } from 'grommet';
import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';

export default function () {
  const history = useHistory();
  const routeToHome = () => {
    history.push('/');
  };
  return (
    <Box
      className="app-header"
      gridArea="header"
      direction="row"
      background="#181818"
      align="center"
    >
      <Text
        className="app-title"
        weight="bold"
        color="white"
        onClick={routeToHome}
      >
        coding-with-binaries
      </Text>
      <Box direction="row" align="center" justify="between">
        <Text size="small" margin="small" color="white">
          (By Varun Sharma)
        </Text>
        <Clock className="app-header-clock" type="digital" size="small" />
      </Box>
    </Box>
  );
}
