import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import myacc from './myacc';
import App from './App';
import Home from './home';
import myChat from './myChat';
import myOrder from './myOrder'


ReactDOM.render(
    <BrowserRouter>
        <App>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:userId" component={Demo} />
                <Route exact path="/user/:userId/MyAccount" component={myacc} />
                <Route exact path="/user/:userId/MyChat" component={myChat} />
                <Route exact path="/user/:userId/MyOrder" component={myOrder} />
            </Switch>
        </App>
        
    </BrowserRouter>

    , document.querySelector('#root'));



