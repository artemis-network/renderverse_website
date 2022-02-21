import React from "react";
import { BrowserRouter, } from 'react-router-dom'
import { Route, Switch } from "react-router";

import NFT from './redirects/Nfts'
import Swap from './redirects/Swap'

import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'


import Token from "./pages/Token/Token";
import Home from './pages/Home/Home'
import News from './pages/Home/News'

const App = () => {

  React.useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path={"/"} />
          <Route component={Token} exact path={"/token-launch"} />
          <Route component={Swap} exact path={"/sale"} />
          <Route component={NFT} exact path={"/nft-market-place"} />
          <Route component={News} exact path={"/news"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
