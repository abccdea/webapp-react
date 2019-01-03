import React from 'react';
import ReactDom, { render } from 'react-dom';
import Home from './containers/Home/Home';
import Lesson from './containers/Lesson/Lesson';
import Profile from './containers/Profile/Profile';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TabBar from './components/TabBar/TabBar';
import './common/index.less';

render(<HashRouter>
    <div>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/lesson" component={Lesson} />
            <Route path="/profile" component={Profile} />
        </Switch>
        <TabBar/>
    </div>
</HashRouter>, document.getElementById('root'))