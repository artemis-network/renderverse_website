import React from "react";
import { BrowserRouter, } from 'react-router-dom'
import { Route, Switch } from "react-router";
import NFT from './redirects/Nfts'
import Swap from './redirects/Swap'

import './App.css'



import AOS from "aos";
import "aos/dist/aos.css";

import Token from "./pages/Token/Token";
import Home from './pages/Home/Home'
import News from "./pages/Home/News";
import FAQ from "./pages/Home/FAQ";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(true)

  React.useEffect(() => {
    AOS.init({});
    setTimeout(() => {
      setIsLoaded(false)
    }, 2000)
  }, [])

  return (
    <div >
      {isLoaded ? <Loader /> :
        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path={"/"} />
            <Route component={Token} exact path={"/token-launch"} />
            <Route component={Swap} exact path={"/sale"} />
            <Route component={NFT} exact path={"/nft-market-place"} />
            <Route component={News} exact path={"/news"} />
            <Route component={FAQ} exact path={"/faq"} />
          </Switch>
        </BrowserRouter>}
    </div>
  );
};

export default App;
