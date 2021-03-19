import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import routes from "./routes";
import Menu from "../components/Menu.js";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu></Menu>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
