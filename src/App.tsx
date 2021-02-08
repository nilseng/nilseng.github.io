import React from "react";
import Container from "react-bootstrap/Container";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import NavBar from "./components/NavBar";
import Blog from "./components/Blog/Blog";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Container className="p-4 appContainer">
          <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/ball" component={BackgroundAnimation} />
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
