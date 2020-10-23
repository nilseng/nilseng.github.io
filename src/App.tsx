import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import LeftNav from "./LeftNav";
import Blog from "./Blog/Blog";

const App = () => {
  return (
    <div className="min-vh-100 bg-dark text-light p-4">
      <a className="h5 text-light" href="/home">
        Teodor's Portfolio.
      </a>
      <div className="d-flex">
        <LeftNav />
        <Router history={history}>
          <Container className="bg-dark p-4">
            <Switch>
              <Route path="/blog" component={Blog} />
            </Switch>
          </Container>
        </Router>
      </div>
    </div>
  );
};

export default App;
