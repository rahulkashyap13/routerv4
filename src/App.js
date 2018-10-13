import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Simple from "./container/Simple/Simple";
import Full from "./container/Full/Full";

import Home from "./component/Static/Home/Home";
import About from "./component/Static/About/About";
import Login from "./component/Auth/Login/Login";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class App extends Component {
  render() {
    return (
      <Switch>
        <AppRoute exact path="/" layout={Full} component={Home} />
        <AppRoute exact path="/about" layout={Full} component={About} />
        <AppRoute exact path="/login" layout={Simple} component={Login} />          
      </Switch>
    );
  }
}

export default App;
