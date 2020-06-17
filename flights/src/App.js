import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Search from "./components/travels/Search";
import Results from "./components/travels/Results";
import "./components/styles/css/style.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/busqueda" component={Search} />
            <Route exact path="/resultados" component={Results} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
