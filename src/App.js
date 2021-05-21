import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/About';
import Header from './components/Header';
import Superchat from './components/Superchat';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact style={{overflow: 'hidden'}} />
          </Route>
          <Route
            path="/superchat"
            render={() => {
              return (
                <Superchat />
              );
            }}
          ></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
