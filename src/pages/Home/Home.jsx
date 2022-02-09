import HightLight from "./Highlight/Highlight";
import RenderVerse from "./Renderverse/RenderVerse";
import FeaturedIn from "./FeaturedIn/FeaturedIn";

import EcoSystem from "./EcoSystem";
import Mission from "./Misison";
import Action from "./Action/Action";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Disrupting from "./Disrupting/Disrupting";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Element } from "react-scroll";

import React from "react";
import Tagline from "../../components/Tagline/Tagline";

const Home = () => {
  return (
    <div>
      <Tagline />
      <Navbar />

      <Element id="/" name="brand">
        <RenderVerse />
      </Element>

      <FeaturedIn
        title={"To be soon Featured In..."}
        isFeatured={true}
        hasBackers={true}
      />
      <Element id="/mission" name="mission">
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

      <FeaturedIn
        title={"Advisors and Backers"}
        isFeatured={false}
        hasBackers={false}
      />
      <Element id="/contact" name="contact">
        <Footer animation={"flip-left"} duration={400} ease={"linear"} />
      </Element>
    </div>
  );
};
export default Home;
