import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// measure performance
import reportWebVitals from './reportWebVitals';
// views
import AppTest from './views/test/App';
import LandingPage from './views/landingPage/landingPage';
// styles
import 'assets/css/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>

        <Route path="/test" render={(props) => <AppTest {...props} />} />
        <Route path="/index" render={(props) => <LandingPage {...props} />} />

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />

      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
