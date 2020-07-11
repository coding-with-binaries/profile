import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import cn from 'classnames';

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [theme, setTheme] = useState('DARK');

  const toggleVisiblity = () => setNavVisible((prevExpanded) => !prevExpanded);
  const closeNav = () => setNavVisible(false);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'DARK' ? 'LIGHT' : 'DARK'));

  const renderMain = () => <Main navVisible={navVisible} />;
  return (
    <div className={cn('app-container', { light: theme === 'LIGHT' })}>
      <Header
        theme={theme}
        navVisible={navVisible}
        toggleVisiblity={toggleVisiblity}
        toggleTheme={toggleTheme}
        closeNav={closeNav}
      />
      <Nav />
      <Route path="/" render={renderMain} />
    </div>
  );
}

export default App;
