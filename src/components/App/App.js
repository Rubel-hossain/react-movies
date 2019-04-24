import React, { Component } from 'react';
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../elements/NotFound/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/:movieId" component={Movie}/>
            <Route component={NotFound}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}
