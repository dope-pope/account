import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Example from './Example';
import MyAcc from './MyAcc';
import MyChat from './MyChat';
import MyOrder from './MyOrder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider >
        <App />
        <Switch>
                <Route exact path="/" component={Example} />
               
        </Switch>
            <App />
            </MuiThemeProvider >
    </BrowserRouter>
        ,
    document.getElementById('root')
);


