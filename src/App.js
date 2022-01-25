import React from "react";
import { BrowserRouter, } from 'react-router-dom'
import { Route, Switch } from "react-router";


import AOS from "aos";
import "aos/dist/aos.css";

import Token from "./pages/Token/Token";
import Home from './pages/Home/Home'

const App = () => {

  React.useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path={"/"} />
          <Route component={Token} exact path={"/token"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
