import React from "react";
import "./Contact.css";
import Footer from "../Footer";
import location from "./img/location.png"
import email from "./img/mail.png";
import call from "./img/call.png";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";

const Contact = () => {
  return (
    <div className="contactClass">
      <section className="contactSection">
        <div className="container">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src={location} />
                  </span>
                  <span>
                    2912 abcndj Road <br />
                    los Angeles, CA <br />
                    90017
                  </span>
                </li>
                <li>
                  <span>
                    <img src={email} />
                  </span>
                  <span> lorem@lorem.com </span>
                </li>
                <li>
                  <span>
                    <img src={call} />
                  </span>
                  <span> 910-1623 </span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="#">
                  <img className="socialImg" src={one} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="socialImg" src={two} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="socialImg" src={three} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="socialImg" src={four} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="socialImg" src={five} />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" name="" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="tel" name="" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea name="" required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

// className="contactDiv"
// <section className="contactSection">
//                 <div className="contactContainer">
//                     <h2>SuperChat Contact Us Form</h2>

//                     <div className="row100">
//                         <div className="col">
//                             <div className="inputBox">
//                                 <input type="text" name="" required="required" />
//                                 <span className="text">First Name</span>
//                                 <span className="line"></span>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="inputBox">
//                                 <input type="text" name="" required="required" />
//                                 <span className="text">Last Name</span>
//                                 <span className="line"></span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row100">
//                         <div className="col">
//                             <div className="inputBox">
//                                 <input type="text" name="" required="required" />
//                                 <span className="text">Email</span>
//                                 <span className="line"></span>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="inputBox">
//                                 <input type="text" name="" required="required" />
//                                 <span className="text">Mobile No.</span>
//                                 <span className="line"></span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row100">
//                         <div className="col">
//                             <div className="inputBox textarea">
//                                 <textarea required="required"></textarea>
//                                 <span className="text">Type Your Message Here...</span>
//                                 <span className="line"></span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row100">
//                         <div className="col">
//                             <input type="submit" value="Send" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
