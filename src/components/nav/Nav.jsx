import { Box, Image } from 'grommet';
import React from 'react';
import './Nav.css';

export default function() {
  return (
    <Box
      className="app-nav"
      background="linear-gradient(162.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      gridArea="nav"
      align="center"
    >
      <Box
        className="app-nav-profile-pic-wrapper"
        elevation="large"
        align="center"
        justify="center"
      >
        <Image className="app-nav-profile-pic" src="images/profile.jpg"></Image>
      </Box>
    </Box>
  );
}
