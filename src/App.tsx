import React from "react";
import Container from "react-bootstrap/Container";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog";
import BackgroundAnimation from "./components/BackgroundAnimation";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <BackgroundAnimation />
        <Container className="p-4 appContainer">
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
