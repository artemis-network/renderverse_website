import { useEffect } from "react";
import { Element } from "react-scroll";

import Tagline from "../../components/Tagline/Tagline";
import Navbar from "../../components/Navbar/Navbar";
import RenderVerse from "./Renderverse/RenderVerse";
import FeaturedIn from "./FeaturedIn/FeaturedIn";
import Mission from "./Misison";
import EcoSystem from "./EcoSystem";
import HighLight from "./Highlight/Highlight";
import Disrupting from "./Disrupting/Disrupting";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Footer from "../../components/Footer/Footer";

import "../../App.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div>
          <Mission />
        </div>
      </Element>

      <Element id="/eco-system" name="eco-system">
        <EcoSystem />
        <Disrupting />
        <HighLight />
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
