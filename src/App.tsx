import React from "react";
import Container from "react-bootstrap/Container";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import NavBar from "./components/NavBar";
import Blog from "./components/Blog/Blog";
import BackgroundAnimation from "./components/BackgroundAnimation";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Container className="p-4 appContainer">
          <Switch>
            <Route
              path="/"
              exact
              component={BackgroundAnimation}
              postion={"absolute"}
            />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
