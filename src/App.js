import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Simple from "./container/Simple/Simple";
import Full from "./container/Full/Full";
import Home from "./component/Static/Home/Home";
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
      <div>
        <Switch>
          <AppRoute exact path="/" layout={Simple} component={Login} />
          <AppRoute exact path="/list" layout={Full} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
