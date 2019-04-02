import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import AddTodos from "./views/AddTodos";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={AddTodos} />
  </BrowserRouter>
);

export default Routes;
