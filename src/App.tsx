import * as React from "react";
import "./App.css";

import { Route } from "react-router";
import Login from "./containers/Auth/Login";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route path="/" component={Login} />
      </div>
    );
  }
}

export default App;
