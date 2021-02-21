import React from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";

class HeroImage extends React.Component {
    render() {
      return <div className="Main">
      <div className="Header--container">
        <img className="Header--logo__image" src={Logo}/>
        <span className="Header--spacer"></span>
      </div>
      <div className="Main--container">
        <div className="Main--text">
          <h1 className="Main--text__title">Creating a new generation of investors</h1>
          <span className="Main--text__subtitle">
          A new online investing community platform, aimed at bringing together retail investors new and old, regardless of experience level.
          </span>
          <br/>
          <div class="Main--form__container">
            <input type="text" class="Main--form__input rounded" aria-label="Email" placeholder="Email Address" aria-describedby="inputGroup-sizing-default"></input>
            <button type="button" class="btn btn-success Main--form__button">Sign up for the beta</button>
          </div>
        </div>
        <img className="Main--mockup__image" src={Mockup}/>
      </div>
    </div>;
    }
  }

  export default HeroImage;