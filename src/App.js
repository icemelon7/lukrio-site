import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";

function App() {
  return (
    <div className="Main">
      <img className="Header--logo__image" src={Logo}/>
      <div className="Container">
        <div className="Main--text">
          <h1 className="Main--text__title">Connecting a new generation of investors</h1>
          <span className="Main--text__subtitle">
          A new online investing community platform, aimed at bringing together retail investors new and old, regardless of experience level.
          </span>
        </div>
        <img className="Main--mockup__image" src={Mockup}/>
      </div>
    </div>
  );
}

export default App;
