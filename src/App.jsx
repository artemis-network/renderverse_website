import { useEffect } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Aos from "aos";

import Home from "./pages/Home/Home";
import Token from "./pages/Token/Token";
import NFT from "./redirects/Nfts";
import News from "./pages/Home/News";
import Swap from "./redirects/Swap";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/token",
      element: <Token />,
    },
    {
      path: "/sale",
      element: <Swap />,
    },
    {
      path: "/nft-market-place",
      element: <NFT />,
    },
    {
      path: "/news",
      element: <News />,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Switch>
          {router.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
