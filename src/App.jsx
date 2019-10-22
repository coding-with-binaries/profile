import { Box, Grid, Grommet } from 'grommet';
import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import { theme } from './theme';

function App() {
  return (
    <Grommet className="app-container" theme={theme} full>
      <Grid
        rows={['72px', 'flex']}
        columns={['small', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
        style={{ height: '100%' }}
      >
        <Header />
        <Nav />
        <Box gridArea="main" />
      </Grid>
    </Grommet>
  );
}

export default App;
