import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import NavBar from "./NavBar";
import Blog from "./Blog/Blog";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="min-vh-100 bg-dark text-light p-4">
        <div className="d-flex">
          <Router history={history}>
            <Container className="bg-dark p-4">
              <Switch>
                <Route path="/" component={Blog} />
              </Switch>
            </Container>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
