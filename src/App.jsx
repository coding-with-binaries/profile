import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
function App() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleVisiblity = () => setNavVisible((prevExpanded) => !prevExpanded);
  const closeNav = () => setNavVisible(false);

  const renderMain = () => <Main navVisible={navVisible} />;
  return (
    <div className="app-container">
      <Header
        navVisible={navVisible}
        toggleVisiblity={toggleVisiblity}
        closeNav={closeNav}
      />
      <Nav />
      <Route path="/" render={renderMain} />
    </div>
  );
}

export default App;
