import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bootFooter">
      <footer  style={{backgroundColor: "#e3f2fd"}}>
          <Link to="/" className="footerText">Copyright &copy; SuperChat</Link>
      </footer>
    </div>
  );
};

export default Footer;
