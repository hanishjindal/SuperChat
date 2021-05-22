import React, { Component } from "react";
import "./Contact.css";
import Footer from "../Footer";
import location from "./img/location.png";
import email from "./img/mail.png";
import call from "./img/call.png";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";

class Contact2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userEmail: "",
      userTel: "",
      userText: "",
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleUserEmailChange = (event) => {
    this.setState({ userEmail: event.target.value });
  };
  handleUserTelChange = (event) => {
    this.setState({ userTel: event.target.value });
  };
  handleUserTextChange = (event) => {
    this.setState({ userText: event.target.value });
  };
  handleSubmit = (event) => {
    alert(
      `Hi ${this.state.firstName} ${this.state.lastName},
Your email is "${this.state.userEmail}" and your mobile number is "${this.state.userTel}"

You message is:
${this.state.userText}

Thanks for contacting us, We will reach you soon...
      `
    );
  };

  render() {
    return (
      <div>
        <div className="contactClass">
          <section className="contactSection">
            <div className="contactContainer">
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
                <form onSubmit={this.handleSubmit}>
                  <div className="formBox">
                    <div className="inputBox w50">
                      <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                        name=""
                        required
                      />
                      <span>First Name</span>
                    </div>
                    <div className="inputBox w50">
                      <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                        name=""
                        required
                      />
                      <span>Last Name</span>
                    </div>
                    <div className="inputBox w50">
                      <input
                        type="text"
                        value={this.state.userEmail}
                        onChange={this.handleUserEmailChange}
                        name=""
                        required
                      />
                      <span>Email Address</span>
                    </div>
                    <div className="inputBox w50">
                      <input
                        type="tel"
                        value={this.state.userTel}
                        onChange={this.handleUserTelChange}
                        name=""
                        required
                      />
                      <span>Mobile Number</span>
                    </div>
                    <div className="inputBox w100">
                      <textarea
                        name=""
                        value={this.state.userText}
                        onChange={this.handleUserTextChange}
                        required
                      ></textarea>
                      <span>Write your message here...</span>
                    </div>
                    <div className="inputBox w100">
                      <input type="submit" value="Send" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact2;
