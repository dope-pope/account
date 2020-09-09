import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Example from './Example';
import MyAcc from './MyAcc';
import MyChat from './MyChat';
import MyOrder from './MyOrder';
import Settings from './Settings';
import Help from './Help';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider >
        <App />
        <Switch>
                <Route exact path="/" component={Example} />
                <Route exact path="/user/MyAccount" component={MyAcc} />
                <Route exact path="/user/MyChat" component={MyChat} />
                <Route exact path="/user/MyOrder" component={MyOrder} />
                <Route exact path="/user/Settings" component={Settings} />
                <Route exact path="/user/Help" component={Help} />
        </Switch>
            <App />
            </MuiThemeProvider >
    </BrowserRouter>
        ,
    document.getElementById('root')
);


