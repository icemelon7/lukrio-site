import React from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";

class HeroImage extends React.Component {
    constructor() {
      super();
      this.state = {
        email: ""
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
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
          <div className="Main--form__container">
            <input type="text" className="Main--form__input rounded" aria-label="Email" placeholder="Email Address" value={this.state.email} onChange={this.onChange}></input>
            <button type="button" className="btn btn-success Main--form__button" onClick={this.onSubmit}>Sign up for the beta</button>
          </div>
        </div>
        <img className="Main--mockup__image" src={Mockup}/>
      </div>
    </div>;
    }


    onSubmit() {
      fetch('https://script.google.com/a/macros/berkeley.edu/s/AKfycbybWl4bYKv4oDe4olBOU_sTADgZsx-Av-Ug0TJWXaAjfttesPfD8rPyaM0TZfIeO752/exec', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email
        })
      })
      .then((res) => res.text())
      .then(console.log)
      .catch(console.error);
    }

    onChange(event) {
      this.setState({email: event.target.value});
    }
  }


  

  export default HeroImage;