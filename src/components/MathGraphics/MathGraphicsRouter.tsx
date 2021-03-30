import React from "react";
import { match, Route, Switch } from "react-router-dom";
import CircularAnimation from "./CircularAnimation";
import SineCosineAnimation from "./SineCosineAnimation";
import SineWave from "./SineWave";
import StarBackground from "./StarBackground";

interface IProps {
  match: match;
}

const MathGraphicsContainer = ({ match }: IProps) => {
  return (
    <Switch>
      <Route path={`${match.url}/random-stars`} component={StarBackground} />
      <Route
        path={`${match.url}/sine-cosine-animation`}
        component={SineCosineAnimation}
      />
      <Route path={`${match.url}/sine-wave`} component={SineWave} />
      <Route
        path={`${match.url}/circular-animation`}
        component={CircularAnimation}
      />
    </Switch>
  );
};

export default MathGraphicsContainer;