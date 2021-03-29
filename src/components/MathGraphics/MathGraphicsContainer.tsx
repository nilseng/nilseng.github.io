import React from "react";
import { match, Route, Switch } from "react-router-dom";
import SineParticles from "./SineParticles";
import StarBackground from "./StarBackground";

interface IProps {
  match: match;
}

const MathGraphicsContainer = ({ match }: IProps) => {
  return (
    <Switch>
      <Route path={`${match.url}/random-stars`} component={StarBackground} />
      <Route path={`${match.url}/sine-particles`} component={SineParticles} />
    </Switch>
  );
};

export default MathGraphicsContainer;
