import React from 'react';
import ReactDom, { render } from 'react-dom';
import Home from './containers/Home/Home';
import Lesson from './containers/Lesson/Lesson';
import Profile from './containers/Profile/Profile';
import { HashRouter, Route, Switch } from 'react-router-dom';

render(<HashRouter>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/lesson" component={Lesson} />
        <Route path="/profile" component={Profile} />
    </Switch>
</HashRouter>, document.getElementById('root'))