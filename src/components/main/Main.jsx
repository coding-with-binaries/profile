import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from '../../constants/routes';
import './Main.css';
import Education from './education';
import Home from './home';
import Experience from './experience';
import cn from 'classnames';

export default function (props) {
  const { navVisible } = props;

  return (
    <div className={cn('app-main', { 'nav-open': navVisible })}>
      <Switch>
        {/* <Route path={Routes.SKILLS} component={Skills} /> */}
        <Route path={Routes.EDUCATION} component={Education} />
        <Route path={Routes.EXPERIENCE} component={Experience} />
        <Route exact path={Routes.HOME} component={Home} />
        <Redirect to="/" exact={true} />
      </Switch>
    </div>
  );
}
