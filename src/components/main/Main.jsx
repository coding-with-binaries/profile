import { Box } from 'grommet';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from '../../constants/routes';
import './Main.css';
import Skills from './skills';

export default function() {
  return (
    <Box className="app-main">
      <Switch>
        <Route path={Routes.SKILLS} component={Skills} />
        <Redirect to="/" exact={true} />
      </Switch>
    </Box>
  );
}
