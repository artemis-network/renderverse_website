import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/renderverse/Navbar";
import Blog from "./pages/renderverse/Blog";
import Contact from "./pages/renderverse/Contact";
import Faqs from "./pages/renderverse/Faqs";
import Features from "./pages/renderverse/Features";
import Market from "./pages/renderverse/Market";
import Mission from "./pages/renderverse/Misison";
import RenderVerse from "./pages/renderverse/RenderVerse";

import { BrowserRouter, } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RenderVerse />
        <Market />
        <Mission />
        <Features />
        <Blog />
        <Faqs />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
