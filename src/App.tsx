import React from "react";
import Container from "react-bootstrap/Container";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Container className="p-4" style={{ minHeight: "calc(100vh - 259px)" }}>
          <Switch>
            <Route path="/blog" component={Blog} />
          </Switch>
        </Container>

        <Footer />
      </Router>
    </>
  );
};

export default App;
