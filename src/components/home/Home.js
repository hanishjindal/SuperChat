import React from "react";
import Footer from "../Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import moon from "./img/moon.png";
import stars from "./img/stars.png";
import mountains_behind from "./img/mountains_behind.png";
import mountains_front from "./img/mountains_front.png";
import ReactAnime from "react-animejs";

import "./Home.css";

const Home = () => {
  const { Anime, stagger } = ReactAnime;
  return (
    <div className="homeBody">
      <section className="homeSection">
        <img src={stars} id="stars" />
        <img src={moon} id="moon" />
        <img src={mountains_behind} id="mountains_behind" />
        <h2 id="text">
          <span>S</span>uper<span>C</span>hat
        </h2>
        <Link to='/superchat' id="btn">
          SuperChat
        </Link>
        <img src={mountains_front} id="mountains_front" />
      </section>
        <Footer />
      {/* <div className="homeClass">
        <h1>Welcome To SuperChat</h1>
        <br/>
        <br/>
        <h1>Chat with global community <br/> on a one single platform</h1>
        <br/>
        <br/>
        <h3>Visit: <Link to="/superchat"><button type="button" class="btn btn-primary">SuperChat</button></Link></h3>
      </div> */}
      <Anime
        initial={[
          {
            //1st segment
            targets: "#btn",
            top: "1500px",
            duration: 500,
            easing: "easeInOutSine",
          },
          {
            targets: "#stars",
            top: "0px",
            duration: 1000,
            easing: "easeInOutSine",
          },
          {
            targets: "#mountains_behind",
            bottom: "0px",
            duration: 1000,
            easing: "easeInOutSine",
          },
          {
            targets: "#moon",
            top: "0px",
            duration: 1000,
            easing: "easeInOutBack",
          },
          {
            targets: "#mountains_front",
            bottom: "0px",
            duration: 1000,
            easing: "easeInOutSine",
          },
          {
            targets: "#text",
            marginRight: "0px",
            duration: 1000,
            easing: "easeInOutBack",
          },
          {
            targets: "#btn",
            top: "50%",
            duration: 1000,
            easing: "easeInOutBack",
          },
        ]}
      />
    </div>
  );
};

export default Home;
