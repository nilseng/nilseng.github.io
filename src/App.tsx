import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Blog from "./components/Blog/Blog";
import Three from "./components/3D/Three";
import Projects from "./components/Projects/Projects";
import Boxes from "./components/3D/Boxes";
import Scene from "./components/3D/Scene";
import MathGraphicsRouter from "./components/MathGraphics/MathGraphicsRouter";
import { Birthday } from "./components/Birthday/Birthday";

const App = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/3D" component={Three} />
          <Route path="/boxes" component={Boxes} />
          <Route path="/three" component={Scene} />
          <Route path="/mathematical-graphics" component={MathGraphicsRouter} />
          <Route path="/birthday" component={Birthday} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
