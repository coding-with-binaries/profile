import { Clock } from 'grommet';
import React from 'react';
import './Header.css';
import { useHistory, Link } from 'react-router-dom';
import { Close, Menu } from 'grommet-icons';
import navActions from '../nav/nav-actions';

export default function (props) {
  const { navVisible, toggleVisiblity, closeNav } = props;
  const history = useHistory();
  const routeToHome = () => {
    closeNav();
    history.push('/');
  };

  const ToggleIcon = navVisible ? Close : Menu;
  return (
    <div className="app-header-container">
      <div className="app-header">
        <span className="app-title" onClick={routeToHome}>
          coding-with-binaries
        </span>
        <div className="app-header-extras">
          <span className="app-by">(By Varun Sharma)</span>
          <Clock className="app-header-clock" type="digital" size="small" />
          <ToggleIcon
            size="20px"
            className="app-header-nav-toggle"
            onClick={toggleVisiblity}
          />
        </div>
      </div>
      {navVisible && (
        <div className="app-header-nav">
          <div className="app-header-nav-actions">
            {navActions.map((a, i) => {
              const Icon = a.icon;
              return (
                <Link
                  key={i}
                  className="app-header-nav-action"
                  title={a.title}
                  to={a.to}
                  onClick={toggleVisiblity}
                >
                  <Icon size="20px" className="app-header-nav-action-icon" />
                  <span>{a.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
