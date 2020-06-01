import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navActions from './nav-actions';
import './Nav.css';
import { Menu, Close } from 'grommet-icons';
import cn from 'classnames';

export default function () {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => setExpanded((prevExpanded) => !prevExpanded);
  const ToggleIcon = expanded ? Close : Menu;
  return (
    <div className={cn('app-nav', { expanded })}>
      <div className="app-nav-actions">
        <div className="app-nav-toggle" onClick={toggleNav}>
          <ToggleIcon size="20px" className="app-nav-action-icon" />
        </div>
        {navActions.map((a, i) => {
          const Icon = a.icon;
          return (
            <NavLink
              key={i}
              className="app-nav-action"
              activeClassName="active"
              title={a.title}
              to={a.to}
            >
              <Icon size="20px" className="app-nav-action-icon" />
              {expanded && (
                <span className="app-nav-action-text">{a.title}</span>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
