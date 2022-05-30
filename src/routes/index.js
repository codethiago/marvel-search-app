import { Switch, Route } from "react-router-dom";
import React from "react";
import { Feed } from "../pages/Feed/index";
import { Details } from "../pages/Details";
import { Series } from "../pages/series";
import { ComicsPage } from "../pages/ComicsPage";
import { About } from "../pages/about";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/feed/:name/:id" component={Details} />
      <Route exact path="/feed/:name/:id/comics" component={ComicsPage} />
      <Route exact path="/feed/:name/:id/series" component={Series} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};
