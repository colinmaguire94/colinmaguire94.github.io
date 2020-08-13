import React from "react";
import ReactDOM from "react-dom";
import Hero from "./Hero.js";
import Work from "./Work.js";
import AboutMe from "./AboutMe.js";
import Timeline from "./Timeline.js";

const Main = () => {
  return(
    <div>
    <Hero />
    <p id="Spacing"/>
    <Work />
    <p id="Spacing"/>
    <AboutMe />
    <p id="Spacing"/>
    <Timeline />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("Main"));
