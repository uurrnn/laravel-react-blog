require('./bootstrap');

import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import App from './components/App'


import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App}></Route>
                <Route exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/books" component={Book}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);