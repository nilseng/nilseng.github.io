import React from "react";
import { match, Route, Switch } from "react-router-dom";
import { BezierWave } from "./BezierWave";
import CircularAnimation from "./CircularAnimation";
import RandomPaths from "./RandomPaths";
import { RandomWeb } from "./RandomWeb";
import { ShootingStars } from "./ShootingStars";
import SineWave from "./SineWave";
import StarBackground from "./StarBackground";

interface IProps {
  match: match;
}

const MathGraphicsContainer = ({ match }: IProps) => {
  return (
    <Switch>
      <Route path={`${match.url}/random-stars`} component={StarBackground} />
      <Route path={`${match.url}/sine-wave`} component={SineWave} />
      <Route
        path={`${match.url}/circular-animation`}
        component={CircularAnimation}
      />
      <Route path={`${match.url}/random-paths`} component={RandomPaths} />
      <Route path={`${match.url}/shooting-stars`} component={ShootingStars} />
      <Route path={`${match.url}/random-web`} component={RandomWeb} />
      <Route path={`${match.url}/bezier-waves`} component={BezierWave} />
    </Switch>
  );
};

export default MathGraphicsContainer;
