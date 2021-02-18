import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import NavBar from "./components/NavBar";
import Blog from "./components/Blog/Blog";
import Three from "./components/3D/Three";
import Projects from "./components/Projects/Projects";
import Boxes from "./components/3D/Boxes";
import Spheres from "./components/3D/Spheres";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/3D" component={Three} />
          <Route path="/boxes" component={Boxes} />
          <Route path="/spheres" component={Spheres} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
