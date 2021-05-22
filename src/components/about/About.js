import React from "react";
import Footer from "../Footer";
import "./About.css";
import profile from "./profile1.png"
import profile2 from "./profile2.png"
// import one from "../contact/img/1.png";
// import two from "../contact/img/2.png";
// import three from "../contact/img/3.png";

const About = () => {
  return (
    <div>
      <div className="aboutClass">
      <section className="aboutSection">
        <div className="aboutContainer">
            <div className="aboutCard">
                <div className="content">
                    <div className="imgBox"><img src={profile} /></div>
                    <div className="contentBox">
                        <h3>Hanish Jindal<br /><span>Founder</span></h3>
                    </div>
                </div>
                {/* <ul className="aboutSci">
                    <li><a href="#"><img className="socialImg" src={one} /></a></li>
                    <li><a href="#"><img className="socialImg" src={two} /></a></li>
                    <li><a href="#"><img className="socialImg" src={three} /></a></li>
                </ul> */}
            </div>
            <div className="aboutCard">
                <div className="content">
                    <div className="imgBox"><img src={profile2} /></div>
                    <div className="contentBox">
                        <h3>Bakshjot Singh<br /><span>Co-Founder</span></h3>
                    </div>
                </div>
                {/* <ul className="aboutSci">
                    <li><a href="#"><img className="socialImg" src={one} /></a></li>
                    <li><a href="#"><img className="socialImg" src={two} /></a></li>
                    <li><a href="#"><img className="socialImg" src={three} /></a></li>
                </ul> */}
            </div>
            {/* <div className="aboutCard">
                <div className="content">
                    <div className="imgBox"><img src={profile} /></div>
                    <div className="contentBox">
                        <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                    </div>
                </div>
                <ul className="aboutSci">
                    <li><a href="#"><img className="socialImg" src={one} /></a></li>
                    <li><a href="#"><img className="socialImg" src={two} /></a></li>
                    <li><a href="#"><img className="socialImg" src={three} /></a></li>
                </ul>
            </div> */}
        </div>
    </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
