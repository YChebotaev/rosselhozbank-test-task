import "reset.css"
import "./global.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Redirect, Route, Switch } from 'react-router'

import { AppLayout } from './layouts/AppLayout'
import { BrowserRouter } from 'react-router-dom'
import { Edit } from './pages/Edit'
import { NotFound } from './pages/NotFound';
import { Place } from './pages/Place'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { View } from './pages/View'
import reportWebVitals from './reportWebVitals';
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Redirect exact from="/" to="/place" />
            <Route exact path="/place" component={Place} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/view" component={View} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
