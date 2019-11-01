import { Box, Grid, Image, Text } from 'grommet';
import React from 'react';
import { NavLink } from 'react-router-dom';
import navActions from './nav-actions';
import './Nav.css';
export default function() {
  return (
    <Grid
      className="app-nav"
      gridArea="nav"
      gap="small"
      rows={['192px', 'auto']}
    >
      <Box
        className="app-nav-profile-pic-container"
        align="center"
        justify="center"
      >
        <Box
          className="app-nav-profile-pic-wrapper"
          elevation="large"
          align="center"
          justify="center"
        >
          <Image
            className="app-nav-profile-pic"
            src={process.env.REACT_APP_IMAGE_URL}
          ></Image>
        </Box>
      </Box>
      <Box className="app-nav-actions">
        {navActions.map(a => {
          const Icon = a.icon;
          return (
            <NavLink
              className="app-nav-action"
              activeClassName="active"
              to={a.to}
            >
              <Icon size="20px" className="app-nav-action-icon" />
              <Text size="medium">{a.title}</Text>
            </NavLink>
          );
        })}
      </Box>
    </Grid>
  );
}
