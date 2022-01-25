import HightLight from "./Highlight/Highlight";
import RenderVerse from "./Renderverse/RenderVerse";
import FeaturedIn from "./FeaturedIn/FeaturedIn";

import EcoSystem from "./EcoSystem";
import Mission from "./Misison";
import Action from "./Action";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Disrupting from "./Disrupting";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Element } from "react-scroll";

import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Element id="/" name="brand">
        <RenderVerse />
      </Element>

      <Element id="/mission" name="mission">
        <FeaturedIn title={"Featured In"} isFeatured={true} />
        <Mission />
      </Element>

      <Element id="/eco-system" name="eco-system">
        <EcoSystem />
        <Action />
        <Disrupting />
        <HightLight />
      </Element>

      <Element id="/roadmap" name="roadmap">
        <RoadMap />
      </Element>

      <Element id="/team" name="team">
        <Team />
      </Element>

      <Element id="/contact" name="contact">
        <FeaturedIn title={"Advisors and Backer"} isFeatured={false} />
        <Footer />
      </Element>
    </div>
  );
};
export default Home;
