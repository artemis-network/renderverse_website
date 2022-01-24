import React from "react";
import { Link } from "react-scroll";
import { BrowserRouter, } from 'react-router-dom'
import { Route, Switch } from "react-router";


import AOS from "aos";
import "aos/dist/aos.css";
import Token from "./pages/renderverse/Token";

import Home from './pages/renderverse/Home'

const App = () => {

  React.useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path={"/home"} />
          <Route component={Token} exact path={"/token"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
