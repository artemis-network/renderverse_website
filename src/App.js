import React, { Suspense } from "react";
import { BrowserRouter, } from 'react-router-dom'
import { Route, Switch } from "react-router";
import NFT from './redirects/Nfts'
import Swap from './redirects/Swap'
import Loader from './components/Loader/Loader'

import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'


const Token = React.lazy(() => import("./pages/Token/Token"));
const Home = React.lazy(() => import('./pages/Home/Home'))
const News = React.lazy(() => import("./pages/Home/News"));
const FAQ = React.lazy(() => import("./pages/Home/FAQ"));


const App = () => {

  React.useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Suspense fallback={Loader}>
            <Route component={Home} exact path={"/"} />
          </Suspense>
          <Route component={Token} exact path={"/token-launch"} />
          <Route component={Swap} exact path={"/sale"} />
          <Route component={NFT} exact path={"/nft-market-place"} />
          <Route component={News} exact path={"/news"} />
          <Route component={FAQ} exact path={"/faq"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
