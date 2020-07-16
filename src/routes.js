import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Games from "./components/Games";
import Header from "./components/Header";
import Streams from "./components/Streams";
import GameStreams from "./components/GameStreams";
import GameClips from "./components/GameClips";
import TopClips from "./components/TopClips";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Games} />
      <Route exact path="/top-streams" component={Streams} />
      <Route exact path="/game/:id" component={GameStreams} />
      <Route exact path="/top-clips" component={GameClips} />
      <Route exact path="/top-clips/:id" component={TopClips} />
    </Router>
  );
}
